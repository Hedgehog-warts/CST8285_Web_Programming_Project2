/* Assignement 2 Group 7_Doyoung Kim */

/* Header */
// document.querySelector('.buttonLinks2').addEventListener('click', redirectLink('./blog.html'));

function redirectLink (link) {
    window.location.href = link;
}


var list = document.querySelector('.buttonLists');

window.onclick = e => {
    if (e.target.id !== 'hiddenLogo' && e.target.classList[0] !== 'hiddenLogoName') {
        removeList();
    } else {
        showList();
    }
} 

window.addEventListener('resize', checksize);

function showList(){
    list.classList.toggle('newButtonLists');
}

function removeList(){
    list.classList.remove('newButtonLists');
}

function checksize(){
    if (window.innerWidth>1200) {
        list.classList.remove('newButtonLists');
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
});

goTop.addEventListener('click', topFunction);

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}