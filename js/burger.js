// burger menu
const burgerMenu = document.querySelector(".header__burger-content");
// burger icon in header
const burgerOpenButton = document.querySelector(".header__burger-open");
// close icon in burger menu
const burgerCloseButton = document.querySelector(".header__burger-close");

burgerOpenButton.addEventListener("click", () => {
  burgerMenu.classList.add("active");
});

burgerCloseButton.addEventListener("click", () => {
  burgerMenu.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!burgerMenu.contains(e.target) && !burgerOpenButton.contains(e.target)) {
    burgerMenu.classList.remove("active");
  }
});