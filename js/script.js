$(document).ready(function () {
  $("#slides").superslides();

  const typed = new Typed(".typed", {
    strings: ["Associate Software Developer"],
    typeSpeed: 76,
    loop: true,
    startDelay: 1000,
    showCursor: false
  });

  $("[data-fancybox]").fancybox;

  $(".items").isotope({
    filter: "*",
    animationOptions: { duration: 1500, easing: "linear", queue: false }
  });

  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    const body = $("body");
    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
