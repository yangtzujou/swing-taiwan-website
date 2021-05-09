//// alert message

// alert("這個可行!");

// const swal = require("sweetalert");



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

const testimonial = document.querySelector(".testimonial-text");
const studentImage = document.querySelector(".student-image");
const studentName = document.querySelector(".student-name");
const studentRole = document.querySelector(".student-role");

const testimonials = [
  {
    name: "書瑤",
    position: "會計師",
    photo: "/images/student-img-1.jpg",
    text: "現在，正視跳舞的問題，是非常非常重要的。因為，透過逆向歸納，得以用最佳的策略去分析跳舞。儘管跳舞看似不顯眼，卻佔據了我的腦海。約翰遜說過一句經典的名言，心地善良的人，富於幻想的人比冷酷殘忍的人更容易聚合。這句話把我們帶到了一個新的維度去思考這個問題。"
  }, 
  {
    name: "阿成",
    position: "軟體工程師",
    photo: "/images/student-img-2.jpg",
    text: "所謂跳舞，關鍵是跳舞需要如何解讀。既然，高爾基曾提出，歷史是知識分子文化活動的結果。帶著這句話，我們還要更加慎重的審視這個問題。"
  }, 
  {
    name: "佳嬿",
    position: "建築師",
    photo: "/images/student-img-3.jpg",
    text: "魯迅相信，言之無文，行而不遠。這激勵了我。想必大家都能了解跳舞的重要性。做好跳舞這件事，可以說已經成為了全民運動。問題的關鍵究竟為何？現在，正視跳舞的問題，是非常非常重要的。經過上述討論，跳舞似乎是一種巧合，但如果我們從一個更大的角度看待問題，這似乎是一種不可避免的事實。"
  }, 
  {
    name: "昇豪",
    position: "廣告行銷",
    photo: "/images/student-img-4.jpg",
    text: "如果別人做得到，那我也可以做到。謹慎地來說，我們必須考慮到所有可能。既然如此，如果此時我們選擇忽略跳舞，那後果可想而知。但願各位能從這段話中獲得心靈上的滋長。"
  }
]

let testimonialIdx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[testimonialIdx];

  testimonial.innerHTML = text;
  studentImage.src = photo;
  studentName.innerHTML = name;
  studentRole.innerHTML = position;

  testimonialIdx++;

  if (testimonialIdx > testimonials.length - 1) {
    testimonialIdx = 0;
  }
}

setInterval(updateTestimonial, 10000);
