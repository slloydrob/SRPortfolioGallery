let inputBuffer = {};
let canvas = null;
let context = null;
let lastTimeStamp = performance.now();

const COORD_SIZE = 500;

function timeLoop(currentTime) {
    let elapsedTime = currentTime - lastTimeStamp;
    lastTimeStamp = currentTime;
    requestAnimationFrame(timeLoop);
}

function initialize() {
    canvas = document.getElementById('canvas-main');
    context = canvas.getContext('2d');
    lastTimeStamp = performance.now();
    requestAnimationFrame(timeLoop);
}
