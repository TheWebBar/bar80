//Google Maps
var map;
var position;
var marker;
function initMap() {
  position = {lat: 48.1132636, lng: 11.5452113};

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.1132636, lng: 11.5452113},
    zoom: 12
  });

  marker = new google.maps.Marker({
      position: position,
      map: map
  });

  map.addListener('click', function(e) {
      placeMarkerAndPanTo(e.latLng, map);
  });
}

function placeMarkerAndPanTo(latLng, map) {
  var marker = new google.maps.Marker({
    position: latLng,
    map: map
  });
  map.panTo(latLng);
}

$(document).ready(function(){

  //Smooth Scrolling

  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    if (href != undefined && href != '#') {
      $root.animate({
        scrollTop: $(href).offset().top
      }, 500, function () {
        window.location.hash = href;
      });
    }
    return false;
  });

  // work section
  $("#work1").prepend("\
    <a href='https://barryshop.herokuapp.com/' class='work-img' id='work-img1'>\
      <img src='img/barryshop.png' class='img-responsive'>\
      <span class='info'><p class='proj-title1'>Project 01:<br>Barryshop</p></span>\
    </a>\
  ");

  $("#work2").prepend("\
    <a href='#' class='work-img' id='work-img2'>\
      <img src='img/about_image.jpg' class='img-responsive'>\
      <span class='info'><p class='proj-title2'>Project 02:<br>Stay Tuned</p></span>\
    </a>\
  ");

  $(".work-img").mouseenter( function() {
    $(".info", this).show();
  }).mouseleave(function(){
    $(".info", this).hide();
  });
});
