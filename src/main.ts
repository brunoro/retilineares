// @ts-ignore
import * as SVG from 'svg.js';
import Retilinear from './retilinear';

let audioContext: AudioContext;
let canvas = SVG('container').size('100%', '100%').viewbox(0, 0, 1920, 768);

const retilineares = new Map<string, Retilinear>();

const rect = (r: SVG.Rect, s: number) => {
    const id = r.id();
    // @ts-ignore
    const color = new SVG.Color(r.style('fill'));
    const pos: [number, number] = [r.x() * s, r.y() * s];
    const size: [number, number] = [r.width() * s, r.height() * s];
    const points: Array<[number, number]> = [
        pos,
        [pos[0] + size[0], pos[1]],
        [pos[0] + size[0], pos[1] + size[1]],
        [pos[0], pos[1] + size[1]]
    ];
    const ret = retilineares.has(id) ? retilineares.get(id) : new Retilinear(audioContext, canvas, color, points);
    retilineares.set(id, ret);
};

const path = (p: SVG.Path, s: number) => {
    const id = p.id();
    // @ts-ignore
    const color = new SVG.Color(p.style('fill'));
    const pos: [number, number] = [p.x() * s, p.y() * s];

    const points: Array<[number, number]> = [];
    let curr = pos;
    let prev = pos;
    for (const op of p.array().value) {
        // console.log(op);
        // @ts-ignore
        if (op[0] === 'M') {
            // @ts-ignore
            const [_, x, y]: [string, number, number] = op;
            prev = curr;
            curr = [x * s, y * s];
        // @ts-ignore
        } else if (op[0] === 'L') {
            // @ts-ignore
            const [_, x, y]: [string, number, number] = op;
            prev = curr;
            curr = [x * s, y * s];
            if (points[points.length - 1] !== prev) {
                points.push(prev);
            }
            points.push(curr);
        // @ts-ignore
        } else if (op[0] === 'C') {
            // @ts-ignore
            const [o, ax, ay, bx, by, x, y]: [string, number, number, number, number, number, number] = op;
            prev = curr;
            curr = [x * s, y * s];
            if (points[points.length - 1] !== prev) {
                points.push(prev);
            }
            points.push(curr);
        }
    }
    const ret = retilineares.has(id) ? retilineares.get(id) : new Retilinear(audioContext, canvas, color, points);
    retilineares.set(id, ret);
};

// click handler
/*
canvas.click(function(ev: MouseEvent) {
    if (audioContext == null) {
        audioContext = new AudioContext();
    }
    const id = this.id();

    const pos: [number, number] = [ev.clientX, ev.clientY];
    const size: [number, number] = [290, 150];
    const color = new SVG.Color('#eeaa00');
    rect(id, color, pos, size);
});
*/

// svg stuff
const loadSVG = async () => {
    const uri = '/poly.svg';
    const resp = await fetch(uri);
    const svgData = await resp.text();

    const draw = SVG('container').size('100%', '100%').viewbox(0, 0, 1024, 768);

    draw.svg(svgData);

    draw.select('path').each(function(i: number, members: SVG.Element[]) {
        path(this, 4);
    });
    draw.select('rect').each(function(i: number, members: SVG.Element[]) {
        rect(this, 4);
    });

    draw.remove();
};


canvas.click(function(ev: MouseEvent) {
    if (audioContext == null) {
        audioContext = new AudioContext();
    }
    loadSVG();
});