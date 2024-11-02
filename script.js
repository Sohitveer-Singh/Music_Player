const songList = {
  ck: "songs/CK.mp3",
  tnf: "songs/295.mp3",
  levels: "songs/levels.mp3",
  samebeef: "songs/SB.mp3",
  twb: "songs/12_Bande.mp3",
  thaa: "songs/thaa.mp3",
  kaafla: "songs/kaafla.mp3",
  ej: "songs/El_Jatt.mp3",
  tf: "songs/25-25.mp3",
  hs: "songs/HS.mp3",
  jawani: "songs/jw.mp3",
  jjvg: "songs/JJVG.mp3",
  cma: "songs/LCMAG.mp3",
  gnk: "songs/GNK.mp3",
  ajm: "songs/AJM.mp3",
  rd: "songs/RD.mp3",
};
var currentAudio = null;
let masterPlay = document.getElementById("play");
let masterbackw = document.getElementById("backward");
let masterforw = document.getElementById("forward");
let timer = document.getElementById("time");
let myprogressBar = document.getElementById("bar1");

function playsong(songName) {
  const songPLayer = new Audio(songList[songName]);
  if (currentAudio) {
    currentAudio.pause();
  }
  songPLayer.play();
  currentAudio = songPLayer;

  songPLayer.addEventListener("timeupdate", () => {
    let progress = parseInt(
      (currentAudio.currentTime / currentAudio.duration) * 100
    );
    myprogressBar.value = progress;
  });

  myprogressBar.addEventListener("change", () => {
    currentAudio.currentTime =
      (myprogressBar.value * currentAudio.duration) / 100;
  });
}

masterPlay.addEventListener("click", () => {
  if (currentAudio.paused) {
    currentAudio.play();
  } else if (currentAudio) {
    currentAudio.pause();
  }
});

var volumeSlider = document.getElementById("volumeSlider");
volumeSlider.addEventListener("input", function () {
  var volumeValue = volumeSlider.value / 100;
  currentAudio.volume = volumeValue;
});

setInterval(function () {
  timer.innerHTML = `0${Math.floor(
    currentAudio.currentTime / 60
  )}: ${Math.floor(currentAudio.currentTime % 60)} / 0${Math.floor(
    currentAudio.duration / 60
  )}:${Math.floor(currentAudio.duration % 60)}`;
});
