function searchFunction() {
    let searchPackages = document.getElementById('searchBar').value;
    searchPackages = searchPackages.toLowerCase();
    console.log(searchPackages)
    let packageResults = document.getElementsByClassName("search-packageTitle");

    for (i = 0; i < packageResults.length; i++) {
        if (!packageResults[i].innerHTML.toLowerCase().includes(searchPackages)) {
            packageResults[i].style.display = "none";
        }
        else {
            packageResults[i].style.display = "list-item";
        }
    }

}

function filterByProvince(selectedProvince){
    let filterProvinces = document.getElementById('package-dropDown').value;
    console.log(selectedProvince)
    let packageResults = document.getElementsByClassName("Saskatchewan").value;

    for (i=0; i > packageResults; i++){
        if (packageResults == filterProvinces) {
            packageResults[i].style.display = "list-item";
        }
        else {
            packageResults[i].style.display = "none";
        }
    }
}

document.querySelector(".promotionPackage").addEventListener('click', change);

function change() {
    var test1 = document.querySelector(".slide1");
    var test2 = document.querySelector(".slide2");
    test1.setAttribute('style','top:-20px; opacity:0');
    test2.setAttribute('style','top: 60px; opacity:1');
}

var slideIndex = 0;
var stop = 0;
promoSlides(slideIndex, stop);

function autoSlides() {
    slideIndex += 1;
    promoSlides(slideIndex, stop);
}

function promoSlides(n, s) {  
    var slides = document.querySelectorAll(".slides");  
    if (n >= slides.length) {slideIndex = 0}    

    if (n < 0) {slideIndex = slides.length-1}

    for (i = 0; i < slides.length; i++) {
        slides[i].setAttribute('style','opacity:0');
    }

    slides[slideIndex].setAttribute('style','opacity:1');
    if(s === 0) {
        setTimeout(autoSlides, 4000);
    } 
}