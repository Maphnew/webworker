navigator.serviceWorker.register('/sw.js', {
    scope: '/'
})

navigator.serviceWorker.oncontrollerchange = () => {
    console.log('controller change')
}

async function makeRequest() {
    const result = await fetch('/data.json')
    const payloads = await result.json()
    console.log(payloads)
}