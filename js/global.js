// burger
const burger = document.querySelector(".burger");
const openBurger = document.querySelector(".burger-open");
const closeBurger = document.querySelector(".burger-close");

burger.addEventListener("click", () => {
  openBurger.classList.toggle("active");
  document.body.style.overflowY = "hidden";
});

closeBurger.addEventListener("click", () => {
  openBurger.classList.toggle("active");
  document.body.style.overflowY = "scroll";
});

// Open popup
const openPopup = (popupClass) => {
  const popup = document.querySelector(`.${popupClass}`);
  popup.classList.add("active");
  if (window.matchMedia("(max-width: 935px)").matches) {
    document.body.style.overflowY = "hidden";
  }
};

// Close active popup
const exitPopupByElement = (popup) => {
  const popupClass = popup.classList[0];
  const popupElement = document.querySelector(`.${popupClass}`);
  popupElement.classList.remove("active");
  if (window.matchMedia("(max-width: 935px)").matches) {
    document.body.style.overflowY = "scroll";
  }
};

// Close current popup
const exitPopupByClass = (popupClass) => {
  const popup = document.querySelector(`.${popupClass}`);
  popup.classList.remove("active");
  if (window.matchMedia("(max-width: 935px)").matches) {
    document.body.style.overflowY = "hidden";
  }
};

const closePopup = document.querySelector(".popup-close");
closePopup.addEventListener("click", () => {
  exitPopupByClass("feedback-popup");
});

document.addEventListener("click", (event) => {
  const popup = event.target.closest(".popup");
  if (event.target === popup) {
    exitPopupByElement(popup);
  }
  if (window.matchMedia("(max-width: 935px)").matches) {
    document.body.style.overflowY = document.body.style.overflowY === "scroll";
  }
});
