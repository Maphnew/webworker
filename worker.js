const timedCount = () => {
    postMessage(new Date().toLocaleString()); // string, integer, boolean, null, undefined, Object, Array
    setTimeout('timedCount()', 1000);
}

timedCount();