// Popups
const popups = document.querySelectorAll(".popup");
const links = document.querySelectorAll(".activate-popup");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.stopPropagation();
    const popupName = link.dataset.popup;
    const popup = document.querySelector(`.popup.${popupName}`);
    if (popup) {
      popup.classList.toggle("active");
    }
  });
});

document.addEventListener("click", (event) => {
  popups.forEach((popup) => {
    const popupWrapper = popup.querySelector(".popup__wrapper");
    if (
      !popupWrapper.contains(event.target) &&
      popup.classList.contains("active")
    ) {
      popup.classList.remove("active");
    }
  });
});
