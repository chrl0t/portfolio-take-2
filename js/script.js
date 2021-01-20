$(document).ready(function () {
  $("#slides").superslides();

  const typed = new Typed(".typed", {
    strings: [
      "Junior Software Developer",
      "Logical Thinker",
      "Creative Coder",
      "Passionate Learner"
    ],
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
});
