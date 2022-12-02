/* Header */

var listLogo = document.querySelector('#hiddenLogo');
var listLogoName = document.querySelector('.hiddenLogoName');

var list = document.querySelector('.logoList');


listLogo.addEventListener('click',showList);
listLogoName.addEventListener('click',showList);

function showList(){
    list.classList.toggle('newLogoList');
}



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


/* Footer, Vertical CircleLine */

var goTop = document.getElementById("goToTopID");
window.addEventListener('scroll', () => {
    var scroll = this.scrollY;
    

    if (scroll >100 ) {
        goTop.classList.add("newGoToTop");
    } else {
        goTop.classList.remove("newGoToTop");
    }

    // var circle1=document.querySelector('.circle1');
    // var circle2=document.querySelector('.circle2');
    // var circle3=document.querySelector('.circle3');

    // circleArray = new Array(circle1, circle2, circle3);

    // for (i=0; i<circleArray.length; i++){
    //     circleArray[i].classList.remove("newCircle");
    // }

    // if (scroll > 360 && scroll <1180) {
    //     circle1.classList.add("newCircle");
    // } else if (scroll > 1180 && scroll <2180) {
    //     circle2.classList.add("newCircle");
    // } else if (scroll > 2180) {
    //     circle3.classList.add("newCircle");
    // } 
});

goTop.addEventListener('click', topFunction);

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}