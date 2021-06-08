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
var bar1 = new ldBar("#opt-rev", {
  value: 90,
  preset: "line",
});
var bar2 = new ldBar("#opt-spe", {
  value: 90,
  preset: "line",
});
var bar3 = new ldBar("#opt-roa", {
  value: 90,
  preset: "line",
});
// Progress Bar

// chart start
// chart 1
var cha1 = document.getElementById("optChart1").getContext("2d");
var chart = new Chart(cha1, {
  // The type of chart we want to create
  type: "line", // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: ["", "May 16", "May 17", "May 18", "May 19", "May 20", "May 21"],
    // Information about the dataset
    datasets: [
      {
        label: "Facebook",
        fill: false,
        borderColor: "rgba(26, 76, 251, 1)",
        data: [1730237, 2295673, 2289342, 1947076, 2063682, 2101925, 2231138],
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
          display: false,
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
          display: false,
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
var cha2 = document.getElementById("optChart2").getContext("2d");
var chart = new Chart(cha2, {
  // The type of chart we want to create
  type: "line", // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: ["", "May 16", "May 17", "May 18", "May 19", "May 20", "May 21"],
    // Information about the dataset
    datasets: [
      {
        label: "Facebook",
        fill: false,
        borderColor: "rgba(73, 171, 255, 1)",
        data: [1730237, 2295673, 2289342, 1947076, 2063682, 2101925, 2231138],
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
          display: false,
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
          display: false,
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
var cha3 = document.getElementById("optChart3").getContext("2d");
var chart = new Chart(cha3, {
  // The type of chart we want to create
  type: "line", // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: ["", "May 16", "May 17", "May 18", "May 19", "May 20", "May 21"],
    // Information about the dataset
    datasets: [
      {
        label: "Facebook",
        fill: false,
        borderColor: "rgba(87, 233, 228, 1)",
        data: [1730237, 2295673, 2289342, 1947076, 2063682, 2101925, 2231138],
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
          display: false,
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
          display: false,
          scaleLabel: {
            display: false,
            labelString: "15 May, 2021 - 21 May, 2021 (Daily)",
          },
        },
      ],
    },
  },
});
// chart data
var cha4 = document.getElementById("dataChart").getContext("2d");
var chart = new Chart(cha4, {
  // The type of chart we want to create
  type: "line", // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: ["Jun", "Jun 03", "Jun 05", "Jun 07"],
    // Information about the dataset
    datasets: [
      {
        label: "Conversion",
        fill: false,
        borderColor: "rgba(26, 76, 251, 1)",
        data: [0, 40000, 38000, 50000],
      },
      {
        label: "Non Conversion",
        fill: false,
        borderColor: "rgba(73, 171, 255, 1)",
        data: [0, 10000, 15000, 18000],
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
            max: 60000,
            stepSize: 20000,
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
// chart adset
var cha5 = document.getElementById("dataChartAdset").getContext("2d");
var chart = new Chart(cha5, {
  // The type of chart we want to create
  type: "line", // also try bar or other graph types

  // The data for our dataset
  data: {
    labels: ["Jun", "Jun 03", "Jun 05", "Jun 07"],
    // Information about the dataset
    datasets: [
      {
        label: "Conversion",
        fill: false,
        borderColor: "rgba(26, 76, 251, 1)",
        data: [0, 40000, 38000, 50000],
      },
      {
        label: "Non Conversion",
        fill: false,
        borderColor: "rgba(73, 171, 255, 1)",
        data: [0, 10000, 15000, 18000],
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
            max: 60000,
            stepSize: 20000,
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

// dataTables
$(document).ready(function () {
  $(".nav-tabs button").on("shown.bs.tab", function (e) {
    $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
  });

  $("table.ai-data").DataTable({
    scrollY: "520px",
    scrollCollapse: true,
    paging: false,
    orderFixed: [[0, "desc"]],
  });
});

// $("#nav-adsets-tab").click(function () {
//   alert("The paragraph was clicked.");
// });
