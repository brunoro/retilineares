// @ts-ignore
import Oscillators from 'web-audio-oscillators';
import * as SVG from 'svg.js';
import { rgb2hsl } from './util';

class Slice {
    isPlaying: boolean;

    audioCtx: AudioContext;
    osc0: OscillatorNode;
    osc1: OscillatorNode;
    gain: GainNode;
    filter: BiquadFilterNode;

    rect: SVG.Rect;

    constructor(rect: SVG.Rect, audioCtx: AudioContext) {
        this.isPlaying = false;

        this.rect = rect;
        this.audioCtx = audioCtx;
    }

    play() {
        this.osc0 = Oscillators.sine(this.audioCtx);
        this.osc1 = Oscillators.sine(this.audioCtx);
        this.gain = this.audioCtx.createGain();
        this.filter = this.audioCtx.createBiquadFilter();

        this.osc0.connect(this.gain);
        this.osc1.connect(this.gain);
        this.gain.connect(this.filter);
        this.filter.connect(this.audioCtx.destination);

        const fill = this.rect.style('fill');
        const col = new SVG.Color(fill);
        const b = col.brightness();
        const freq = b * 220 + 60;
        const [h, s, l] = rgb2hsl(col);
        const mod = h / 100;

        this.osc0.frequency.value = freq;
        this.osc1.frequency.value = freq * mod;
        this.filter.frequency.value = freq * 2;

        this.osc0.start(this.audioCtx.currentTime);
        this.osc1.start(this.audioCtx.currentTime);

        this.isPlaying = true;
    }

    stop() {
        this.osc0.stop(this.audioCtx.currentTime);
        this.osc1.stop(this.audioCtx.currentTime);

        this.isPlaying = false;
    }

    toggle() {
        this.isPlaying ? this.stop() : this.play();
    }
}

export default Slice;