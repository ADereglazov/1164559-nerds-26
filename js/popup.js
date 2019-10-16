var writeusLink = document.querySelector(".writeus-button");
var popup = document.querySelector(".writeus");
var popupClose = popup.querySelector(".writeus-close");
var formPopup = popup.querySelector("form");
var nameField = formPopup.querySelector(".js-popup-name");
var emailField = formPopup.querySelector(".js-popup-email");
var letterField = formPopup.querySelector(".js-popup-textarea");
var popupSubmitButton = formPopup.querySelector(".js-popup-submitButton");
var storageName = "";
var storageEmail = "";
var isStorageSupport = true;

try {
  storageName = localStorage.getItem("nameField");
  storageEmail = localStorage.getItem("emailField");
} catch (err) {
  isStorageSupport = false;
}

// Убираем у полей атрибуты required чтобы валидация полей обрабатывалась с помощью JS
nameField.required = false;
emailField.required = false;
letterField.required = false;

writeusLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("writeus-show");

  if (!nameField.value) {
    nameField.focus();
    return;
  }

  nameField.value = storageName;
  if (!emailField.value) {
    emailField.focus();
    return;
  }

  emailField.value = storageEmail;
  if (!letterField.value) {
    letterField.focus();
    return;
  }

  popupSubmitButton.focus();

});

formPopup.addEventListener("submit", function (evt) {
  if (!nameField.value || !emailField.value || !letterField.value) {
    evt.preventDefault();
    popup.classList.remove("writeus-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("writeus-error");

    storageName = nameField.value;
    storageEmail = emailField.value;

    if (!storageName) {
      nameField.focus();
      return;
    }

    if (!storageEmail) {
      emailField.focus();
      return;
    }

    letterField.focus();
  }

  else {
    if (isStorageSupport) {
      localStorage.setItem("nameField", nameField.value);
      localStorage.setItem("emailField", emailField.value);
    }
  }
});

popupClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("writeus-show");
  popup.classList.remove("writeus-error");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("writeus-show")) {
      evt.preventDefault();
      popup.classList.remove("writeus-show");
      popup.classList.remove("writeus-error");
    }
  }
});
