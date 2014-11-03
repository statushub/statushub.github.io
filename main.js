$(function() {
  $.get("data.json", function (data) {
    var $flexslider = $(".flexslider");
    var $slides = $flexslider.find(".slides");

    var $pages = data.pages.map(function (page) {
      return $("<li><iframe src='" + page + "'></iframe></li>");
    });

    $pages.forEach(function ($page) {
      $slides.append($page)
    });

    var slideShowSpeed = data.pages.length * data.intervalPerPageMs;

    function reloadPage($li) {
      var $iframe = $li.find("iframe");
      $iframe.attr("src", $iframe.attr("src"));
    }

    $flexslider.flexslider({
      controlNav: false,
      directionNav: false,

      animation: "slide",
      animationLoop: true,

      slideshowSpeed: slideShowSpeed,

      before: function (event) {
        var nextSlideIndex = (event.currentSlide + 1) % event.count;
        console.log("Reloading:" + data.pages[nextSlideIndex]);
        reloadPage($pages[nextSlideIndex]);
      }
    });
  });
});