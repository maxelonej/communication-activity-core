const burger = document.querySelector('.burger')
const open = document.querySelector('.burger-open') 
const close = document.querySelector('.burger-close')

burger.addEventListener('click', () => {
  open.classList.add('active')
})

close.addEventListener('click', () => {
  open.classList.remove('active')
})