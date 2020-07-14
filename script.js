const activateWebcam = document.getElementById('activate-webcam');
const deActivateWebcam = document.getElementById('de-activate-webcam');
const takePicture = document.getElementById('take-picture');
const webcamElement = document.getElementById('webcam');
const canvasElement = document.getElementById('canvas');
// const snapSoundElement = document.getElementById('snapSound');
const webcam = new Webcam(
  webcamElement,
  'user',
  canvasElement
  // snapSoundElement
);

const start = () => {
  webcam
    .start()
    .then((result) => {
      console.log('webcam started');
    })
    .catch((err) => {
      console.log(err);
    });
};

const stopCamera = () => {
  webcam.stop();
};

const takePictureCamera = () => {
  let picture = webcam.snap();
  const imageElement = document.createElement('img');
  imageElement.src = picture;
};

activateWebcam.addEventListener('click', () => start());
deActivateWebcam.addEventListener('click', () => stopCamera());
takePicture.addEventListener('click', () => takePictureCamera());
