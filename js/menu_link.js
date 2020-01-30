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

function toggleContactWindow() {
  let contactWindow = document.getElementById("contact__window");
  menuActive = (contactWindowClosed) ? false : true;
  document.getElementById('menuHolder').classList.toggle('navbar__menu__container--truehidden');
  document.getElementById('navbar__burger').classList.toggle('navbar__burger--hidden');
  document.getElementById('navbar__close').classList.toggle('navbar__close--show');
  contactWindow.classList.toggle("contact__window--active")
  contactWindowClosed = !contactWindowClosed;
}

// Navbar link clicked => Change page
function linkPress(pageNum, toggleMenu = true)
{
  if(pageNum == 2) {
    // Contact link
    toggleContactWindow();
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
  setTimeout(() => {menuActive = true}, 1200);
}

function setActiveLink(o, n) {
  // Set active link
  menuLinks[o].classList.remove('active');
  menuLinks[n].classList.add('active');
}

// Initialize
document.addEventListener("load", initMenu());