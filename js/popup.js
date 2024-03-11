// Открывает попап
const openPopup = (popupClass) => {
  const popup = document.querySelector(`.${popupClass}`)
  popup.classList.add('active')
  if (window.matchMedia("(max-width: 935px)").matches) {
    document.body.style.overflowY = "hidden";
  }
}

// Закрывает активный попап
const exitPopupByElement = (popup) => {
  const popupClass = popup.classList[0]
  const popupElement = document.querySelector(`.${popupClass}`)
  popupElement.classList.remove('active')
  if (window.matchMedia("(max-width: 935px)").matches) {
    document.body.style.overflowY = "scroll";
  }
}

// Закрывает конкретный попап
const exitPopupByClass = (popupClass) => {
  const popup = document.querySelector(`.${popupClass}`)
  popup.classList.remove('active')
  if (window.matchMedia("(max-width: 935px)").matches) {
    document.body.style.overflowY = "hidden";
  }
}

loadComponent('../components/popups/feedback.html', 'popup-feedback', () => {
  const closePopup = document.querySelector('.popup-close')
  closePopup.addEventListener('click', () => {
    exitPopupByClass('feedback-popup')
  })
})

document.addEventListener('click', (event) => {
  const popup = event.target.closest('.popup')
  if(event.target === popup) {
    exitPopupByElement(popup)
  }
  if (window.matchMedia("(max-width: 935px)").matches) {
    document.body.style.overflowY = document.body.style.overflowY === "scroll";
  }
})
