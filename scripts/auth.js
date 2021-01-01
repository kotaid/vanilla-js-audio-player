const connectLink = document.getElementById("connect-link"),
  logInLink = document.getElementById("login-link"),
  signUpLink = document.getElementById("signup-link"),
  signupForm = document.querySelector(".signup-form"),
  loginForm = document.querySelector(".login-form"),
  logoutForm = document.querySelector(".logout-form"),
  connectPopup = document.querySelector(".connect-popup"),
  crosses = document.querySelectorAll(".connect-popup i"),
  alertMessage = document.querySelector(".alert-message"),
  addSongLink = document.querySelector(".add-song"),
  addSongForm = document.querySelector(".add-song-form");

crosses.forEach((cross) => {
  cross.addEventListener("click", (e) => {
    connectPopup.style.transform = "translate(-50%, -50%) scale(0)";
  });
});
signUpLink.addEventListener("click", (e) => {
  openForm(signupForm);
});
logInLink.addEventListener("click", (e) => {
  openForm(loginForm);
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  email = document.getElementById("signup-email").value;
  password = document.getElementById("signup-password").value;
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((cred) => {
      connectPopup.style.transform = "translate(-50%, -50%) scale(0)";
      db.collection("usersSongs").doc(`${cred.user.uid}`).set({
        songs: [],
        songIdCounter: 6,
      });
      //signupForm.childNodes[2].reset();
    })
    .then(() => {
      alertMessage.lastElementChild.innerText = "You signed up!";
      openForm(alertMessage);
      connectPopup.style.transform = "translate(-50%, -50%) scale(1)";
    });
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  email = document.getElementById("login-email").value;
  password = document.getElementById("login-password").value;
  auth
    .signInWithEmailAndPassword(email, password)
    .then((cred) => {
      connectPopup.style.transform = "translate(-50%, -50%) scale(0)";
      console.log(loginForm.childNodes[2]);
    })
    .then(() => {
      alertMessage.lastElementChild.innerText = "You're Logged In!";
      openForm(alertMessage);
      connectPopup.style.transform = "translate(-50%, -50%) scale(1)";
    });
});

addSongLink.addEventListener("click", () => {
  openForm(addSongForm);
  connectPopup.style.transform = "translate(-50%, -50%)";
});

auth.onAuthStateChanged((user) => {
  if (user) {
    connectLink.innerText = `Log Out`;
    logoutForm.addEventListener("submit", (e) => {
      e.preventDefault();
      auth.signOut();
      connectPopup.style.transform = "translate(-50%, -50%) scale(0)";
      location.reload();
    });
    connectLink.addEventListener("click", (e) => {
      openForm(logoutForm);
      connectPopup.style.transform = "translate(-50%, -50%) scale(1)";
    });
    addSongLink.addEventListener("click", (e) => {
      openForm(addSongForm);
      connectPopup.style.transform = "translate(-50%, -50%) scale(1)";
    });
    addSongForm.addEventListener("submit", (e) => {
      e.preventDefault();
      uploadSongToStorage(user);
    });

    //* Databse Watching
    db.collection("usersSongs")
      .doc(`${user.uid}`)
      .onSnapshot((snapshot) => {
        loadSongsToApp(user);
      });
  } else {
    connectLink.innerText = `Connect`;
    connectLink.addEventListener("click", (e) => {
      openForm(signupForm);
      connectPopup.style.transform = "translate(-50%, -50%) scale(1)";
    });
    addSongLink.addEventListener("click", (e) => {
      alertMessage.lastElementChild.innerText =
        "You Must Be Logged In To Add Song!!";
      openForm(alertMessage);
      connectPopup.style.transform = "translate(-50%, -50%) scale(1)";
    });
  }
});

function openForm(section) {
  document.querySelectorAll(".connect-popup .popup-section").forEach((form) => {
    form.style.display = "none";
    form.style.ponterEvents = "none";
  });
  section.style.display = "flex";
  section.style.pointerEvents = "auto";
}

function loadSongsToApp(user) {
  db.collection("usersSongs")
    .doc(`${user.uid}`)
    .get()
    .then((doc) => {
      usersSongs = doc.data().songs;
      usersSongs.forEach((song) => {
        songs.push(song);
      });
    })
    .then(() => {
      createLibrarySong(songs);
    });
}
function createLibrarySong(songs) {
  songs.forEach((song) => {
    librarySong = document.createElement("div");
    librarySong.className = "library-song";
    librarySong.id = `${song.id}`;
    librarySong.innerHTML = `<img
          src="${song.cover}"
          alt=""
        />
        <div class="library-song-info">
          <h3>${song.name}</h3>
          <h4>${song.artist}</h4>
        </div>`;
    if (!document.getElementById(`${song.id}`)) {
      library.insertBefore(librarySong, library.lastElementChild);
      librarySongs.push(librarySong);
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
    }
  });
}
