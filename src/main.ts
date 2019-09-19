// @ts-ignore
// import { Scale, Note } from 'tonal'
// @ts-ignore
import Oscillators from 'web-audio-oscillators';

type Pixel = [number, number, number]
const rgb2hsl = ([r, g, b]: Pixel): Pixel => {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g , b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    // Calculate hue
    // No difference
    if (delta === 0)
    h = 0;
    // Red is max
    else if (cmax === r)
    h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax === g)
    h = (b - r) / delta + 2;
    // Blue is max
    else
    h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0)
        h += 360;

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return [h, s, l];
};

// osc
const audioContext = new AudioContext();
let osc = Oscillators.sine(audioContext);
let gain = audioContext.createGain();
let filter = audioContext.createBiquadFilter();
osc.connect(gain);
gain.connect(filter);
filter.connect(audioContext.destination);

// BPM
const bpmSpan = document.getElementById('bpm-span')
const bpmSlider = document.getElementById('bpm-slider')
const updateBPM = () => {
    const bpm = parseInt((bpmSlider as HTMLInputElement).value);
    bpmSpan.innerText = bpm.toString();
};
bpmSlider.oninput = updateBPM;
updateBPM();

// freq
const updateFreq = () => {
    const freq = 80;
    osc.frequency.value = freq;
    filter.frequency.value = freq * 2;
};

// start
const startBtn = document.getElementById('start-btn');
const oscStart = () => {
    updateFreq();
    osc.start(audioContext.currentTime);
};
startBtn.onclick = oscStart;

// stop
const stopBtn = document.getElementById('stop-btn');
const oscStop = () => {
    osc.stop(audioContext.currentTime);
    osc = Oscillators.sine(audioContext);
    gain = audioContext.createGain();
    filter = audioContext.createBiquadFilter();
    osc.connect(gain);
    gain.connect(filter);
    filter.connect(audioContext.destination);
};
stopBtn.onclick = oscStop;