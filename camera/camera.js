const video = document.getElementById("camera");
const captureButton = document.getElementById("take-picture");

const imageTag = document.getElementById("image");

captureButton.addEventListener("click", () => {
  console.log("take photo clicked");
  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  //canvas image data to url
  const dataURL = canvas.toDataURL();
  //send to main process
  window.electronAPI.sendImageToMain(dataURL);


});
//stream video to the video tag
navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
  video.srcObject = stream;
});

