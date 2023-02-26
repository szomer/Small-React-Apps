import $ from "jquery";

$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  $(".header-top img").css({
    transform:
      "translate3d(-50%, -" +
      scroll / 100 +
      "%, 0) scale(" +
      (100 + scroll / 5) / 100 +
      ")",

    "-webkit-filter": "blur(" + scroll / 200 + "px)",
    filter: "blur(" + scroll / 200 + "px)",
  });
});
