/* Assignement 2 Group 7_Doyoung Kim */

/* Header */

var listLogo = document.querySelector('#hiddenLogo');
var listLogoName = document.querySelector('.hiddenLogoName');

var list = document.querySelector('.logoList');


listLogo.addEventListener('click',showList);
listLogoName.addEventListener('click',showList);

function showList(){
    list.classList.toggle('newLogoList');
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
});

goTop.addEventListener('click', topFunction);

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}