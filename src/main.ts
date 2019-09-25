// @ts-ignore
import * as SVG from 'svg.js';
import Slice from './slice';
import { SynthPlayer } from './osc';

// osc
const audioContext = new AudioContext();

// BPM
const bpmSpan = document.getElementById('bpm-span');
const bpmSlider = document.getElementById('bpm-slider');
const updateBPM = () => {
    const bpm = parseInt((bpmSlider as HTMLInputElement).value);
    bpmSpan.innerText = bpm.toString();
};
bpmSlider.oninput = updateBPM;
updateBPM();

const slices = new Map<string, Slice>();
const synthPlayer = new SynthPlayer(audioContext);

// stop
const stopBtn = document.getElementById('stop-btn');
const oscStop = () => {
    slices.forEach((slice) => slice.stop());
};
stopBtn.onclick = oscStop;

const canvas = SVG('container');

// click handler
const onClick = function() {
    console.log(this);
    const rect: SVG.Rect = this;
    const id = this.id();
    const slice = slices.has(id) ? slices.get(id) : new Slice(canvas, rect, synthPlayer);
    slices.set(id, slice);
    slice.toggle();
};

// svg stuff
const loadSVG = async () => {
    const uri = '/test.svg';
    const resp = await fetch(uri);
    const svgData = await resp.text();

    /*
    const container = document.getElementById('container');
    const h = container.clientHeight;
    const w = container.clientWidth;
    */

    canvas.svg(svgData);
    canvas.select('rect').click(onClick);
};
loadSVG();