const menuLinks = document.querySelectorAll('.navbar__link');
var menuActive = true;

var pages = document.querySelectorAll('.page');
pages = {
  activePage: 0,
  numPages: pages.length
}


function initMenu() {
  // Set Event listeners
  for(var i = 0; i < menuLinks.length; i++)
  {
    let j = i;
    menuLinks[i].addEventListener("click", () => scrollTo(j));
  }
}

function scrollTo(pageNum)
{
  // Menu Scroll effect
  if (!menuActive) return;

  document.querySelectorAll('.page').forEach(function(a) {
    if(a.dataset.page == pages.activePage)
    {
      a.classList.remove('page--active');
      a.classList.add('page--out');
      setTimeout(() => {a.classList.remove('page--out');}, 1200);
    }
    if(a.dataset.page == pageNum)
    {
      a.classList.add('page--active');
    }
  });

  setActiveLink(pages.activePage,pageNum);
  pages.activePage = pageNum;

  menuActive = false;
  setTimeout(() => {menuActive = true}, 600);
}

function setActiveLink(o, n) {
  // Toggle link effectiveness
  menuLinks[o].classList.remove('active');
  menuLinks[n].classList.add('active');
}

// Init
document.addEventListener("load", initMenu());