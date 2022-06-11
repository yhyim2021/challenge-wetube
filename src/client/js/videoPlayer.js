console.log("Video Player");

const video = document.getElementById("video");
const playBtn = document.getElementById("playBtn");
const playBtnIcon = playBtn.querySelector("i");

const handlePlayBtnClick = () => {
  if (video.paused) {
    video.play();
    playBtnIcon.classList = "fas fa-play";
  } else {
    video.pause();
    playBtnIcon.classList = "fas fa-pause";
  }
};
playBtn.addEventListener("click", handlePlayBtnClick);
