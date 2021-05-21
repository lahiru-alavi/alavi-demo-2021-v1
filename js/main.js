// back to top
$(function () {
  var offset = 500;
  var duration = 500;
  $(window).scroll(function () {
    if ($(this).scrollTop() > offset) {
      $(".back-to-top").fadeIn(400);
    } else {
      $(".back-to-top").fadeOut(400);
    }
  });

  $(".back-to-top").on("click", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      600
    );
    return false;
  });
});
// back to top

// Progress Bar
var bar1 = new ldBar("#w-rev", {
  value: 90,
  preset: "line",
});

var bar2 = new ldBar("#w-spe", {
  value: 90,
  preset: "line",
});

var bar3 = new ldBar("#f-rev", {
  value: 10,
  preset: "line",
});

var bar4 = new ldBar("#f-spe", {
  value: 10,
  preset: "line",
});

var bar5 = new ldBar("#f-roa", {
  value: 10,
  preset: "line",
});

var bar6 = new ldBar("#g-rev", {
  value: 10,
  preset: "line",
});

var bar7 = new ldBar("#g-spe", {
  value: 10,
  preset: "line",
});

var bar8 = new ldBar("#g-roa", {
  value: 10,
  preset: "line",
});
// Progress Bar
