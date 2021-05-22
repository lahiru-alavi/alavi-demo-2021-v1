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

// chart start
var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line", // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: ["", "May 16", "May 17", "May 18", "May 19", "May 20", "May 21"],
    // Information about the dataset
    datasets: [
      {
        label: "Website",
        fill: false,
        borderColor: "rgba(255, 84, 0, 1)",
        data: [3158798, 4309033, 4578236, 4283144, 4306006, 4396536, 4729692],
      },
      {
        label: "Facebook",
        fill: false,
        borderColor: "rgba(26, 76, 251, 1)",
        data: [1730237, 2295673, 2289342, 1947076, 2063682, 2101925, 2231138],
      },
      {
        label: "Google",
        fill: false,
        borderColor: "rgba(5, 212, 132, 1)",
        data: [1672810, 2007076, 1796407, 1921905, 1664475, 1438009, 1188911],
      },
    ],
  },

  // Configuration options
  options: {
    responsive: true,
    maintainAspectRatio: false,

    legend: {
      display: false,
      position: "bottom",
    },
    title: {
      display: false,
      text: "Precipitation in Toronto",
    },
    scales: {
      yAxes: [
        {
          display: true,
          scaleLabel: {
            display: false,
            labelString: "aaa",
          },
          ticks: {
            min: 0,
            max: 5000000,
            stepSize: 500000,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: false,
            labelString: "15 May, 2021 - 21 May, 2021 (Daily)",
          },
        },
      ],
    },
  },
});
// chart end
