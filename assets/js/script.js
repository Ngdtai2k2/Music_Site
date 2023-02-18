 // Define your playlist as an array of objects
 const playlist = [
    {
      title: "Playlist",
      artist: "Studio Ghibli",
      url: "assets/songs/STUDIOGHIBLI.mp3"
    },
    {
      title: "Lofi chill 30 minutes",
      artist: "Various Artists",
      url: "assets/songs/chill2.mp3"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      url: ""
    }
  ];

  // Display the playlist in the HTML
  const songList = document.getElementById("songs");
  playlist.forEach((song, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${index+1}. ${song.title} - ${song.artist}`;
    li.addEventListener("click", () => {
      audio.src = song.url;
      playPauseButton.innerHTML = "Pause";
      audio.play();
    });
    songList.appendChild(li);
  });

  // Define the audio player and initialize it with the first song
  const audio = new Audio();
  audio.src = playlist[0].url;


  // Define the play and pause buttons and add event listeners
  // Define the play/pause button and add event listener
  const playPauseButton = document.getElementById("playpause");
  playPauseButton.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playPauseButton.innerHTML = "Pause";
    } else {
      audio.pause();
      playPauseButton.innerHTML = "Play";
    }
  });

