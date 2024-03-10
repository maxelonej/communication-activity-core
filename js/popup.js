const popup = document.getElementById('popup')
const openPopup = document.querySelector('.feedback')
const exitPopup = document.querySelector('.popup-close')
const bodyPopup = document.getElementById('body')

openPopup.addEventListener('click', () => {
  popup.classList.add('active')
  bodyPopup.style.overflowY = 'hidden'
})
exitPopup.addEventListener('click', () => {
  popup.classList.remove('active')
  bodyPopup.style.overflowY = 'scroll'
})

popup.addEventListener('click', (event) => {
  if(event.target === popup) {
    bodyPopup.style.overflowY = 'scroll'
    popup.classList.remove('active')
  }
})
