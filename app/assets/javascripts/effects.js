var splashUrls = ['url("/assets/s10.jpg")',
'url("/assets/s1.jpg")',
'url("/assets/s2.jpg")',
'url("/assets/s3.jpg")',
'url("/assets/s5.jpg")',
'url("/assets/s6.jpg")',
'url("/assets/s7.jpg")',
'url("/assets/s8.jpg")',
'url("/assets/s9.jpg")'];


$(function() {
  $('.inspire-butt').click(function(e) {
    e.preventDefault();
    $('.inspire-bucket').css('background-image', splashUrls[Math.floor(Math.random()*splashUrls.length)]);

  });
});


$(function() {
  $(".welcome-link").click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 0}, 1000);
  });
});

$(function() {
  $(".inspire-link").click(function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: 855}, 1000);
  });
});
