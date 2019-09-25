// @ts-ignore
import * as SVG from 'svg.js';
import { mod } from './util';
import { BleepSynth } from './synth';

class Retilinear {
    isPlaying: boolean;
    freq: number;

    audioCtx: AudioContext;
    synth: BleepSynth;

    canvas: SVG.Doc;
    color: SVG.Color;
    pos: [number, number];
    size: [number, number];

    poly: SVG.Polygon;
    cursor: SVG.Shape;

    constructor(audioCtx: AudioContext, canvas: SVG.Doc, color: SVG.Color, pos: [number, number], size: [number, number]) {
        this.isPlaying = false;

        const b = color.brightness();
        this.freq = b * 220 + 60;

        // const [h, s, l] = rgb2hsl(col);
        // const mod = h / 100;
        this.audioCtx = audioCtx;
        this.synth = new BleepSynth(this.freq, this.audioCtx);
        this.canvas = canvas;
        this.color = color;
        this.pos = pos;
        this.size = size;

        this.draw();
    }


    draw() {
        const [x, y] = this.pos;
        const [w, h] = this.size;
        this.poly = this.canvas.polygon([[x, y], [x + w, y], [x + w, y + h], [x, y + h])
            .attr('fill', this.color.toString());

        const toggle = () => this.isPlaying ? this.stop() : this.play();
        this.poly.click(function() {
            toggle();
            return true;
        });
    }

    undraw() {

    }

    play() {
        this.isPlaying = true;

        const [x, y] = this.pos;

        const [cw, ch] = [10, 10];
        const [kx, ky] = [-cw / 2, -ch / 2];
        this.cursor = this.canvas.rect(cw, ch)
            .x(x + kx).y(y + ky)
            .attr('fill', 'gray');

        const dec = (l: number) => l / 400;
        const dur = (l: number) => l * 6;

        const points = this.poly.array();
        const animate = (step: number) => {
            const len = points.value.length;
            const p = mod(step - 1, len);
            // @ts-ignore
            const [px, py] = points.value[p];

            const n = mod(step, len);
            // @ts-ignore
            const [nx, ny] = points.value[n];

            const [dx, dy] = [Math.abs(nx - px), Math.abs(ny - py)];
            this.synth.play(this.freq, dec(dx + dy));
            this.cursor.animate(dur(dx + dy), '-').move(nx + kx, ny + ky).after(() => {
                if (!this.isPlaying) return;
                animate(step + 1);
            });
        };
        animate(1);
    }

    stop() {
        this.cursor.remove();
        this.isPlaying = false;
    }
}

export default Retilinear;