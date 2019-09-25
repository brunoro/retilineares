// @ts-ignore
import * as SVG from 'svg.js';
// import { rgb2hsl } from './util';
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
        this.poly = this.canvas.polygon([[x, y], [x + w, y], [x + w, y + h], [x, y + h]])
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

        const [w, h] = this.size;
        const [x, y] = this.pos;

        const [cw, ch] = [10, 10];
        this.cursor = this.canvas.rect(cw, ch).x(x).y(y).attr('fill', 'gray');

        const dec = (l: number) => l / 400;
        const dur = (l: number) => l * 5;
        const [dx, dy] = [w - cw, h - ch];

        console.log(this.poly.array());

        const anims = [
            // top-left -> top-right
            (c: SVG.Shape): SVG.Animation => c.animate(dur(dx), '-').move(x + dx, y).after(() => {
                if (!this.isPlaying) return;
                this.synth.play(this.freq, dec(dy));
                return anims[1](c);
            }),
            // top-right -> bottom-right
            (c: SVG.Shape): SVG.Animation => c.animate(dur(dy), '-').move(x + dx, y + dy).after(() => {
                if (!this.isPlaying) return;
                this.synth.play(this.freq, dec(dx));
                return anims[2](c);
            }),
            // bottom-right -> bottom-left
            (c: SVG.Shape): SVG.Animation => c.animate(dur(dx), '-').move(x, y + dy).after(() => {
                if (!this.isPlaying) return;
                this.synth.play(this.freq, dec(dy));
                return anims[3](c);
            }),
            // bottom-left -> top-left
            (c: SVG.Shape): SVG.Animation => c.animate(dur(dy), '-').move(x, y).after(() => {
                if (!this.isPlaying) return;
                this.synth.play(this.freq, dec(dx));
                return anims[0](c);
            })
        ];

        this.synth.play(this.freq, dec(dx));
        anims[0](this.cursor);
    }

    stop() {
        this.cursor.remove();
        this.isPlaying = false;
    }
}

export default Retilinear;