window.addEventListener("load", () => {
  let sounds = document.querySelectorAll(".sound");
  let pads = document.querySelectorAll(".pads div");
  let visual = document.querySelector(".visual");
  let colors = [
    "#8ef6e4",
    "#9896f1",
    "#d59bf6",
    "#edb1f1",
    "#a8e6cf",
    "#fdffab",
  ];

  pads.forEach((pad, index) => {
    pad.addEventListener("click", function () {
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubble(index);
    });
  });

  let createBubble = (index) => {
    let bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function () {
      visiual.removeChild(this);
    })
  };
});
