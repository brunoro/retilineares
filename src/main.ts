// @ts-ignore
import * as SVG from 'svg.js';
import Retilinear from './retilinear';

let audioContext: AudioContext;
const drawW = 297;
const drawH = 450;
let canvas = SVG('container').size('100%', '100%').viewbox(0, 0, drawW, drawH);

const retilineares = new Map<string, Retilinear>();

type Point = [number, number];

const rectMin = (r: SVG.Rect): Point => {
    const pos: Point = [r.x(), r.y()];
    const size: Point = [r.width(), r.height()];
    const points: Array<Point> = [
        pos,
        [pos[0] + size[0], pos[1]],
        [pos[0] + size[0], pos[1] + size[1]],
        [pos[0], pos[1] + size[1]]
    ];
    const coords: [number[], number[]] = [points.map(p => p[0]), points.map(p => p[1])];
    return [Math.min(...coords[0]), Math.min(...coords[1])];
};

const pathMin = (p: SVG.Path): Point => {
    const id = p.id();
    // @ts-ignore
    const color = new SVG.Color(p.style('fill'));
    const pos: Point = [p.x(), p.y()];

    const points: Array<Point> = [];
    let curr = pos;
    let prev = pos;
    for (const op of p.array().value) {
        // console.log(op);
        // @ts-ignore
        if (op[0] === 'M') {
            // @ts-ignore
            const [_, x, y]: [string, number, number] = op;
            prev = curr;
            curr = [x, y];
        // @ts-ignore
        } else if (op[0] === 'L') {
            // @ts-ignore
            const [_, x, y]: [string, number, number] = op;
            prev = curr;
            curr = [x, y];
            if (points[points.length - 1] !== prev) {
                points.push(prev);
            }
            points.push(curr);
        // @ts-ignore
        } else if (op[0] === 'C') {
            // @ts-ignore
            const [o, ax, ay, bx, by, x, y]: [string, number, number, number, number, number, number] = op;
            prev = curr;
            curr = [x, y];
            if (points[points.length - 1] !== prev) {
                points.push(prev);
            }
            points.push(curr);
        }
    }
    const coords: [number[], number[]] = [points.map(p => p[0]), points.map(p => p[1])];
    return [Math.min(...coords[0]), Math.min(...coords[1])];
};

const minPoint = ([ax, ay]: Point, [bx, by]: Point): Point => {
    return [Math.min(ax, bx), Math.min(ay, by)];
};

const parseRect = (r: SVG.Rect): [string, Array<Point>, SVG.Color] => {
    const id = r.id();
    // @ts-ignore
    const color = new SVG.Color(r.style('fill'));
    const pos: Point = [r.x(), r.y()];
    const size: Point = [r.width(), r.height()];
    const points: Array<Point> = [
        pos,
        [pos[0] + size[0], pos[1]],
        [pos[0] + size[0], pos[1] + size[1]],
        [pos[0], pos[1] + size[1]]
    ];
    return [id, points, color];
};

const parsePath = (p: SVG.Path): [string, Array<Point>, SVG.Color] => {
    const id = p.id();
    // @ts-ignore
    const color = new SVG.Color(p.style('fill'));
    const pos: Point = [p.x(), p.y()];

    const points: Array<Point> = [];
    let curr = pos;
    let prev = pos;
    for (const op of p.array().value) {
        // console.log(op);
        // @ts-ignore
        if (op[0] === 'M') {
            // @ts-ignore
            const [_, x, y]: [string, number, number] = op;
            prev = curr;
            curr = [x, y];
        // @ts-ignore
        } else if (op[0] === 'L') {
            // @ts-ignore
            const [_, x, y]: [string, number, number] = op;
            prev = curr;
            curr = [x, y];
            if (points[points.length - 1] !== prev) {
                points.push(prev);
            }
            points.push(curr);
        // @ts-ignore
        } else if (op[0] === 'C') {
            // @ts-ignore
            const [o, ax, ay, bx, by, x, y]: [string, number, number, number, number, number, number] = op;
            prev = curr;
            curr = [x, y];
            if (points[points.length - 1] !== prev) {
                points.push(prev);
            }
            points.push(curr);
        }
    }
    return [id, points, color];
};

// svg stuff
const loadSVG = async () => {
    const uri = '/fix.svg';
    const resp = await fetch(uri);
    const svgData = await resp.text();

    const draw = SVG('container').size('100%', '100%').viewbox(0, 0, drawW, drawH);

    draw.svg(svgData);

    let offset: Point = [0, 0];
    draw.select('path').each(function(i: number, members: SVG.Element[]) {
        const pOff = pathMin(this);
        offset = minPoint(offset, pOff);
    });
    draw.select('rect').each(function(i: number, members: SVG.Element[]) {
        const rOff = rectMin(this);
        offset = minPoint(offset, rOff);
    });
    offset = [offset[0] - 5, offset[1] - 5];

    draw.select('path').each(function(i: number, members: SVG.Element[]) {
        const path: SVG.Path = this;
        const [id, points, color] = parsePath(path);
        const absPoints: Point[] = points.map(([px, py]): Point => [px - offset[0], py - offset[1]]);
        const ret = new Retilinear(audioContext, canvas, color, absPoints);
        retilineares.set(id, ret);
    });
    draw.select('rect').each(function(i: number, members: SVG.Element[]) {
        const rect: SVG.Rect = this;
        const [id, points, color] = parseRect(rect);
        const absPoints: Point[] = points.map(([px, py]): Point => [px - offset[0], py - offset[1]]);
        const ret = new Retilinear(audioContext, canvas, color, absPoints);
        retilineares.set(id, ret);
    });

    draw.remove();
};

const playRand = (ev: MouseEvent) => {
    retilineares.forEach((ret) => {
        if (Math.random() < 0.2) {
            ret.play();
        }
    });
    return true;
};

const stopAll = (ev: MouseEvent) => {
    retilineares.forEach((ret) => ret.stop());
    return true;
};

const init = () => {
    if (audioContext == null) {
        audioContext = new AudioContext();
        loadSVG();
        document.getElementById('rand').onclick = playRand;
        document.getElementById('stop').onclick = stopAll;
    }
}
canvas.click(init);
canvas.touchstart(init);