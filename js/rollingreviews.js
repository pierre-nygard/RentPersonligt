var reviews = document.getElementsByClassName("content__review");
var activeReview = Math.floor(Math.random() * 2).toString();

reviews[activeReview].classList.toggle("content__review--inactive");

window.setInterval(function() {
    if(pages.activePage == 0)
    {
        // Handle activereview
        let activerev = reviews[activeReview];
        activerev.classList.toggle("content__review--inactive");
        activerev.classList.toggle("content__review--out");
        setTimeout(() => {
            activerev.classList.toggle("content__review--out")
        }, 800);
        // Handle NEW activereview
        activeReview = activeReview == 1 ? 0 : 1;
        reviews[activeReview].classList.toggle("content__review--inactive");
    }
}, 13000);