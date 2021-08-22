window.addEventListener("load", event => {
   ////////////////
   // Variables
   ////////////////

   const iconTopExpand = document.querySelector(".icon.topExpand"),
         iconBottomExpand = document.querySelector(".icon.bottomExpand"),
         topContent = document.querySelector(".topContent"),
         bottomContent = document.querySelector(".bottomContent"),
         playBtn = document.querySelector(".btnPlay"),
         musicGroups = document.querySelector(".swiper-wrapper.slider-two"),
         swipperWrapper = document.querySelector(".swiper-wrapper.slider-one"),
         imageBg = document.querySelector(".imageBg"),
         albumBg = document.querySelector(".albumBg"),
         wrapper = document.querySelector(".wrapper"),
         bodyBg = document.querySelector(".bodyBg"),
         next = document.querySelector(".swiper-button-next"),
         prev = document.querySelector(".swiper-button-prev");

   // Songs
   const songs = [
      {
         img: "https://cdn.shopify.com/s/files/1/0090/0887/3587/files/5.png",
         artistName: "Volume One",
         songName: "The Silver Lining",
         song: "https://cdn.shopify.com/s/files/1/0090/0887/3587/files/VOLUME-1-PART-1.MP3",
         color: "#b1751e"
      },
      {
         img: "https://cdn.shopify.com/s/files/1/0090/0887/3587/files/3.png",
         artistName: "Volume Two",
         songName: "Air Born",
         song: "https://cdn.shopify.com/s/files/1/0090/0887/3587/files/VOLUME-1-PART-2.MP3",
         color: "#067885"
      },
      {
         img: "https://cdn.shopify.com/s/files/1/0090/0887/3587/files/1.png",
         artistName: "Volume Three",
         songName: "Cloud Ten",
         song: "https://cdn.shopify.com/s/files/1/0090/0887/3587/files/VOLUME-1-PART-3.MP3",
         color: "#c3538a"
      },
      {
         img: "https://www.rafaelalucas.com/dailyui/9/covers/broods.jpg",
         artistName: "Broods",
         songName: "Bridges",
         song: "https://www.rafaelalucas.com/dailyui/9/songs/song1.mp3",
         color: "#a3b8b0"
      },
      {
         img: "https://www.rafaelalucas.com/dailyui/9/covers/alice.jpg",
         artistName: "Alice Phoebe Lou",
         songName: "Orbit",
         song: "https://www.rafaelalucas.com/dailyui/9/songs/song2.mp3",
         color: "#38736d"
      },
      {
         img: "https://www.rafaelalucas.com/dailyui/9/covers/feist.jpg",
         artistName: "Feist",
         songName: "The Bad in Each Other",
         song: "https://www.rafaelalucas.com/dailyui/9/songs/song3.mp3",
         color: "#a4b1b2"
      },

      {
         img: "https://www.rafaelalucas.com/dailyui/9/covers/dagny.jpg",
         artistName: "Dagny",
         songName: "Ultraviolet",
         song: "https://www.rafaelalucas.com/dailyui/9/songs/song1.mp3",
         color: "#8098ce"
      },
      {
         img: "https://www.rafaelalucas.com/dailyui/9/covers/sigrid.jpg",
         artistName: "Sigrid",
         songName: "Dynamite",
         song: "https://www.rafaelalucas.com/dailyui/9/songs/song2.mp3",
         color: "#1a91bd"
      }
   ];

   // Music Groups
   const groups = [
      {
         title: "Volume One",
         img: "https://www.rafaelalucas.com/dailyui/9/covers/img06.jpg"
      },
      {
         title: "Volume Two",
         img: "https://www.rafaelalucas.com/dailyui/9/covers/img07.jpg"
      },
      {
         title: "Volume Three",
         img:
         "https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
      },
      {
         title: "Volume Four",
         img: "https://www.rafaelalucas.com/dailyui/9/covers/img10.jpg"
      }
   ];

   // Playlists
   const playlists = [
      {
         title: "The Silver Lining",
         img:
         "https://images.pexels.com/photos/761963/pexels-photo-761963.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
      },
      {
         title: "Cloud Ten",
         img:
         "https://images.pexels.com/photos/3049327/pexels-photo-3049327.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
      },
      {
         title: "Air Born",
         img:
         "https://images.pexels.com/photos/1661905/pexels-photo-1661905.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
      },
      {
         title: "When The Sun Goes Down",
         img:
         "https://images.pexels.com/photos/216657/pexels-photo-216657.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=400"
      }
   ];

   ////////////////
   // Events
   ////////////////

   iconTopExpand.addEventListener("click", expandTop);
   iconBottomExpand.addEventListener("click", expandBottom);
   playBtn.addEventListener("click", playSong);

   ////////////////
   // Functions
   ////////////////

   function playSong() {
      if (playBtn.classList.contains("pause")) {
         playBtn.classList.remove("pause");
         document.querySelector(".swiper-slide-active audio").pause();
      } else {
         playBtn.classList.add("pause");
         document.querySelector(".swiper-slide-active audio").play();
      }
      progressBar();
   }

   function expandTop() {
      if (topContent.classList.contains("expand")) {
         topContent.classList.remove("expand");
      } else {
         topContent.classList.add("expand");

         //Swiper Music Goups
         var mySwiper2 = new Swiper(".swiper-container.slider-two", {
            // Optional parameters
            direction: "horizontal",
            slidesPerView: "auto",
            draggable: true
         });
      }
      albumSize();
   }

   function expandBottom() {
      if (bottomContent.classList.contains("expand")) {
         bottomContent.classList.remove("expand");
      } else {
         bottomContent.classList.add("expand");
      }
      albumSize();
      progressBar();
   }

   // change Album size

   function albumSize() {
      const albumContent = document.querySelectorAll(".albumContent");

      if (
         topContent.classList.contains("expand") &&
         bottomContent.classList.contains("expand")
      ) {
         albumContent.forEach(function(el) {
            el.classList.add("small");
         });
      } else {
         albumContent.forEach(function(el) {
            el.classList.remove("small");
         });
      }
   }

   //Swiper Albums

   songs.forEach(function(el) {
      let template = `
<div class="swiper-slide">
<div class="settings">
<div class="icon heart"></div>
<div class="icon plus"></div>
</div>
<audio src="${el.song}"></audio>
<div class="albumContent">
<div class="albumCover" style="background-color:${
      el.color
      }"><img src="${el.img}"></div>
<p class="artistName">${el.artistName}</p>
<p class="songName">${el.songName}</p></div>
<div class="playlistsContent">
<div class="icon close"></div>
</div>
</div>`;

      swipperWrapper.insertAdjacentHTML("beforeend", template);
   });

   // To Create Playlists
   playlists.forEach(function(el) {
      let templatePlaylist = `
<div class="playlist">
<span class="checkbox"></span>
<figure class="playlistBg"><img src="${el.img}"></figure>
<figure class="playlistThumb"><img src="${el.img}"></figure>
<p class="playlistTitle">${el.title}</p></div>`;

      var playlistContent = document.querySelectorAll(".playlistsContent");

      playlistContent.forEach(function(el) {
         el.insertAdjacentHTML("beforeend", templatePlaylist);
      });
   });

   // Slider Songs (Middle)

   var mySwiper = new Swiper(".swiper-container.slider-one", {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 20,
      speed: 600,
      allowTouchMove: false,
      effect: "coverflow",

      coverflowEffect: {
         rotate: 40,
         slideShadows: false
      },

      // Navigation arrows
      navigation: {
         nextEl: ".swiper-button-next",
         prevEl: ".swiper-button-prev"
      }
   });

   // Change Song & Album BG
   next.addEventListener("click", changeSong);
   prev.addEventListener("click", changeSong);

   function changeSong() {
      if (playBtn.classList.contains("pause")) {
         document.querySelectorAll("audio").forEach(function(el) {
            el.pause();
         });
         document.querySelector(".swiper-slide-active audio").play();
      }
      changeBg();
      progressBar();
      closePlaylists();
      changeBgColor();
   }

   function changeBg() {
      albumBg.classList.add("animeBg");

      setTimeout(() => {
         imageBg.src = document.querySelector(
            ".slider-one .swiper-slide-active img"
         ).src;
      }, 300);

      setTimeout(() => {
         albumBg.classList.remove("animeBg");
      }, 700);
   }

   function changeBgColor() {
      var getColor = document.querySelector(
         ".slider-one .swiper-slide-active .albumCover"
      ),
          activeColor = getColor.style.backgroundColor;

      setTimeout(() => {
         bodyBg.style.backgroundColor = activeColor;
      }, 200);
   }

   // Music Groups

   for (let i = 0; i < groups.length; i++) {
      const { title, img } = groups[i];

      var template2 = `<div class="swiper-slide group">
<figure><img src="${img}"></figure>
<p class = "titleGroup">${title}</p>
</div>`;

      musicGroups.insertAdjacentHTML("beforeend", template2);
   }

   // Add favourites & Playlist

   const heart = document.querySelectorAll(".heart"),
         plus = document.querySelectorAll(".plus"),
         close = document.querySelectorAll(".close"),
         playlist = document.querySelectorAll(".playlist");

   heart.forEach(function(el) {
      el.addEventListener("click", addFave);
   });

   plus.forEach(function(el) {
      el.addEventListener("click", openPlaylists);
   });

   close.forEach(function(el) {
      el.addEventListener("click", openPlaylists);
   });

   playlist.forEach(function(el) {
      el.addEventListener("click", addPlaylist);
   });

   function addFave(e) {
      if (e.currentTarget.classList.contains("fave")) {
         e.currentTarget.classList.remove("fave");
      } else {
         e.currentTarget.classList.add("fave");
      }
   }

   function openPlaylists(e) {
      if (
         e.currentTarget
         .closest(".swiper-slide-active")
         .classList.contains("open")
      ) {
         e.currentTarget
            .closest(".swiper-slide-active")
            .classList.remove("open");
      } else {
         e.currentTarget.closest(".swiper-slide-active").classList.add("open");
      }
   }

   function closePlaylists() {
      document.querySelector(".swiper-slide-active").classList.remove("open");
   }

   function addPlaylist(e) {
      if (e.currentTarget.classList.contains("selected")) {
         e.currentTarget.classList.remove("selected");
      } else {
         e.currentTarget.classList.add("selected");
      }
   }

   // Song Progress Bar

   function formatTime(seconds) {
      minutes = Math.floor(seconds / 60);
      minutes = minutes >= 10 ? minutes : "0" + minutes;
      seconds = Math.floor(seconds % 60);
      seconds = seconds >= 10 ? seconds : "0" + seconds;
      return minutes + ":" + seconds;
   }

   function progressBar() {
      var songDuration = document.querySelector(".swiper-slide-active audio")
      .duration,
          endTime = document.querySelector(".endTime"),
          songAudio = document.querySelector(".swiper-slide-active audio"),
          currentTime = document.querySelector(".currentTime");

      endTime.innerHTML = formatTime(songDuration);

      songAudio.ontimeupdate = function() {
         var progress = document.querySelector(".progress");
         progress.style.width =
            songAudio.currentTime * 100 / songDuration + "%";
         currentTime.innerHTML = formatTime(songAudio.currentTime);
      };
   }

   ////////////////
   // Call Functions
   ////////////////

   changeBg();
   progressBar();
   changeBgColor();

   wrapper.style.height = window.innerHeight + "px";

   console.log(window.innerHeight);
});
