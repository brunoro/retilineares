// @ts-ignore
import * as SVG from 'svg.js';
import { mod } from './util';
import { BleepSynth } from './synth';

class Retilinear {
    isPlaying: boolean;
    note: number;

    audioCtx: AudioContext;
    synth: BleepSynth;

    canvas: SVG.Doc;
    color: SVG.Color;

    points: Array<[number, number]>;
    poly: SVG.Polygon;
    cursor: SVG.Shape;

    constructor(audioCtx: AudioContext, canvas: SVG.Doc, color: SVG.Color, points: Array<[number, number]>) {
        this.isPlaying = false;

        const b = color.brightness();

        // const pitchBase = 440;
        const pitchBase = 300;
        this.note = b * pitchBase + 60;

        // const [h, s, l] = rgb2hsl(col);
        // const mod = h / 100;
        this.audioCtx = audioCtx;
        this.synth = new BleepSynth(this.note, this.audioCtx);
        this.canvas = canvas;
        this.color = color;
        this.points = points;

        this.draw();
    }


    draw() {
        this.poly = this.canvas.polygon(this.points).attr('fill', this.color.toString());

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

        const [x, y] = this.points[0];

        const [cw, ch] = [20, 20];
        const [kx, ky] = [-cw / 2, -ch / 2];
        this.cursor = this.canvas.ellipse(cw, ch)
            .x(x + kx).y(y + ky)
            .attr('fill', this.color.toString());

        const dec = (l: number) => l / 400;
        const dur = (l: number) => l * 6;
        const oct = (l: number) => {
            const mul = 2 - Math.ceil(l / 500);
            return Math.pow(2, mul);
        };

        // const points = this.poly.array();
        const animate = (step: number) => {
            const len = this.points.length;
            const p = mod(step - 1, len);
            // @ts-ignore
            const [px, py] = this.points[p];

            const n = mod(step, len);
            // @ts-ignore
            const [nx, ny] = this.points[n];

            const [dx, dy] = [Math.abs(nx - px), Math.abs(ny - py)];
            this.synth.play(this.note * oct(dx + dy), dec(dx + dy));
            const synth = this.synth;
            this.cursor.animate(dur(dx + dy), '-').move(nx + kx, ny + ky).after(() => {
                if (!this.isPlaying) return;
                animate(step + 1);
            // @ts-ignore
            }).during(function(pos, morph, eased, situation) {
                synth.setFilterProps(1 + pos, 0.9);
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