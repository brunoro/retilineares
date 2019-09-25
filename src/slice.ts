// @ts-ignore
import * as SVG from 'svg.js';
// import { rgb2hsl } from './util';
import { MonoSynth, SynthPlayer } from './osc';

class Slice {
    isPlaying: boolean;
    freq: number;

    canvas: SVG.Doc;
    audioCtx: AudioContext;
    rect: SVG.Element;
    synthPlayer: SynthPlayer;

    cursor: SVG.Element;

    constructor(canvas: SVG.Doc, rect: SVG.Rect, synthPlayer: SynthPlayer) {
        this.isPlaying = false;

        this.rect = rect;

        const fill = this.rect.style('fill');
        const col = new SVG.Color(fill);
        const b = col.brightness();
        this.freq = b * 220 + 60;

        // const [h, s, l] = rgb2hsl(col);
        // const mod = h / 100;
        this.synthPlayer = synthPlayer;
        this.canvas = canvas;
    }

    play() {
        this.synthPlayer.play(this.freq);
        this.isPlaying = true;

        this.cursor = SVG(this.rect.id()).rect(10, 10);
        console.log(this.cursor);
    }

    stop() {
        this.synthPlayer.stop(this.freq);
        this.isPlaying = false;

        this.cursor.remove();
    }

    toggle() {
        this.isPlaying ? this.stop() : this.play();
    }
}

export default Slice;