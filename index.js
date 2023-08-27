
function openCam() {
    let cameraFeed = document.querySelector('#videoCam');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            cameraFeed.srcObject = stream;
        })
        .catch(error => {
            console.error('error accessing camera', error);
        })
}

function closeCam() {
    let cameraFeed = document.querySelector('#videoCam');
    let stream = cameraFeed.srcObject;
    if (stream) {
        let tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
        cameraFeed.srcObject = null;
    }
}