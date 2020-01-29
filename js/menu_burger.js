var burgerObj = document.getElementById('burger__menu');
var closeObj = document.getElementById('burger__close');
var menu = document.getElementById('menuHolder');
var burgerHidden = true;

function initBurger() {
  burgerObj.addEventListener("click", burgerEvent);
  closeObj.addEventListener("click", openContactWindow)
}

function burgerEvent() {
  if(!menuActive) return;
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
