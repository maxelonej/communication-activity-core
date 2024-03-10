const burger = document.querySelector('.burger')
const openBurger = document.querySelector('.burger-open') 
const closeBurger = document.querySelector('.burger-close')
const bodyBurger = document.getElementById('body')

burger.addEventListener('click', () => {
  openBurger.classList.add('active')
  bodyBurger.style.overflowY = 'hidden'
})

closeBurger.addEventListener('click', () => {
  openBurger.classList.remove('active')
  bodyBurger.style.overflowY = 'scroll'
})