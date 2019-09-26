// @ts-ignore
import * as SVG from 'svg.js';
import Retilinear from './retilinear';

let audioContext: AudioContext;

const retilineares = new Map<string, Retilinear>();
const canvas = SVG('container').size(800, 600).viewbox(0, 0, 1024, 768);

const rect = (id: string, color: SVG.Color, pos: [number, number], size: [number, number]) => {
    const points: Array<[number, number]> = [pos,
        [pos[0] + size[0], pos[1]],
        [pos[0] + size[0], pos[1] + size[1]],
        [pos[0], pos[1] + size[1]]
    ];
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
    const uri = '/test.svg';
    const resp = await fetch(uri);
    const svgData = await resp.text();

    const draw = SVG('container').size(1024, 768).viewbox(0, 0, 1024, 768);
    draw.svg(svgData);

    draw.select('rect').each(function(i: number, members: SVG.Element[]) {
        const r: SVG.Rect = this;
        const s = 4;
// @ts-ignore
        rect(r.id(), new SVG.Color(r.style('fill')), [r.x() * s, r.y() * s], [r.width() * s, r.height() * s]);
    });

    draw.remove();
};


canvas.click(function(ev: MouseEvent) {
    if (audioContext == null) {
        audioContext = new AudioContext();
    }
    loadSVG();
});