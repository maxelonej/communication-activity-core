const burger = document.querySelector('.burger')
const open = document.querySelector('.burger-open') 
const close = document.querySelector('.burger-close')
const body = document.getElementById('body')

burger.addEventListener('click', () => {
  open.classList.add('active')
  body.style.overflowY = 'hidden'
})

close.addEventListener('click', () => {
  open.classList.remove('active')
  body.style.overflowY = 'scroll'
})