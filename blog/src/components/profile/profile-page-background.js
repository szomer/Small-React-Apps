import $ from "jquery";

$(window).scroll(function () {
  var ypos = $(window).scrollTop(); //pixels the site is scrolled down
  var visible = $(window).height(); //visible pixels
  const img_height = 2700; //replace with height of your image
  var max_scroll = img_height - visible; //number of pixels of the image not visible at bottom
  //change position of background-image as long as there is something not visible at the bottom
  if (max_scroll > ypos) {
    $("body").css("background-position", "center -" + ypos + "px");
  } else {
    $("body").css("background-position", "center -" + max_scroll + "px");
  }
});
