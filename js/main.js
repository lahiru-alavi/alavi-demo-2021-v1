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

var bar9 = new ldBar("#f-con-rev", {
  value: 10,
  preset: "line",
});

var bar10 = new ldBar("#f-con-spe", {
  value: 10,
  preset: "line",
});

var bar11 = new ldBar("#f-con-roa", {
  value: 10,
  preset: "line",
});
var bar12 = new ldBar("#f-ncon-spe", {
  value: 10,
  preset: "line",
});
var bar13 = new ldBar("#mk-top-rev", {
  value: 10,
  preset: "line",
});
var bar14 = new ldBar("#mk-top-spe", {
  value: 10,
  preset: "line",
});
var bar15 = new ldBar("#mk-top-roa", {
  value: 10,
  preset: "line",
});
var bar16 = new ldBar("#mk-mid-rev", {
  value: 10,
  preset: "line",
});
var bar17 = new ldBar("#mk-mid-spe", {
  value: 10,
  preset: "line",
});
var bar18 = new ldBar("#mk-mid-roa", {
  value: 10,
  preset: "line",
});
var bar19 = new ldBar("#mk-btm-rev", {
  value: 10,
  preset: "line",
});
var bar20 = new ldBar("#mk-btm-spe", {
  value: 10,
  preset: "line",
});
var bar21 = new ldBar("#mk-btm-roa", {
  value: 10,
  preset: "line",
});
var bar22 = new ldBar("#al-spe", {
  value: 10,
  preset: "line",
});

// Progress Bar

// chart start
// chart 1
var cha1 = document.getElementById("myChart").getContext("2d");
var chart = new Chart(cha1, {
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
        borderColor: "rgba(255, 85, 51, 1)",
        data: [3158798, 4309033, 4578236, 4283144, 4306006, 4396536, 4729692],
      },
      {
        label: "Facebook",
        fill: false,
        borderColor: "rgba(108, 139, 250, 1)",
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

// chart 2
var cha2 = document.getElementById("myChart2").getContext("2d");
var chart = new Chart(cha2, {
  // The type of chart we want to create
  type: "line", // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: ["", "May 16", "May 17", "May 18", "May 19", "May 20", "May 21"],
    // Information about the dataset
    datasets: [
      {
        label: "Conversion",
        fill: false,
        borderColor: "rgba(108, 139, 250, 1)",
        data: [1730237, 2295673, 2289342, 1947076, 2063682, 2101925, 2231138],
      },
      {
        label: "Non Conversion",
        fill: false,
        borderColor: "rgba(26, 76, 251, 0.2)",
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

// chart 3
var cha2 = document.getElementById("myChart3").getContext("2d");
var chart = new Chart(cha2, {
  // The type of chart we want to create
  type: "line", // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: ["", "May 16", "May 17", "May 18", "May 19", "May 20", "May 21"],
    // Information about the dataset
    datasets: [
      {
        label: "Conversion",
        fill: false,
        borderColor: "rgba(197, 17, 98, 0.2)",
        data: [1730237, 2295673, 2289342, 1947076, 2063682, 2101925, 2231138],
      },
      {
        label: "Non Conversion",
        fill: false,
        borderColor: "rgba(197, 17, 98, 0.5)",
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

// chart 4
var cha2 = document.getElementById("myChart4").getContext("2d");
var chart = new Chart(cha2, {
  // The type of chart we want to create
  type: "line", // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: ["", "May 16", "May 17", "May 18", "May 19", "May 20", "May 21"],
    // Information about the dataset
    datasets: [
      {
        label: "Conversion",
        fill: false,
        borderColor: "rgba(176, 0, 255, 0.2)",
        data: [1730237, 2295673, 2289342, 1947076, 2063682, 2101925, 2231138],
      },
      {
        label: "Non Conversion",
        fill: false,
        borderColor: "rgba(176, 0, 255, 0.5)",
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
