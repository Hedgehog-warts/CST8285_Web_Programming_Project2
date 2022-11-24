
//Assignement 2 Group 7

// validate fields, validate function calls all other functions used for validation.
function validate() {

    let result = false;

    let isUsernameValid = checkUsername(),
        isEmailValid = checkUEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();

       // isCheckedTerm = myTerms();

    let isFormValid = isUsernameValid &&
        isEmailValid &&
        isPasswordValid &&
        isConfirmPasswordValid;
        // &&
        // isCheckedTerm;

    // debugging each function in webpage using console.log, checking the return vaule, true or false.
    // console.log(isUsernameValid + "username");
    // console.log(isEmailValid + "email");
    // console.log(isPasswordValid + "password");
    // console.log(isConfirmPasswordValid + "confimedPassword");
    // console.log(isCheckedTerm + "outside");

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
const uName = document.querySelector('#login');
const uPassid = document.querySelector('#pass');
const confirmPassid = document.querySelector('#pass2');
// const uNewsletter = document.querySelector('#newsletter');
// const uTerms = document.querySelector('#terms');
const resetBtn = document.querySelector('#restBtn');
const form = document.querySelector('#gtregistration');

// create const variables, and create anonymous functions.
const isRequired = value => value === '' ? false : true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isEmailValid = (email) => {
    const regexp1 = /[a-zA-z_.-0-9]+@[a-zA-Z].[a-zA-Z]{2,4}/;
    return regexp1.test(email);
};

const isPasswordSecure = (password) => {
    const regexp2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
    return regexp2.test(password);
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

const checkUsername = () => {
    let valid = false;
    const min = 1,
        max = 20;
    const username = uName.value.trim();
    if (!isRequired(username) || !isBetween(username.length, min, max)) {
        showError(uName, "✕ User Name should be non-empty, and within 20 characters long.")
    }
    else {
        uName.value = uName.value.toLowerCase();
        showSuccess(uName);
        valid = true;

    }
    return valid;
};

const checkPassword = () => {
    let valid = false;
    const password = uPassid.value.trim();
    if (!isRequired(password) || !isPasswordSecure(password)) {
        showError(uPassid, "✕  Password should be at least 6 characters: 1 uppercase, 1 lowercase.");
    }
    else {
        showSuccess(uPassid);
        valid = true;
    }
    return valid;
};

const checkConfirmPassword = () => {
    let valid = false;
    const confirmPassword = confirmPassid.value.trim();
    const password = uPassid.value.trim();
    if (!isRequired(confirmPassword) || password !== confirmPassword) {
        showError(confirmPassid, "✕  Please retype password.");
    }
    else {
        showSuccess(confirmPassid);
        valid = true;
    }
    return valid;
};


// function myCheckBox() {
//     if (uNewsletter.checked === true) {
//         alert("Possible spam by setting an event.");
//     }

// };

// const myTerms = () => {
//     let valid = true;
//     if (uTerms.checked === false) {
//         console.log("inside")
//         showError(uTerms, "✕  Please accept the terms and conditions.");
//         valid = false;

//     } else if ((document.querySelector('.error') !== null)) {
//         // uTerms =null;
//         showSuccess(uTerms);
//         valid = true;

//     }
//     console.log(valid+"ouside");
//     return valid;
// };


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
        case 'login':
            checkUsername();
            break;
        case 'email':
            checkUEmail();
            break;
        case 'pass':
            checkPassword();
            break;
        case 'pass2':
            checkConfirmPassword();
            break;
        // case 'newsletter':
        //     myCheckBox();
        //     break;
        // case 'terms':
        //     myTerms();
        //     break;
    }
}));




