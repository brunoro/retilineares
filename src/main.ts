//@ts-ignore
// import { Scale, Note } from 'tonal'
//@ts-ignore
import Oscillators from 'web-audio-oscillators'

// osc
const audioContext = new AudioContext()
let osc = Oscillators.sine(audioContext)
let gain = audioContext.createGain()
let filter = audioContext.createBiquadFilter();
osc.connect(gain)
gain.connect(filter)
filter.connect(audioContext.destination)

// BPM
const bpmSpan = document.getElementById("bpm-span")
const bpmSlider = document.getElementById("bpm-slider")
const updateBPM = () => {
    const bpm = parseInt((bpmSlider as HTMLInputElement).value)
    bpmSpan.innerText = bpm.toString()
}
bpmSlider.oninput = updateBPM

// freq
const freqSpan = document.getElementById("freq-span")
const freqSlider = document.getElementById("freq-slider")
const updateFreq = () => {
    const freq = parseInt((freqSlider as HTMLInputElement).value)
    freqSpan.innerText = freq.toString()

    osc.frequency.value = freq
    filter.frequency.value = freq*2
}
freqSlider.oninput = updateFreq
updateFreq()

const startBtn = document.getElementById("start-btn")
const oscStart = () => osc.start(audioContext.currentTime)
startBtn.onclick = oscStart

const stopBtn = document.getElementById("stop-btn")
const oscStop = () => {
    osc.stop(audioContext.currentTime)
    osc = Oscillators.sine(audioContext)
    gain = audioContext.createGain()
    filter = audioContext.createBiquadFilter();
    osc.connect(gain)
    gain.connect(filter)
    filter.connect(audioContext.destination)
    updateFreq()
}
stopBtn.onclick = oscStop
