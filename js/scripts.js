//Twitter-Button
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

//Facebook-Button
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = 'https://connect.facebook.net/de_DE/sdk.js#xfbml=1&version=v2.12';
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

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

  $(function () {
    document.getElementById("message-box").style.backgroundColor = "lightblue";
  });

  $("#message-box").on("keyup", function() {
      console.log("keyup happened");
      var charCountm = $("#message-box").val().length;
      console.log(charCountm);
      $("#char-count").html(charCountm);
      if(charCountm > 50) {
          $("#char-count").css("color", "red");
      } else {
          $("#char-count").css("color", "black");
      };
  });

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

  //Tooltips

  $(function () {
    $('#item1').tooltip();
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  $("#submit-button").on('click', function() {
    var charCountn = $("#name").val().length;
    if(charCountn === 0) {
        $("#name").css("border", "2px solid red");
    } else {
        $('#visible-name').html('Thank You.');
        $('#name').hide();
    };
    var charCountp = $("#phone").val().length;
    if(charCountp === 0) {
        $("#phone").css("border", "2px solid red");
    } else {
        $('#visible-phone').html('Thank You.');
        $('#phone').hide();
    };
    var charCounte = $("#email").val().length;
    if(charCounte === 0) {
        $("#email").css("border", "2px solid red");
    } else {
      $('#visible-email').html('Thank You.');
      $('#email').hide();
    };
    var charCountm = $("#message-box").val().length;
    if(charCountm === 0) {
        $("#message-box").css("border", "2px solid red");
    } else {
        var comment = $('#message-box').val();
        $('#visible-comment').html('Thank you. We have reveived your message and will get in contact with you soon!');
        $('#message-box').hide();
    };
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
