// Initialize the variables
let songIndex = 0;
let audioElement = new Audio("./assets/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let masterSongName = document.getElementById("masterSongName");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItem"));

let songs = [
  {
    songName: "Adharam Madhuram",
    filePath: "./assets/1.mp3",
    coverPath: "./assets/am.jpg",
  },
  {
    songName: "Maan Meri Jaan",
    filePath: "./assets/2.mp3",
    coverPath: "./assets/mmj.jpg",
  },
  {
    songName: "Moon Rise",
    filePath: "./assets/3.mp3",
    coverPath: "./assets/MR.jpg",
  },
  {
    songName: "O Bedardiyaa",
    filePath: "./assets/4.mp3",
    coverPath: "./assets/ob.jpg",
  },
  {
    songName: "Pyaar Hota Kayi Baar Hai",
    filePath: "./assets/5.mp3",
    coverPath: "./assets/phkb.jpg",
  },
  {
    songName: "Kesariya",
    filePath: "./assets/6.mp3",
    coverPath: "./assets/K.jpg",
  },
  {
    songName: "Tere Hawaale",
    filePath: "./assets/7.mp3",
    coverPath: "./assets/tw.jpg",
  },
  {
    songName: "Raatan Lambiyaan",
    filePath: "./assets/8.mp3",
    coverPath: "./assets/RL.jpg",
  },
];

songItems.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// handle play/pause click
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-circle-pause");
    masterPlay.classList.add("fa-circle-play");
    gif.style.opacity = 0;
  }
});

// listen to events
audioElement.addEventListener("timeupdate", () => {
  console.log("timeupdate");
  // Update Seekbar
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  console.log(progress);
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-circle-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();

      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-circle-play");
      e.target.classList.add("fa-circle-pause");
      audioElement.src = `./assets/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      masterSongName.style.color = "rgb(221, 77, 249)";
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 6) {
    songIndex = 0;
  } else {
    songIndex += 1;
  }
  audioElement.src = `./assets/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  masterSongName.style.color = "rgb(221, 77, 249)";
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 0;
  } else {
    songIndex -= 1;
  }
  audioElement.src = `./assets/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  masterSongName.style.color = "rgb(221, 77, 249)";
  audioElement.currentTime = 0;
  audioElement.play();
  gif.style.opacity = 1;
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-circle-pause");
});
