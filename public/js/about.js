const subtitleBoxes = document.querySelectorAll(".subtitle-box");

window.addEventListener("scroll", showSubtitle);

showSubtitle();

function showSubtitle() {
  const triggerBottom = window.innerHeight / 5 * 4;

  subtitleBoxes.forEach(subtitleBox => {
    const boxTop = subtitleBox.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      subtitleBox.classList.add("show");
    } else {
      subtitleBox.classList.remove("show");
    }
  })
}