const bodyPopup = document.getElementById('body')

const openPopup = (popupClass) => {
  const popup = document.querySelector(`.${popupClass}`)
  popup.classList.add('active')
  bodyPopup.style.overflowY = 'hidden'
}

const exitPopup = (popupClass) => {
  const popup = document.querySelector(`.${popupClass}`)
  popup.classList.remove('active')
  bodyPopup.style.overflowY = 'scroll'
}

document.addEventListener('click', (event) => {
  const popup = document.querySelector(`.${event.target.closest('.popup') ? 'active' : ''}`)
  if(event.target === popup) {
    popup.classList.remove('active')
    bodyPopup.style.overflowY = 'scroll'
  }
})
