var feedback = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-feedback");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".close");
var fullname = popup.querySelector("[name=fullname]");
var email = popup.querySelector("[name=email]");
var message = popup.querySelector("[name=message]");
var form = popup.querySelector(".feedback-form");

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

form.addEventListener("submit", function (evt) {
  if(!fullname.value||!email.value||!message.value) {
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


