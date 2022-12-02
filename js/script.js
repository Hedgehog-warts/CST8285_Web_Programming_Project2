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