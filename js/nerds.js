var writeusLink = document.querySelector(".writeus-button");

if (writeusLink) {
  var nerds = document.querySelector(".writeus");
  var popupClose = nerds.querySelector(".writeus-close");
  var formPopup = nerds.querySelector("form");
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
    nerds.classList.add("writeus-show");

    if (!storageName) {
      nameField.focus();
      return;
    }
    nameField.value = storageName;

    if (!storageEmail) {
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
      nerds.classList.remove("writeus-error");
      nerds.offsetWidth = nerds.offsetWidth;
      nerds.classList.add("writeus-error");

      if (!nameField.value) {
        nameField.focus();
        return;
      }

      if (!emailField.value) {
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
    nerds.classList.remove("writeus-show");
    nerds.classList.remove("writeus-error");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (nerds.classList.contains("writeus-show")) {
        evt.preventDefault();
        nerds.classList.remove("writeus-show");
        nerds.classList.remove("writeus-error");
      }
    }
  });
}

function initMap() {
  var coordinates = {lat: 59.938802, lng: 30.323900},
    centerCoordinates = {lat: 59.939176, lng: 30.321575},
    markerImage = "img/map-marker.png",

    map = new google.maps.Map(document.getElementById("map"), {
      center: centerCoordinates,
      disableDefaultUI: true,
      scrollwheel: false,
      zoom: 17
    }),

    marker = new google.maps.Marker({
      position: coordinates,
      map: map,
      animation: google.maps.Animation.DROP,
      icon: markerImage
    });
}
