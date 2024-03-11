loadComponent('../components/header.html', 'header', () => {
  const burger = document.querySelector('.burger')
  const openBurger = document.querySelector('.burger-open')
  const closeBurger = document.querySelector('.burger-close')

  burger.addEventListener('click', () => {
    openBurger.classList.add('active')
    document.body.style.overflowY = 'hidden'
  })

  closeBurger.addEventListener('click', () => {
    openBurger.classList.remove('active')
    document.body.style.overflowY = 'scroll'
  })
})
