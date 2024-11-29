console.log('blue.js')

const worker = new SharedWorker('shared-worker.js')

worker.port.start()

worker.port.onmessage = (event) => {
    console.log('EVENT', event.data)
}