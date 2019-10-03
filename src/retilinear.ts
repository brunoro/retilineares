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

        const self = this;
        const toggle = () => self.isPlaying ? self.stop() : self.play();
        this.poly.click(toggle);
    }

    play() {
        this.isPlaying = true;

        const [x, y] = this.points[0];

        const [cw, ch] = [5, 5];
        const [kx, ky] = [-cw / 2, -ch / 2];
        this.cursor = this.canvas.ellipse(cw, ch)
            .x(x + kx).y(y + ky)
            .attr('fill', this.color.toString());
        this.cursor.front();

        const dec = (l: number) => Math.abs(l) / 200;
        // const dur = (l: number) => l * 6;
        const dur = (l: number) => Math.abs(l) * 18;
        const oct = (l: number) => {
            const al = Math.abs(l);
            let mul = -2;
            if (al < 25) {
                mul = 2;
            } else if (al < 80) {
                mul = 1;
            } else if (al < 160) {
                mul = 0;
            } else if (al < 250) {
                mul = -1;
            }
            return Math.pow(2, mul);
        };

        // const points = this.poly.array();
        const animate = (step: number) => {
            this.cursor.front();

            const len = this.points.length;
            const p = mod(step - 1, len);
            // @ts-ignore
            const [px, py] = this.points[p];

            const n = mod(step, len);
            // @ts-ignore
            const [nx, ny] = this.points[n];
            const [dx, dy] = [nx - px, ny - py];

            // skip zero steps
            if (dx + dy === 0) {
                animate(step + 1);
                return;
            }

            this.synth.play(this.note * oct(dx + dy), dec(dx + dy));

            const flashColor = '#fff';
            const shapeColor = this.color.toString();

            this.poly.attr('fill', flashColor);
            const polyFlash = this.poly.animate(dur(dx + dy), '>')
                .attr({ fill: shapeColor });

            this.cursor.attr('fill', flashColor);
            this.cursor.animate(dur(dx + dy), '>')
                .move(nx + kx, ny + ky)
                .attr({ fill: shapeColor })
                .after(() => {
                    polyFlash.stop();
                    if (!this.isPlaying) return;

                    animate(step + 1);
                });
        };
        animate(1);
    }

    stop() {
        if (this.cursor) {
            this.cursor.remove();
        }
        this.isPlaying = false;
        return true;
    }
}

export default Retilinear;