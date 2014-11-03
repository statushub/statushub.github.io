$(window).load(function() {
  $.get("data.json", function (data) {
    console.log(data);
  });

  $('.flexslider').flexslider({
    controlNav: false,
    directionNav: false,

    animation: "slide",
    animationLoop: true,

    slideshowSpeed: 4000
  });
});