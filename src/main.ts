// @ts-ignore
import * as SVG from 'svg.js';
import Retilinear from './retilinear';

let audioContext: AudioContext;
const drawW = 297;
const drawH = 450;
let canvas = SVG('container').size('100%', '100%').viewbox(0, 0, drawW, drawH);

const retilineares = new Map<string, Retilinear>();

type Point = [number, number];

const minPoint = ([ax, ay]: Point, [bx, by]: Point): Point => {
    return [Math.min(ax, bx), Math.min(ay, by)];
};

const dist = ([ax, ay]: Point, [bx, by]: Point): number => {
    return Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay + by, 2));
};

const parseRect = (r: SVG.Rect): [string, Array<Point>, SVG.Color] => {
    const id = r.id();
    // @ts-ignore
    const color = new SVG.Color(r.style('fill'));
    const xt = r.screenCTM().extract();
    const t = {x: xt.x, y: xt.y};
    // console.log('TEE', t);
    const pos: Point = [r.x() + t.x, r.y() + t.y];
    const size: Point = [r.width(), r.height()];
    const points: Array<Point> = [
        pos,
        [pos[0] + size[0], pos[1]],
        [pos[0] + size[0], pos[1] + size[1]],
        [pos[0], pos[1] + size[1]]
    ];
    // console.log('rect', id, points, color);
    return [id, points, color];
};

const parsePath = (p: SVG.Path): [string, Array<Point>, SVG.Color] => {
    const id = p.id();
    // @ts-ignore
    const color = new SVG.Color(p.style('fill'));
    const xt = p.screenCTM().extract();
    const t = {x: xt.x, y: xt.y};
    // console.log('TEE', t);
    const pos: Point = [p.x() + t.x, p.y() + t.y];

    const points: Array<Point> = [];
    let curr = pos;
    let prev = pos;
    for (const op of p.array().value) {
        // @ts-ignore
        if (op[0] === 'M') {
            // @ts-ignore
            const [_, x, y]: [string, number, number] = op;
            prev = curr;
            curr = [x + t.x, y + t.y];
        // @ts-ignore
        } else if (op[0] === 'H') {
            // @ts-ignore
            const [_, x]: [string, number] = op;
            prev = curr;
            curr = [x + t.x, prev[1]];
            if (dist(curr, prev) > 1) {
                points.push(prev);
            }
            points.push(curr);
        // @ts-ignore
        } else if (op[0] === 'V') {
            // @ts-ignore
            const [_, y]: [string, number] = op;
            prev = curr;
            curr = [prev[0], y + t.y];
            if (dist(curr, prev) > 1) {
                points.push(prev);
            }
            points.push(curr);
        // @ts-ignore
        } else if (op[0] === 'L') {
            // @ts-ignore
            const [_, x, y]: [string, number, number] = op;
            prev = curr;
            curr = [x + t.x, y + t.y];
            if (dist(curr, prev) > 1) {
                points.push(prev);
            }
            points.push(curr);
        // @ts-ignore
        } else if (op[0] === 'C') {
            // @ts-ignore
            const [o, ax, ay, bx, by, x, y]: [string, number, number, number, number, number, number] = op;
            prev = curr;
            curr = [x + t.x, y + t.y];
            if (dist(curr, prev) > 1) {
                points.push(prev);
            }
            points.push(curr);
        }
    }
    // console.log('path', id, points, color);
    return [id, points, color];
};

let loaded = false;
const init = () => {
    if (!loaded) {
        loaded = true;
        if ('webkitAudioContext' in window) {
            // @ts-ignore
            audioContext = new webkitAudioContext();

            // play a dummy sound to activate context
            const buffer = audioContext.createBuffer(1, 1, 22050);
            const source = audioContext.createBufferSource();
            source.buffer = buffer;
            source.connect(audioContext.destination);
            source.start(0);
        } else {
            audioContext = new AudioContext();
        }
        document.getElementById('initmsg').remove();
        retilineares.forEach(r => r.setAudioCtx(audioContext));
        // document.getElementById('rand').onclick = playRand;
        // document.getElementById('stop').onclick = stopAll;
    }
};

const loadSVG = async () => {
    const container = document.getElementById('container');
    const num = container.className.replace('klass', '');
    const uri = `/${num}.svg`;
    const resp = await fetch(uri);
    const svgData = await resp.text();

    const draw = SVG('container').size('100%', '100%').viewbox(0, 0, drawW, drawH);

    draw.svg(svgData);

    let offset: Point = [0, 0];
    let allPoints: Point[] = [];

    draw.select('path').each(function(i: number, members: SVG.Element[]) {
        const path: SVG.Path = this;
        const [id, points, color] = parsePath(path);
        allPoints.push(...points);
    });
    draw.select('rect').each(function(i: number, members: SVG.Element[]) {
        const rect: SVG.Rect = this;
        const [id, points, color] = parseRect(rect);
        allPoints.push(...points);
    });

    offset = allPoints.reduce(minPoint);
    // console.log('OFFSET', offset);

    draw.select('path').each(function(i: number, members: SVG.Element[]) {
        const path: SVG.Path = this;
        const [id, points, color] = parsePath(path);
        const absPoints: Point[] = points.map(([px, py]): Point => [px - offset[0], py - offset[1]]);
        // console.log('abs path', id, absPoints);
        const ret = new Retilinear(canvas, color, absPoints, init);
        retilineares.set(id, ret);
    });
    draw.select('rect').each(function(i: number, members: SVG.Element[]) {
        const rect: SVG.Rect = this;
        const [id, points, color] = parseRect(rect);
        const absPoints: Point[] = points.map(([px, py]): Point => [px - offset[0], py - offset[1]]);
        // console.log('abs rect', id, absPoints);
        const ret = new Retilinear(canvas, color, absPoints, init);
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

loadSVG();