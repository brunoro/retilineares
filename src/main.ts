// @ts-ignore
// import { Scale, Note } from 'tonal'
// @ts-ignore
import Oscillators from 'web-audio-oscillators';
import * as SVG from 'svg.js';

type HSVColor = [number, number, number]
const rgb2hsl = (col: SVG.Color): HSVColor => {
    // Make r, g, and b fractions of 1
    const r = col.r / 255;
    const g = col.g / 255;
    const b = col.b / 255;

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

    return [h / 255, s / 255, l / 255];
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
const bpmSpan = document.getElementById('bpm-span');
const bpmSlider = document.getElementById('bpm-slider');
const updateBPM = () => {
    const bpm = parseInt((bpmSlider as HTMLInputElement).value);
    bpmSpan.innerText = bpm.toString();
};
bpmSlider.oninput = updateBPM;
updateBPM();

// freq
const updateFreq = (freq: number) => {
    osc.frequency.value = freq;
    filter.frequency.value = freq * 2;
};

// start
const startBtn = document.getElementById('start-btn');
const oscStart = () => {
    updateFreq(1);
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

// svg stuff
const loadSVG = async () => {
    const uri = '/test.svg';
    const resp = await fetch(uri);
    const svgData = await resp.text();

    const container = document.getElementById('container');
    const h = container.clientHeight;
    const w = container.clientWidth;

    const draw = SVG('container').svg(svgData);
    draw.select('rect').click(function() {
        const fill = this.style('fill');
        const col = new SVG.Color(fill);
        const b = col.brightness();
        const freq = b * 220 + 60;
        const [h, s, l] = rgb2hsl(col);
        console.log(freq);
        updateFreq(freq);
    });
};
loadSVG();