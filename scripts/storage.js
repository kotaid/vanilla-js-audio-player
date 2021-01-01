const audioInput = document.getElementById("add-song-input");

function uploadSongToStorage(user) {
  const audioFile = audioInput.files[0],
    audioName = document.getElementById("add-song-name").value,
    audioArtist = document.getElementById("add-song-artist").value,
    audioType = audioFile.type.slice(6),
    userAudioFilesRef = storageRef.child(`${user.uid}`).child(`${audioName}`);
  userAudioFilesRef.put(audioFile).then(() => {
    userAudioFilesRef
      .getDownloadURL()

      .then((url) => {
        db.collection("usersSongs")
          .doc(`${user.uid}`)
          .get()
          .then((doc) => {
            songIdCounter = doc.data().songIdCounter + 1;
          })
          .then(() => {
            song = {
              name: audioName,
              artist: audioArtist,
              audio: url,
              id: songIdCounter,
              cover:
                "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
            };
            db.collection("usersSongs")
              .doc(`${user.uid}`)
              .update({
                songs: firebase.firestore.FieldValue.arrayUnion(song),
                songIdCounter: songIdCounter,
              });
            connectPopup.style.transform = "translate(-50%, -50%) scale(0)";
          });
        loginForm.childNodes[2].reset();
      })
      .then(() => {
        alertMessage.lastElementChild.innerText = "Song Aded To Library!!";
        openForm(alertMessage);
        connectPopup.style.transform = "translate(-50%, -50%) scale(1)";
      });
  });
}
