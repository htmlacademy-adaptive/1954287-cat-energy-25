// Отображение главной навигации в мобильном режиме

let mainNav = document.querySelector('.main-nav');
let mainNavToggle = document.querySelector('.main-nav__toggle');
let mainNavList = document.querySelector('.main-nav__list');

mainNavToggle.addEventListener('click', () => {
  if (mainNav.classList.contains('main-nav--closed')) {
    mainNav.classList.remove('main-nav--closed');
    mainNav.classList.add('main-nav--opened');

    mainNavList.classList.toggle('main-nav__list--opened');
  } else {
    mainNav.classList.remove('main-nav--opened');
    mainNav.classList.add('main-nav--closed');

    mainNavList.classList.toggle('main-nav__list--opened');
  }
})
