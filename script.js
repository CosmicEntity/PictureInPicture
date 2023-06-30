const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// Select Media Stream -> Pass to video element -> Play
async function selectMediaStream(){
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = ()=>{
            videoElement.play();
        }
    } catch (error) {
        // Catch Errors Here
    }
}

button.addEventListener("click", async () => {
    
    if(videoElement.srcObject === null || !videoElement.srcObject.active)
    selectMediaStream();
    else{
    // Disable button
    button.disabled = true;
    // Start Picture-in-Picture
    await videoElement.requestPictureInPicture();
    // Reset Button
    button.disabled = false;
    }
})

videoElement.addEventListener('leavepictureinpicture',selectMediaStream);

// On Load
selectMediaStream();