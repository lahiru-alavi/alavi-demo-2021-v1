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
  value: 94,
  preset: "line",
});

var bar2 = new ldBar("#w-spe", {
  value: 70,
  preset: "line",
});

var bar3 = new ldBar("#f-rev", {
  value: 77,
  preset: "line",
});

var bar4 = new ldBar("#f-spe", {
  value: 75,
  preset: "line",
});

var bar5 = new ldBar("#f-roa", {
  value: 100,
  preset: "line",
});

var bar6 = new ldBar("#g-rev", {
  value: 66,
  preset: "line",
});

var bar7 = new ldBar("#g-spe", {
  value: 61,
  preset: "line",
});

var bar8 = new ldBar("#g-roa", {
  value: 100,
  preset: "line",
});

var bar9 = new ldBar("#f-con-rev", {
  value: 77,
  preset: "line",
});

var bar10 = new ldBar("#f-con-spe", {
  value: 75,
  preset: "line",
});

var bar11 = new ldBar("#f-con-roa", {
  value: 100,
  preset: "line",
});
var bar12 = new ldBar("#f-ncon-spe", {
  value: 78,
  preset: "line",
});
var bar13 = new ldBar("#mk-top-rev", {
  value: 84,
  preset: "line",
});
var bar14 = new ldBar("#mk-top-spe", {
  value: 90,
  preset: "line",
});
var bar15 = new ldBar("#mk-top-roa", {
  value: 93,
  preset: "line",
});
var bar16 = new ldBar("#mk-mid-rev", {
  value: 71,
  preset: "line",
});
var bar17 = new ldBar("#mk-mid-spe", {
  value: 70,
  preset: "line",
});
var bar18 = new ldBar("#mk-mid-roa", {
  value: 100,
  preset: "line",
});
var bar19 = new ldBar("#mk-btm-rev", {
  value: 77,
  preset: "line",
});
var bar20 = new ldBar("#mk-btm-spe", {
  value: 76,
  preset: "line",
});
var bar21 = new ldBar("#mk-btm-roa", {
  value: 100,
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
    labels: ["1 Jun", "2 Jun", "3 Jun", "4 Jun", "5 Jun", "6 Jun", "7 Jun", "8 Jun", "9 Jun", "10 Jun", "11 Jun", "12 Jun", "13 Jun", "14 Jun", "15 Jun", "16 Jun", "17 Jun", "18 Jun", "19 Jun", "20 Jun"],
    // Information about the dataset
    datasets: [
      {
        label: "Website",
        fill: false,
        borderColor: "rgba(255, 85, 51, 1)",
        data: [150200, 120800, 122000, 127080, 140000, 110000, 132000, 140000, 110000, 100000, 120700, 135000, 145000, 150800, 157000, 153000, 153000, 151800, 154300, 128300],
      },
      {
        label: "Facebook",
        fill: false,
        borderColor: "rgba(108, 139, 250, 1)",
        data: [60000, 64000, 50000, 55000, 35000, 70000, 82000, 64000, 58600, 62800, 65200, 61000, 62800, 64000, 63200, 65000, 66000, 62000,64000, 50000],
      },
      {
        label: "Google",
        fill: false,
        borderColor: "rgba(5, 212, 132, 1)",
        data: [25000, 30000, 28000, 45000, 40000, 32000, 35000, 36000, 32000, 34000, 32800, 34500, 32000, 35000, 33500, 24500, 22000, 31000, 32000, 20000], 
      },
    ],
  },

  // Configuration options
  options: {
    responsive: true,
    maintainAspectRatio: false,

    elements: {
      point: {
        radius: 0,
      },
    },

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
            max: 150000,
            stepSize: 5000,
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
    labels: ["1 Jun", "2 Jun", "3 Jun", "4 Jun", "5 Jun", "6 Jun", "7 Jun", "8 Jun", "9 Jun", "10 Jun", "11 Jun", "12 Jun", "13 Jun", "14 Jun", "15 Jun", "16 Jun", "17 Jun", "18 Jun", "19 Jun", "20 Jun"],
    // Information about the dataset
    datasets: [
      {
        label: "Conversion",
        fill: false,
        borderColor: "rgba(108, 139, 250, 1)",
        data: [54000, 50000, 42400, 56000, 56000, 56000, 54000, 42000, 44000, 45600, 44000, 47000, 50000, 54000, 53500, 52000, 53800, 54000, 56000, 54000, ],
      },
      {
        label: "Non Conversion",
        fill: false,
        borderColor: "rgba(26, 76, 251, 0.2)",
        data: [4000, 4000, 4200, 4800, 5000, 2500, 3600, 3300, 3200, 4000, 5000, 3000, 2200, 2000, 2400, 4400, 5400, 5000, 4800, 5000, ],
      },
    ],
  },

  // Configuration options
  options: {
    responsive: true,
    maintainAspectRatio: false,

    elements: {
      point: {
        radius: 0,
      },
    },

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
            max: 60000,
            stepSize: 5000,
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
var cha3 = document.getElementById("myChart3").getContext("2d");
var chart = new Chart(cha3, {
  // The type of chart we want to create
  type: "line", // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: ["1 Jun", "2 Jun", "3 Jun", "4 Jun", "5 Jun", "6 Jun", "7 Jun", "8 Jun", "9 Jun", "10 Jun", "11 Jun", "12 Jun", "13 Jun", "14 Jun", "15 Jun", "16 Jun", "17 Jun", "18 Jun", "19 Jun", "20 Jun"],
    // Information about the dataset
    datasets: [
      {
        label: "Conversion",
        fill: false,
        borderColor: "rgba(197, 17, 98, 0.2)",
        data: [1730237, 2295673, 2289342, 1947076, 2063682, 2101925, 2231138, 1730237, 2295673, 2289342, 1947076, 2063682, 2101925, 2231138, 2231138, 2231138, 2231138, 2231138, 2231138, 2231138],
      },
      {
        label: "Non Conversion",
        fill: false,
        borderColor: "rgba(197, 17, 98, 0.5)",
        data: [1672810, 2007076, 1796407, 1921905, 1664475, 1438009, 1188911, 1672810, 2007076, 1796407, 1921905, 1664475, 1438009, 1188911, 1672810, 2007076, 1796407, 1921905, 1664475, 1438009],
      },
		{
        label: "Conversion3",
        fill: false,
        borderColor: "rgba(197, 17, 98, 0.2)",
        data: [730237, 295673, 289342, 947076, 063682, 101925, 231138, 730237, 295673, 289342, 947076, 063682, 101925, 231138, 231138, 231138, 231138, 231138, 231138, 231138],
      },
		{
        label: "Conversion4",
        fill: false,
        borderColor: "rgba(197, 17, 98, 0.2)",
        data: [173023, 229567, 228934, 194707, 206368, 210192, 223113, 173023, 229567, 228932, 194776, 206382, 211925, 231138, 221138, 231138, 223138, 223138, 221138, 221138],
      },
    ],
  },

  // Configuration options
  options: {
    responsive: true,
    maintainAspectRatio: false,

    elements: {
      point: {
        radius: 0,
      },
    },

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
var cha4 = document.getElementById("myChart4").getContext("2d");
var chart = new Chart(cha4, {
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

    elements: {
      point: {
        radius: 0,
      },
    },

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
