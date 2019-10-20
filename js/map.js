function initMap() {
  var coordinates = {lat: 59.938802, lng: 30.323283},
      markerImage = "img/map-marker.png",

      map = new google.maps.Map(document.getElementById("map"), {
        center: coordinates,
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
