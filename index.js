var w;
function startWorker () {
    if(window.Worker) {
        w = new Worker("worker.js");
        w.onmessage = (event) => {
            console.log(event.data);
        };
    } else {
        alert('No workers')
    }
}
function workerEnd () {
    w.terminate();
    w = undefined;
}

var startBtn = document.querySelector('#start');
var stopBtn = document.querySelector('#stop');

startBtn.addEventListener('click', startWorker);
stopBtn.addEventListener('click', workerEnd);