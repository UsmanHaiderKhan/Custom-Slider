$(document).ready(function () {
  $("#pagepiling").pagepiling({
    loop: true,
    navigation: false,
    scrollingSpeed: 500,
    easing: "ease-in",
    verticalCentered: true,
    normalScrollElementTouchThreshold: 10,
    touchSensitivity: 9,
    css3: true,
    keyboardScrolling: true,
    sectionSelector: ".section",
  });
});

//Owl Carousel

$(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    mouseDrage: false,
    center: true,
    autoplayTimeout: 1000,
    smartSpeed: 500,
    slideBy: 1,
    items: 1,
  });

  $(".item img").on("mouseover", function (e) {
    owl.trigger("play.owl.autoplay");
  });
  $(".item img").on("mouseleave", function (e) {
    owl.trigger("stop.owl.autoplay");
  });
});

// ---------------- Nav Active classs --------------
$(function () {
  $(".borders").on("click", function () {
    $(".borders").removeClass("active");
    $(this).addClass("active");
  });
});

$(function () {
  // For First Slider
  $("#border-1").on("click", function () {
    $(".section").addClass("bg-color-filter-1");
    $(".section").removeClass("bg-color-filter-2");
    $(".section").removeClass("bg-color-filter-3");
    $(".section").removeClass("bg-color-filter-4");
  });

  $("#border-2").on("click", function () {
    $(".section").addClass("bg-color-filter-2");
    $(".section").removeClass("bg-color-filter-1");
    $(".section").removeClass("bg-color-filter-3");
    $(".section").removeClass("bg-color-filter-4");
  });

  $("#border-3").on("click", function () {
    $(".section").addClass("bg-color-filter-3");
    $(".section").removeClass("bg-color-filter-1");
    $(".section").removeClass("bg-color-filter-2");
    $(".section").removeClass("bg-color-filter-4");
  });

  $("#border-4").on("click", function () {
    $(".section").addClass("bg-color-filter-4");
    $(".section").removeClass("bg-color-filter-1");
    $(".section").removeClass("bg-color-filter-2");
    $(".section").removeClass("bg-color-filter-3");
  });
});
