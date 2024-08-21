window.addEventListener("load", () => {
  let sounds = document.querySelectorAll(".sound");
  let pads = document.querySelectorAll(".pads div");

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();
    });
  });
});
