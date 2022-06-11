console.log("Video Player");

const video = document.getElementById("video");
const playBtn = document.getElementById("playBtn");
const playBtnIcon = playBtn.querySelector("i");
const muteBtn = document.getElementById("muteBtn");
const muteBtnIcon = muteBtn.querySelector("i");
const totalTime = document.getElementById("totalTime");
const timeLine = document.getElementById("timeLine");
const currentTime = document.getElementById("currentTime");
const volumeLine = document.getElementById("volumeLine");

let volumeValue = 0.5;

const handlePlayBtnClick = () => {
  if (video.paused) {
    video.play();
    playBtnIcon.classList = "fas fa-play";
  } else {
    video.pause();
    playBtnIcon.classList = "fas fa-pause";
  }
};

const handleMuteBtnClick = () => {
  if (video.muted) {
    video.muted = false;
    muteBtnIcon.classList = "fas fa-volume-up";
    console.log(video.muted);
  } else {
    video.muted = true;
    muteBtnIcon.classList = "fas fa-volume-mute";
    console.log(video.muted);
  }
};

const formatTime = (second) => {
  return new Date(second * 1000).toISOString().substr(14, 5);
};

const handleLoadedMetadata = () => {
  totalTime.innerText = formatTime(Math.floor(video.duration));
  timeLine.max = Math.floor(video.duration);
};

const handleTimeUpdate = (event) => {
  console.log(event.target.value);
  currentTime.innerText = formatTime(Math.floor(video.currentTime));
  timeLine.value = video.currentTime;
};

const handleTimeLineInput = (event) => {
  video.currentTime = event.target.value;
};

const handleVolumeLineInput = (event) => {
  video.volume = event.target.value;
  if (video.volume === 0) {
    muteBtnIcon.classList = "fas fa-volume-mute";
  } else {
    muteBtnIcon.classList = "fas fa-volume-up";
  }
};

playBtn.addEventListener("click", handlePlayBtnClick);
muteBtn.addEventListener("click", handleMuteBtnClick);
video.addEventListener("loadeddata", handleLoadedMetadata);
video.addEventListener("timeupdate", handleTimeUpdate);
timeLine.addEventListener("input", handleTimeLineInput);
volumeLine.addEventListener("input", handleVolumeLineInput);
