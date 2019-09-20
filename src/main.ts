// @ts-ignore
import * as SVG from 'svg.js';
import Slice from './slice';

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

// stop
const stopBtn = document.getElementById('stop-btn');
const oscStop = () => {
    slices.forEach((slice) => slice.stop());
};
stopBtn.onclick = oscStop;

// click handler
const onClick = function() {
    console.log(this);
    const rect: SVG.Rect = this;
    const id = this.id();
    const slice = slices.has(id) ? slices.get(id) : new Slice(rect, audioContext);
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

    const draw = SVG('container').svg(svgData);
    draw.select('rect').click(onClick);
};
loadSVG();