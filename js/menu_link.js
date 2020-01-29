const menuLinks = document.querySelectorAll('.navbar__link');
var menuActive = true;
var contactWindowClosed = true;

var pages = document.querySelectorAll('.page');
pages = {
  activePage: 0,
  numPages: pages.length
}

  // Set Event listeners
function initMenu() {
  document.getElementById("brand").addEventListener("click", () => linkPress(0, false));
  for(var i = 0; i < menuLinks.length; i++)
  {
    let j = i;
    menuLinks[i].addEventListener("click", () => linkPress(j));
  }
}

function openContactWindow() {
  let contactWindow = document.getElementById("contact__window");
  if(contactWindowClosed){
    document.getElementById('menuHolder').classList.add('navbar__menu__container--truehidden');
    document.getElementById('navbar__burger').classList.add('navbar__burger--hidden');
    document.getElementById('navbar__close').classList.add('navbar__close--show');
    contactWindow.classList.add("contact__window--active")
    menuActive = false;
  }
  else {
    document.getElementById('menuHolder').classList.remove('navbar__menu__container--truehidden');
    document.getElementById('navbar__burger').classList.remove('navbar__burger--hidden');
    document.getElementById('navbar__close').classList.remove('navbar__close--show');
    contactWindow.classList.remove("contact__window--active")
    menuActive = true;
  }
  contactWindowClosed = !contactWindowClosed;
}

// Navbar link clicked => Change page
function linkPress(pageNum, toggleMenu = true)
{
  if(pageNum == 2) {
    // Contact link
    openContactWindow();
    return;
  }

  // Listen for page animation 
  // Disable page transition to home from home
  if (!menuActive || pageNum == pages.activePage) return;
  
  document.querySelectorAll('.page').forEach(function(a) {
    if(a.dataset.page == pages.activePage)
    {
      // Inactivate the active page, render out animation
      a.classList.remove('page--active');
      a.classList.add('page--out');
      // Set timeout on out animation
      setTimeout(() => {a.classList.remove('page--out');}, 1200);
    }
    if(a.dataset.page == pageNum)
    {
      // Activate chosen page
      a.classList.add('page--active');
    }
  });
  // Set active link
  setActiveLink(pages.activePage,pageNum);
  // Activate chosen page
  pages.activePage = pageNum;
  // Call burgerEvent to close mobile menu on link press
  if(toggleMenu)
    burgerEvent();
  // Set timer for link activation
  menuActive = false;
  setTimeout(() => {menuActive = true}, 600);
}

function setActiveLink(o, n) {
  // Set active link
  menuLinks[o].classList.remove('active');
  menuLinks[n].classList.add('active');
}

// Initialize
document.addEventListener("load", initMenu());