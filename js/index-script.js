/* Promotion */

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

/* Recommndation */

var vanGridItem = document.querySelectorAll(".vanGridItem");
var calGridItem = document.querySelectorAll(".calGridItem");
var torGridItem = document.querySelectorAll(".torGridItem");
var monGridItem = document.querySelectorAll(".monGridItem");
const allref = [vanGridItem, calGridItem, torGridItem, monGridItem];

var vanLink = document.querySelector("#vancouver");
var calLink = document.querySelector("#calgary");
var torLink = document.querySelector("#toronto");
var monLink = document.querySelector("#montreal");

vanLink.addEventListener('click', function() {changeRecommend(vanGridItem);});
calLink.addEventListener('click', function() {changeRecommend(calGridItem);});
torLink.addEventListener('click', function() {changeRecommend(torGridItem);});
monLink.addEventListener('click', function() {changeRecommend(monGridItem);});

function changeRecommend(ref) {
    for(let i=0; i<allref.length; i++) {
        for(let j=0; j<ref.length; j++) {
            allref[i][j].classList.add('visuallyHidden');
            ref[j].classList.remove('visuallyHidden');
        }
    }
}