const body = document.body
const btnTheme = document.querySelector('.fa-moon')
const btnHamburger = document.querySelector('.nav__hamburger') // fix here

const addThemeClass = (bodyClass, btnClass) => {
  if (bodyClass) body.classList.add(bodyClass)
  if (btnClass && btnTheme) btnTheme.classList.add(btnClass)
}

const getBodyTheme = localStorage.getItem('portfolio-theme')
const getBtnTheme = localStorage.getItem('portfolio-btn-theme')

addThemeClass(getBodyTheme, getBtnTheme)

const isDark = () => body.classList.contains('dark')

const setTheme = (bodyClass, btnClass) => {
  body.classList.remove(localStorage.getItem('portfolio-theme'))
  if (btnTheme) btnTheme.classList.remove(localStorage.getItem('portfolio-btn-theme'))

  addThemeClass(bodyClass, btnClass)

  localStorage.setItem('portfolio-theme', bodyClass)
  localStorage.setItem('portfolio-btn-theme', btnClass)
}

// ======================
// MOBILE NAV TOGGLE FIX
// ======================
const displayList = () => {
  const navUl = document.querySelector('.nav__list')
  if (!navUl) return

  navUl.classList.toggle('display-nav-list')      // toggle menu
  btnHamburger.classList.toggle('open')           // optional, for button styling
}

if (btnHamburger) btnHamburger.addEventListener('click', displayList)

// ======================
// SCROLL UP BUTTON
// ======================
const scrollUp = () => {
  const btnScrollTop = document.querySelector('.scroll-top')
  if (!btnScrollTop) return

  if (body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btnScrollTop.style.display = 'block'
  } else {
    btnScrollTop.style.display = 'none'
  }
}

document.addEventListener('scroll', scrollUp)

