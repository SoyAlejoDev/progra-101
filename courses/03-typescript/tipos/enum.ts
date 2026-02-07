(() => {
  enum AudioLevel {
    min,
    medium,
    max,
  }

  let currentAudio = AudioLevel.medium;
  console.log(currentAudio);
  console.log(AudioLevel);
})();
