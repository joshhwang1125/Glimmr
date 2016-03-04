var splashUrls = ['url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/s10.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/s1.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/s2.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/s3.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456344713/7.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/s6.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/s7.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/s8.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/s9.jpg")'];


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

