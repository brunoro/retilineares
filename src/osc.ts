// @ts-ignore
import Oscillators from 'web-audio-oscillators';

class MonoSynth {
    audioCtx: AudioContext;
    osc: OscillatorNode;
    gain: GainNode;
    filter: BiquadFilterNode;
    freq: number;
    isPlaying: boolean;

    constructor(freq: number, audioCtx: AudioContext) {
        this.freq = freq;
        this.audioCtx = audioCtx;
    }

    play() {
        this.osc = Oscillators.sine(this.audioCtx);
        this.gain = this.audioCtx.createGain();
        this.filter = this.audioCtx.createBiquadFilter();

        this.osc.connect(this.gain);
        this.gain.connect(this.filter);
        this.filter.connect(this.audioCtx.destination);

        this.osc.frequency.value = this.freq;
        this.filter.frequency.value = this.freq * 2;

        this.osc.start(this.audioCtx.currentTime);
    }

    stop() {
        this.osc.stop(this.audioCtx.currentTime);
    }
}

class SynthPlayer {
    audioCtx: AudioContext;
    noteCounter: Map<number, number>;
    notePlayers: Map<number, MonoSynth>;

    constructor(audioCtx: AudioContext) {
        this.audioCtx = audioCtx;
        this.noteCounter = new Map<number, number>();
        this.notePlayers = new Map<number, MonoSynth>();
    }

    play(freq: number) {
        const currCount = this.noteCounter.has(freq) ? this.noteCounter.get(freq) : 0;
        if (currCount === 0) {
            const player = this.notePlayers.has(freq) ? this.notePlayers.get(freq) : new MonoSynth(freq, this.audioCtx);
            this.notePlayers.set(freq, player);
            player.play();
        }
        this.noteCounter.set(freq, currCount + 1);
    }

    stop (freq: number) {
        if (this.noteCounter.has(freq)) {
            const currCount =  this.noteCounter.get(freq);
            if (currCount === 1) {
                if (this.notePlayers.has(freq)) {
                    this.notePlayers.get(freq).stop();
                }
            }
            this.noteCounter.set(freq, currCount - 1);
        }
    }
}

export { MonoSynth, SynthPlayer };
