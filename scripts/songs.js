let songs = [
  {
    name: "Quran",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
    artist: "Hakim Omari",
    audio: null,
    id: 0,
  },
  {
    name: "Quran1",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
    artist: "Hakim Omari1",
    audio: null,
    id: 1,
  },
  {
    name: "Quran2",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
    artist: "Hakim Omari2",
    audio: null,
    id: 2,
  },
  {
    name: "Quran3",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
    artist: "Hakim Omari3",
    audio: null,
    id: 3,
  },
  {
    name: "Quran4",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
    artist: "Hakim Omari4",
    audio: null,
    id: 4,
  },
  {
    name: "Quran5",
    cover:
      "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
    artist: "Hakim Omari5",
    audio: null,
    id: 5,
  },
];
storageRef
  .child("default")
  .child("quran.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[0].audio = url;
  });

storageRef
  .child("default")
  .child("quran1.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[1].audio = url;
  });
storageRef
  .child("default")
  .child("quran2.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[2].audio = url;
  });
storageRef
  .child("default")
  .child("quran3.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[3].audio = url;
  });
storageRef
  .child("default")
  .child("quran4.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[4].audio = url;
  });
storageRef
  .child("default")
  .child("quran5.mp3")
  .getDownloadURL()
  .then((url) => {
    songs[5].audio = url;
  });
