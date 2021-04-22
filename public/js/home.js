//// cover img carousel

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

//// collaboration img background slider

const bg = document.querySelector(".slider-bg-container");
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;

setBg();

function setBg() {
  bg.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach(slide => {
    slide.classList.remove("active");
  })
  slides[activeSlide].classList.add("active");
}

leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBg();
  setActiveSlide();
})

rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBg();
  setActiveSlide();
})

//// testimonial box switcher
