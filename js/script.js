var feedback = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".close");
var fullname = popup.querySelector("[name=fullname]");
var emailfeedback = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var formfeedback = popup.querySelector(".feedback-form");

feedback.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("overlay-show");
  fullname.focus();
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});

overlay.addEventListener("click", function() {
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("overlay-show");
});

formfeedback.addEventListener("submit", function (evt) {
  if(!fullname.value||!emailfeedback.value||!message.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth=popup.offsetWidth
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
      overlay.classList.remove("overlay-show");
    }
  }
});


var login =document.querySelector(".login-link");
var formlogin = document.querySelector(".login-form");
var emaillogin = formlogin.querySelector("[name=email]");
var password = formlogin.querySelector("[name=password]");

login.addEventListener("mouseover", function () {
  if (emaillogin.classList.contains("input-error")) {
    emaillogin.classList.remove("input-error");
  }
  if (password.classList.contains("input-error")) {
    password.classList.remove("input-error");
  }
});

formlogin.addEventListener("submit", function (evt) {
  if(!emaillogin.value||!password.value) {
    evt.preventDefault();
    if(!emaillogin.value) {
      emaillogin.classList.remove("input-error");
      emaillogin.offsetWidth=emaillogin.offsetWidth
      emaillogin.classList.add("input-error");
    }
    if (!password.value) {
      password.classList.remove("input-error");
      password.offsetWidth=password.offsetWidth
      password.classList.add("input-error")
    }
  }
});


var formsubscribe = document.querySelector(".form-subscribe");
var emailsubscribe = formsubscribe.querySelector("[name=email]");

if (emailsubscribe.classList.contains("input-error")) {
  emailsubscribe.classList.remove("input-error");
}

formsubscribe.addEventListener("submit", function (evt) {
  if (!emailsubscribe.value) {
    evt.preventDefault();
    emailsubscribe.classList.remove("input-error");
    emailsubscribe.offsetWidth=emailsubscribe.offsetWidth
    emailsubscribe.classList.add("input-error");
  }
});
