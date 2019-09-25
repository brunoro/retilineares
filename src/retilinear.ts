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
    rect: SVG.Rect;
    color: SVG.Color;
    pos: [number, number];
    size: [number, number];

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
        this.rect = this.canvas.rect(w, h).x(x).y(y).attr('fill', this.color.toString());

        const toggle = () => this.isPlaying ? this.stop() : this.play();
        this.rect.click(function() {
            console.log(this);
            toggle();
        });
    }

    undraw() {

    }

    play() {
        console.log(this);
        const [w, h] = this.size;
        this.synth.play(this.freq, (w + h) * 2 / 200);
    }

    stop() {
        this.isPlaying = false;
    }
}

export default Retilinear;