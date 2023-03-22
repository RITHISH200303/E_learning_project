let progress = document.querySelector("#progress");
let song = document.querySelector("#song");
let audCtrlIcon = document.querySelector("#audCtrlIcon");
let audioContainor = document.querySelector(".aud-container");
let closeAudio = document.querySelector("#backBtn");
song.onloadedmetadata = function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
  song.pause();
};

function playPause() {
  if (audCtrlIcon.classList.contains("fa-pause")) {
    song.pause();
    audCtrlIcon.classList.remove("fa-pause");
    audCtrlIcon.classList.add("fa-play");
  } else {
    song.play();
    audCtrlIcon.classList.add("fa-pause");
    audCtrlIcon.classList.remove("fa-play");
  }
}
if (song.play()) {
  setInterval(() => {
    progress.value = song.currentTime;
  }, 1500);
}

progress.onchange = function () {
  song.play();
  song.currentTime = progress.value;
  progress.max = song.duration;
  audCtrlIcon.classList.add("fa-pause");
  audCtrlIcon.classList.remove("fa-play");
};

function closeAudioPlayer() {
  audioContainor.style.display = "none";
}

closeAudio.addEventListener("click", closeAudioPlayer);
