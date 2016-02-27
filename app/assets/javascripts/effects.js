$(".profile-navigation ul li").click(function(){
  var xcoord = $(this).data("xcoord");

  $(".profile-navigation div").stop().animate({marginLeft:xcoord}, 500, "easeInOutExpo");
  $(this).addClass("active");
  $(".profile-navigation ul li").not(this).removeClass("active");

});

// Set to on click