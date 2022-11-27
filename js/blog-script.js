
//Assignement 2 Group 7

// validate fields, validate function calls all other functions used for validation.

function gotoPackage1() {
    alert('this should be going to package1 you have to make a code here');
    window.open("https://www.google.com")// URL needs to be changed!
}

function gotoPackage2() {
       window.open("https://www.google.com")// URL needs to be changed!
}

function gotoPackage3() {
    window.open("https://www.google.com")// URL needs to be changed!
}

function gotoPackage4() {
    window.open("https://www.google.com")// URL needs to be changed!
}

function gotoPackage5() {
    window.open("https://www.google.com")// URL needs to be changed!
}

function gotoPackage6() {
    window.open("https://www.google.com")// URL needs to be changed!
}

// function on() {
//     document.getElementById("overlay").style.display = "block";
//   }
  
//   function off() {
//     document.getElementById("overlay").style.display = "none";
//   }

function validate() {

    let result = false;

    let isEmailValid = checkUEmail();
       
    let isFormValid =  isEmailValid 
        

    // submit to the server if the form is valid
    if (isFormValid) {

        result = true;
    }
    else {
        result = false;
    }

    return result;
};


const uEmail = document.querySelector('#email');

const resetBtn = document.querySelector('#restBtn');
const form = document.querySelector('#gtregistration');

// create const variables, and create anonymous functions.
const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const regexp1 = /[a-zA-z_.-0-9]+@[a-zA-Z].[a-zA-Z]{2,4}/;
    return regexp1.test(email);
};

const showError = (input, message) => {
    // get the textfield element
    const textFieldEl = input.parentElement;
    // add the error class
    textFieldEl.classList.remove('success');
    textFieldEl.classList.add('error');

    // show the error message
    const error = textFieldEl.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the textfield element
    const textFieldEl = input.parentElement;

    // remove the error class
    textFieldEl.classList.remove('error');
    textFieldEl.classList.add('success');

    // hide the error message
    const error = textFieldEl.querySelector('small');
    error.textContent = '';
};

const checkUEmail = () => {
    let valid = false;
    const email = uEmail.value.trim();
    if (!isRequired(email) || !isEmailValid(email)) {
        showError(uEmail, "✕ Email address should be non-empty with the format xyz@xyz.xyz.");
    }
    else {
        showSuccess(uEmail);
        valid = true;

    }
    return valid;
};


resetBtn.addEventListener("click", clearMsg);
function clearMsg() {

    history.go(0);

};


// delay 500ms showing Instant feedback (error message)
const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(this, args)
        }, delay);
    };
};

//pass the input event handler to the debounce() function to debounce it
document.getElementById('gtregistration').addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
       
        case 'email':
            checkUEmail();
            break;
       
    
    }
}));




