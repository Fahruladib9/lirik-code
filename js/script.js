document.addEventListener("DOMContentLoaded", () => {
  const lyrics = [
    { time: 3000, text: "suki yo ima anata ni omoi nosete" },
    { time: 8000, text: "hora sunao ni naru no watashi" },
    { time: 13000, text: "kono saki motto soba ni ite mo ii ka na?" },
    { time: 18000, text: "koi to koi ga kasanatte" },
    { time: 22000, text: "suki yo" },
    { time: 23000, text: "😋" },
  ];

  const lyricsContainer = document.getElementById("lyrics");
  const audio = document.getElementById("audio");
  const playButton = document.getElementById("playButton");

  function displayLyrics() {
    const currentTime = audio.currentTime * 1000;
    console.log(`Current Time: ${currentTime}`);

    lyrics.forEach((line, index) => {
      const lineElement = document.getElementById(`line-${index}`);
      if (lineElement) {
        if (currentTime >= line.time) {
          lineElement.classList.add("active");
        } else {
          lineElement.classList.remove("active");
        }
      }
    });
  }

  function initializeLyrics() {
    lyrics.forEach((line, index) => {
      const span = document.createElement("div");
      span.id = `line-${index}`;
      span.classList.add("line");
      span.textContent = line.text;
      lyricsContainer.appendChild(span);
    });

    audio.addEventListener("timeupdate", displayLyrics);
  }

  playButton.addEventListener("click", () => {
    initializeLyrics();
    audio.play();
    playButton.classList.add("fade-out");
  });
});
