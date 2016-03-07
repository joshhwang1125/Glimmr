var splashUrls = ['url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/s10.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/s1.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/s2.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/s3.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456344713/7.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/s6.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/s7.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/s8.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1456620226/x2_rhexqv.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1457324083/x4_z60d5r.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1457324083/x5_wfaqph.jpg")',
'url("https://res.cloudinary.com/dcqvnxgiy/image/upload/v1457324086/x7_zg7390.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1457324092/f1_dasmgm.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1457324098/f2_shyckq.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1457324091/f3_ayngav.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1457324089/f4_okeog7.jpg")',
'url("http://res.cloudinary.com/dcqvnxgiy/image/upload/v1457324093/f6_yljyap.jpg")',
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

