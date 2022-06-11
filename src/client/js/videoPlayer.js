console.log("Video Player");

const video = document.getElementById("video");
const playBtn = document.getElementById("playBtn");
const playBtnIcon = playBtn.querySelector("i");
const muteBtn = document.getElementById("muteBtn");
const muteBtnIcon = muteBtn.querySelector("i");
const totalTime = document.getElementById("totalTime");
const timeLine = document.getElementById("timeLine");

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

playBtn.addEventListener("click", handlePlayBtnClick);
muteBtn.addEventListener("click", handleMuteBtnClick);
video.addEventListener("loadeddata", handleLoadedMetadata);
