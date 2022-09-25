//renderer one script
const imageTag = document.getElementById("imageTag");

//callback when image received
window.electronAPI.getImageFromMain((event, data) => {
  imageTag.src = data;
  window.electronAPI.closeRend2();
});
