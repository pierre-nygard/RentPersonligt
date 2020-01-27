var burgerObj = document.getElementById('burger__menu');
var menu = document.getElementById('menuHolder');
var burgerHidden = true;

function initBurger() {
  burgerObj.addEventListener("click", burgerEvent);
}

function burgerEvent() {
  if(burgerHidden)
  {
    menu.classList.remove('navbar__menu__container--hidden')
  }
  else {
    menu.classList.add('navbar__menu__container--hidden');
  }
  burgerHidden = !burgerHidden;
}

document.addEventListener("load", initBurger());