var nameError = document.getElementById('name-error');
var surnameError = document.getElementById('surname-error');
var countryError = document.getElementById('country-error');
var emailError = document.getElementById('email-error');
var commentError = document.getElementById('comment-error');
var submitError = document.getElementById('submit-error');
var checkedError = document.getElementById('checkBox-error');

function validateName() {
    debugger;
    var name = document.getElementById('name').value;
    if (name.length == 0) {
        nameError.innerHTML = "Name is required."
        return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
//checked surname's validation
function validateSurname() {
    var surname = document.getElementById('surname').value;
    if (surname.length == 0) {
        surnameError.innerHTML = "Surname is required."
        return false;
    }
    surnameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
//checked country's validation
function validateCountry() {
    var country = document.getElementById('autocomplete').value;
    if (country == "") {
        countryError.innerHTML = "Country is required."
        return false;
    }
    countryError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
//Checked email's validation
function validateEmail() {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var email = document.getElementById('email').value;
    if (email.length == 0) {
        emailError.innerHTML = "E-mail is required."
        return false;
    }
    if (!email.toLowerCase().match(validRegex)) {
        emailError.innerHTML = "E-mail is invalid."
        return false;
    }
    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
//Checked comment's validation
function validateComment() {
    var comment = document.getElementById('comment').value;
    var required = 10;
    var left = required - comment.length;

    if (left > 0) {
        commentError.innerHTML = left + ' more \n characters required.'
        return false;
    }

    commentError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}
//Checked checkbox's validation
function validateCheck() {  
    debugger;
    let isChecked = document.getElementById("checkBox1").checked;

    if (isChecked) {
        checkedError.innerHTML = '<i class="fas fa-check-circle"></i>';
        return isChecked;
    }

    checkedError.innerHTML = "Checked is required."

    return isChecked;
}
//Checked form's validation

function validateForm() {
    debugger;
    validateName();
    validateSurname();
    validateCountry();
    validateEmail();
    validateComment();
    validateCheck();
    if (!validateName() || !validateSurname() || !validateCountry() || !validateEmail() || !validateComment() || !validateCheck()) {

        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit.';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }
    return true;

}