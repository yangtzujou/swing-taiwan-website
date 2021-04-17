const imgs = document.getElementById("imgs");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const img = document.querySelectorAll("#imgs img");

let idx = 0;

let interval = setInterval(runCover, 2000);

function runCover() {
  idx++;
  changeCoverImage();
}

function changeCoverImage() {
  if (idx > img.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = img.length - 1;
  }

  imgs.style.transform = `translateX(${-idx * 100}vw)`;
}

prev.addEventListener("click", () => {
  idx--;
  changeCoverImage();
  resetInterval();
})

next.addEventListener("click", () => {
  idx++;
  changeCoverImage();
  resetInterval();
})

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(runCover, 2000);
}