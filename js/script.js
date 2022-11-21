var slideIndex = 1;
var stop = 0;
bannerSlides(slideIndex, stop);

var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");
var stopButton = document.querySelector(".stop");
nextButton.addEventListener('click', nextSlides);
prevButton.addEventListener('click', prevSlides);
stopButton.addEventListener('click', stopSlides);

function nextSlides() {
    slideIndex += 1;
    stop = 1;
    bannerSlides(slideIndex, stop);
}

function prevSlides() {
    slideIndex -= 1;
    stop = 1;
    bannerSlides(slideIndex, stop);
}

function stopSlides() {
    stop = 1;
    bannerSlides(slideIndex, stop);
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
        console.log(slides);
        setTimeout(autoSlides, 4000);
    } 
}