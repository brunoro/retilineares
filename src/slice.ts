// @ts-ignore
import * as SVG from 'svg.js';
// import { rgb2hsl } from './util';
import { MonoSynth, SynthPlayer } from './osc';

class Slice {
    isPlaying: boolean;
    freq: number;

    audioCtx: AudioContext;
    rect: SVG.Rect;
    synthPlayer: SynthPlayer;

    constructor(rect: SVG.Rect, synthPlayer: SynthPlayer) {
        this.isPlaying = false;

        this.rect = rect;

        const fill = this.rect.style('fill');
        const col = new SVG.Color(fill);
        const b = col.brightness();
        this.freq = b * 220 + 60;


        // const [h, s, l] = rgb2hsl(col);
        // const mod = h / 100;
        this.synthPlayer = synthPlayer;
    }

    play() {
        this.synthPlayer.play(this.freq);
        this.isPlaying = true;
    }

    stop() {
        this.synthPlayer.stop(this.freq);
        this.isPlaying = false;
    }

    toggle() {
        this.isPlaying ? this.stop() : this.play();
    }
}

export default Slice;