var signInModal = document.getElementById('signInModal');
var signUpModal = document.getElementById('signUpModal');
var signInBtn = document.getElementById("signInBtn");
var signUpBtn = document.getElementById("signUpBtn");
var spanSignIn = document.getElementsByClassName("closeSIn")[0];
var spanSignUp = document.getElementsByClassName("closeSUp")[0];

signUpBtn.onclick = function() {
    signUpModal.style.display = "block";
}

spanSignUp.onclick = function() {
    signUpModal.style.display = "none";
}

signInBtn.onclick = function() {
    signInModal.style.display = "block";
}

spanSignIn.onclick = function() {
    signInModal.style.display = "none";
}

document.onclick = function(event) {
    if (event.target == signInModal) {
        signInModal.style.display = "none";
    }
     if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    }
}

