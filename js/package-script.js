// search bar function
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

// Resetting the search bar and the drop down value
function resetSearch() {
    document.getElementById('searchBar').value = ''
    searchFunction();
    document.getElementById('package-dropDown').value=''
}
document.getElementById('package-resetButton').addEventListener("click", resetSearch)


// Filtering based off the drop down value
function filterByProvince(selectedProvince) {
    let packageResults = document.getElementsByClassName("search-packageTitle").length;
    let testing = document.getElementsByClassName("search-packageTitle")
    let province = document.getElementsByName(selectedProvince)

    for (i = 0; i < packageResults; i++) {
    if (testing[i].innerHTML.includes(selectedProvince)){
        console.log('finally')
        testing[i].style.display="list-item"
    }
    else{
        testing[i].style.display="none"
    }
       
         
    
}
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
    if (n >= slides.length) { slideIndex = 0 }

    if (n < 0) { slideIndex = slides.length - 1 }

    for (i = 0; i < slides.length; i++) {
        slides[i].setAttribute('style', 'opacity:0');
    }

    slides[slideIndex].setAttribute('style', 'opacity:1');
    if (s === 0) {
        setTimeout(autoSlides, 4000);
    }
}