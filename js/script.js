window.addEventListener('scroll', () => {
    var scroll = this.scrollY;
    var top = document.getElementById("goToTopID")
    if (scroll >100 ) {
        top.classList.add("newGoToTop")
    } else {
        top.classList.remove("newGoToTop")
    }
});


var slideIndex = 1;
var stop = 0;
bannerSlides(slideIndex, stop);
var customTimeout;

var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");
var stopButton = document.querySelector(".stop");
nextButton.addEventListener('click', function() {moveSlides(1);});
prevButton.addEventListener('click', function() {moveSlides(-1);});
stopButton.addEventListener('click', stopSlides);

function moveSlides(move) {
    slideIndex += move;
    stop = 1;
    bannerSlides(slideIndex, stop);
    clearTimeout(customTimeout);
}

function stopSlides() {
    clearTimeout(customTimeout);
}

function autoSlides() {
    slideIndex += 1;
    bannerSlides(slideIndex, stop);
}

function bannerSlides(n, s) {
    var i;
    var slides = document.getElementsByClassName("slides");
    
    if (n > slides.length) {slideIndex = 1}    

    if (n < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    if(s === 0) {
        customTimeout = setTimeout(autoSlides, 4000);
    } 
}

