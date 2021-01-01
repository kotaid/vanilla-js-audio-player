const audio = document.querySelector("audio");
const cover = document.querySelector(".song-info img");
const library = document.querySelector(".library");

const libraryLink = document.getElementById("library-link");
let librarySongs = Array.from(document.querySelectorAll(".library-song"));
let playStatus = false;

libraryLink.addEventListener("click", openLibrary);

function openLibrary() {
  if (library.classList.contains("library-opened")) {
    library.classList.remove("library-opened");
    libraryLink.classList.remove("library-opened-link");
  } else {
    library.classList.add("library-opened");
    libraryLink.classList.add("library-opened-link");
  }
}
librarySongs.forEach((song) => {
  song.addEventListener("click", (e) => {
    librarySongs.forEach((otherSong) => {
      otherSong.classList.remove("selected");
    });
    e.target.classList.add("selected");
    songId = song.id;
    songs.filter((selectedSong) => {
      if (selectedSong.id == song.id) {
        playSong(selectedSong);
      }
    });
  });
});

const name = document.querySelector(".song-info h2");
const artist = document.querySelector(".song-info h3");

function playSong(song) {
  cover.setAttribute("src", song.cover);
  name.innerText = song.name;
  artist.innerText = song.artist;
  audio.setAttribute("src", song.audio);
  playStatus = false;
  playPause();
}

//*player control actions
//play||pause action
const playPauseIcon = document.getElementById("play-pause");

playPauseIcon.addEventListener("click", () => {
  playPause();
});

function playPause() {
  if (playStatus === false) {
    playPauseIcon.className = "fas fa-pause";
    audio.play();
    cover.classList.add("playing");
    playStatus = true;
  } else {
    playPauseIcon.className = "fas fa-play";
    audio.pause();
    cover.classList.remove("playing");
    playStatus = false;
  }
}
//* sound volume control
const volume = document.querySelector(".sound-control input");
volume.addEventListener("change", () => {
  audio.volume = volume.value / 100;
});

//*defining audio and song info
//format current/duration time
function timeFormat(time) {
  return Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2);
}

const durationInput = document.querySelector(".player input");
const currentTime = document.querySelector(".player span");

audio.addEventListener("loadedmetadata", () => {
  const endTime = document.querySelector(".player span:last-child");
  durationInput.value = audio.currentTime;
  durationInput.setAttribute("max", audio.duration);
  currentTime.innerText = `${timeFormat(audio.currentTime)}`;
  endTime.innerText = `${timeFormat(audio.duration)}`;
});
audio.addEventListener("timeupdate", () => {
  durationInput.value = audio.currentTime;
  currentTime.innerText = `${timeFormat(audio.currentTime)}`;
  document.querySelector(".player div div").style.left = `${
    (audio.currentTime / audio.duration) * 100
  }%
`;
});

durationInput.addEventListener("change", () => {
  audio.currentTime = durationInput.value;
});

//*skipping back/forward
const back = document.getElementById("backward");
const forward = document.getElementById("forward");
back.addEventListener("click", () => skipSong("backward"));
forward.addEventListener("click", () => skipSong("forward"));

audio.addEventListener("ended", () => skipSong("forward"));
function skipSong(direction) {
  const selectedSong = document.querySelector(".selected");
  selectedSongIndex = librarySongs.indexOf(selectedSong);

  selectedSong.classList.remove("selected");
  if (direction === "backward") {
    previousSong = librarySongs[selectedSongIndex - 1];
    if (librarySongs.indexOf(previousSong) === -1) {
      previousSong = librarySongs[librarySongs.length - 1];
    }
    previousSong.classList.add("selected");
    songs.filter((song) => {
      if (song.id == previousSong.id) {
        playSong(song);
      }
    });
  } else if (direction === "forward") {
    nextSong = librarySongs[selectedSongIndex + 1];

    if (librarySongs.indexOf(nextSong) === -1) {
      nextSong = librarySongs[0];
    }
    nextSong.classList.add("selected");
    songs.filter((song) => {
      if (song.id == nextSong.id) {
        playSong(song);
      }
    });
  }
}
