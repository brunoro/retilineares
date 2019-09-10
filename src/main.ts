//@ts-ignore
// import { Scale, Note } from 'tonal'
//@ts-ignore
import Oscillators from 'web-audio-oscillators'

type Pixel = [number, number, number]
const rgb2hsl = ([r, g, b]: Pixel): Pixel => {
    // Make r, g, and b fractions of 1
    r /= 255;
    g /= 255;
    b /= 255;
  
    // Find greatest and smallest channel values
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    // Calculate hue
    // No difference
    if (delta == 0)
    h = 0;
    // Red is max
    else if (cmax == r)
    h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g)
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
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    
    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return [h, s, l]
}

// canvas
let img = (document.getElementById('img') as HTMLImageElement);
let canvas = (document.getElementById('canvas') as HTMLCanvasElement);
canvas.width = img.width;
canvas.height = img.height;

const ctx = canvas.getContext('2d')
ctx.drawImage(img, 0, 0, img.width, img.height);

const getPixel = (x: number, y: number): Pixel => {
    const pix = ctx.getImageData(x, y, 1, 1).data
    const r = pix[0]
    const g = pix[1]
    const b = pix[2]
    return [r, g, b]
}

type Point = [number, number]
let points: Array<Point> = []
let cursor: Point = [0, 0]
let step = 1

const redraw = () => {
    ctx.drawImage(img, 0, 0, img.width, img.height);
    points.forEach(([x, y]: Point, i: number) => {
        ctx.strokeStyle = 'black'
        ctx.strokeRect(x, y, 10, 10);
    })
    ctx.strokeStyle = 'purple'
    ctx.strokeRect(cursor[0], cursor[1], 10, 10);
}

const updateCursor = () => {
    const [x, y] = cursor
    const [nx, ny]= points[step % points.length]

    const dx = nx - x
    const dy = ny - y

    const d = Math.sqrt(Math.pow(dy, 2) + Math.pow(dy, 2))
    const l = 5

    cursor = [x + l*dx/d, y + l*dy/d]

    const [cx, cy] = cursor
    if (Math.sqrt(Math.pow(nx - cx, 2) + Math.pow(ny - cy,2)) <= l) {
        step++
    }
}

canvas.onclick = (e: MouseEvent) => {
    let x = 0;
    let y = 0;
    if (e.pageX || e.pageY) { 
        x = e.pageX;
        y = e.pageY;
    }
    else { 
        x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft; 
        y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
    } 
    x -= canvas.offsetLeft;
    y -= canvas.offsetTop;

    points.push([x, y])
    redraw()
}

// osc
const audioContext = new AudioContext()
let osc = Oscillators.sine(audioContext)
let gain = audioContext.createGain()
let filter = audioContext.createBiquadFilter();
osc.connect(gain)
gain.connect(filter)
filter.connect(audioContext.destination)

// BPM
let bpm = 120
const bpmSpan = document.getElementById("bpm-span")
const bpmSlider = document.getElementById("bpm-slider")
const updateBPM = () => {
    bpm = parseInt((bpmSlider as HTMLInputElement).value)
    bpmSpan.innerText = bpm.toString()
}
bpmSlider.oninput = updateBPM
updateBPM()

// freq
const updateFreq = () => {
    if (points.length > 0) {
        let [x, y] = cursor
        console.log("p", x, y)
        const c = getPixel(x, y)
        console.log("c", c)
        const [h, s, l] = rgb2hsl(c)
        console.log("h", h)

        const base = 60
        const mult = Math.ceil(h / 32.0) * 5/4 + 1
        const freq = base * mult
        console.log("freq", freq)

        osc.frequency.value = freq
        filter.frequency.value = freq*2
    }
}

// start
let isPlaying = false;
const startBtn = document.getElementById("start-btn")
const oscStart = () => { 
    if (points.length > 0) {
        isPlaying = true
        cursor = points[0]
        step = 1
        tick()
        osc.start(audioContext.currentTime)
    }
}
startBtn.onclick = oscStart

// stop
const stopBtn = document.getElementById("stop-btn")
const oscStop = () => {
    osc.stop(audioContext.currentTime)
    osc = Oscillators.sine(audioContext)
    gain = audioContext.createGain()
    filter = audioContext.createBiquadFilter();
    osc.connect(gain)
    gain.connect(filter)
    filter.connect(audioContext.destination)

    isPlaying = false
}
stopBtn.onclick = oscStop

// clear
const clearBtn = document.getElementById("clear-btn")
clearBtn.onclick = () => {
    points = []
    redraw()
}

const tick = () => {
    updateCursor()
    updateFreq()

    if (isPlaying) {
        setTimeout(tick, 100 * 60.0 / bpm)
    }
    redraw()
}