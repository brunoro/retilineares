// @ts-ignore
import Oscillators from 'web-audio-oscillators';

class BleepSynth {
    audioCtx: AudioContext;
    freq: number;

    constructor(freq: number, audioCtx: AudioContext) {
        this.freq = freq;
        this.audioCtx = audioCtx;
    }

    play(freq: number, dec: number) {
        // console.log('play!', freq, dec);

        const osc = Oscillators.sine(this.audioCtx);
        const adsr = this.audioCtx.createGain();
        const filter = this.audioCtx.createBiquadFilter();

        osc.connect(adsr);
        adsr.connect(filter);
        filter.connect(this.audioCtx.destination);

        // adsr
        const t0 = this.audioCtx.currentTime;
        osc.start(t0);
        // vol:0
        adsr.gain.setValueAtTime(0, t0);
        // attack
        const t1 = t0 + 0.01;
        adsr.gain.linearRampToValueAtTime(0.8, t1);
        // decay
        const t2 = t1 + dec;
        const sus = 0.01;
        adsr.gain.exponentialRampToValueAtTime(sus, t2);
        // gate
        const stop = setInterval(() => {
            if (adsr.gain.value < 0.01) {
                osc.stop();
                clearInterval(stop);
            }
        }, 100);

        osc.frequency.value = freq;
        filter.frequency.value = freq * 2;
    }
}

export { BleepSynth };
