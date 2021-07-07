// Page Redirection
document.getElementById("nav-home-tab").onclick = function () {
  location.href = "optimize-all.html#mkr";
};
document.getElementById("nav-top-funnel-tab").onclick = function () {
  location.href = "optimize.html#mkr";
};

// document.getElementById("nav-mid-funnel-tab").onclick = function () {
//   location.href = "optimize-mid-funnel.html#mkr";
// };
// document.getElementById("nav-btm-funnel-tab").onclick = function () {
//   location.href = "optimize-btm-funnel.html#mkr";
// };

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

// chart ads
var cha6 = document.getElementById("dataChartAds").getContext("2d");
var chart = new Chart(cha6, {
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
      // {
      //   label: "Non Conversion",
      //   fill: false,
      //   borderColor: "rgba(73, 171, 255, 1)",
      //   data: [0, 10000, 15000, 18000],
      // },
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

// chart data common
var chaCommon1 = document.getElementById("dataCommon1").getContext("2d");
var chart = new Chart(chaCommon1, {
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

// chart data common
var chaCommon2 = document.getElementById("dataCommon2").getContext("2d");
var chart = new Chart(chaCommon2, {
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

// chart data common
var chaCommon3 = document.getElementById("dataCommon3").getContext("2d");
var chart = new Chart(chaCommon3, {
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

// Table Sort start
function sortTable(tableClass, n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementsByClassName(tableClass)[0];
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 2; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
// Table Sort end

// expand table sorting start

function sortTableNormal(tableClass, n) {
  var table,
    rows,
    switching,
    i,
    x,
    y,
    shouldSwitch,
    dir,
    switchcount = 0;
  table = document.getElementsByClassName(tableClass)[0];
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc";
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch = true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount++;
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
// expand table sorting end

// $("#nav-adsets-tab").click(function () {
//   alert("The paragraph was clicked.");
// });

$(document).ready(function () {
  // camapign functions
  $("#aiCampaign").delegate("tr.ClickRow td", "click", function () {
    $("tr.ClickRow").removeClass("highlight-row");
    $(this).parent().addClass("highlight-row");
    $("tr.ClickRow").addClass("highlight-btm");
    $(this).parent().removeClass("highlight-btm");
    $("#data-load").addClass("d-none");
  });
  $("#aiCampaign").delegate("tr.SelectRow1", "click", function () {
    $(
      "div.ai-data-results__results:not(#data-result-campaign_data1)"
    ).removeClass("d-block");
    $("div.ai-data-results__results:not(#data-result-campaign_data1)").addClass(
      "d-none"
    );
    $("#data-result-campaign_data1").addClass("d-block");
  });

  $("#aiCampaign").delegate("tr.SelectRow2", "click", function () {
    $(
      "div.ai-data-results__results:not(#data-result-campaign_data2)"
    ).removeClass("d-block");
    $("div.ai-data-results__results:not(#data-result-campaign_data2)").addClass(
      "d-none"
    );
    $("#data-result-campaign_data2").addClass("d-block");
  });

  $("#aiCampaign").delegate("tr.SelectRow3", "click", function () {
    $(
      "div.ai-data-results__results:not(#data-result-campaign_data3)"
    ).removeClass("d-block");
    $("div.ai-data-results__results:not(#data-result-campaign_data3)").addClass(
      "d-none"
    );
    $("#data-result-campaign_data3").addClass("d-block");
  });

  $("#aiCampaign").delegate("tr.SelectRow4", "click", function () {
    $(
      "div.ai-data-results__results:not(#data-result-campaign_data4)"
    ).removeClass("d-block");
    $("div.ai-data-results__results:not(#data-result-campaign_data4)").addClass(
      "d-none"
    );
    $("#data-result-campaign_data4").addClass("d-block");
  });

  // Adset functions
  $("#aiAdset").delegate("tr.ClickRow td", "click", function () {
    $(this).parent().addClass("highlight-row");
    $("tr.ClickRow").addClass("highlight-btm");
    $("#aiCampaign tr.SelectRow1").removeClass("highlight-btm");
    $("#aiCampaign tr.SelectRow1").addClass("highlight-row");
    $(this).parent().removeClass("highlight-btm");
    $("#data-result-adset").addClass("d-block");
  });

  // Ads functions
  $("#aiAds").delegate("tr.ClickRow td", "click", function () {
    $(this).parent().addClass("highlight-row");
    $("tr.ClickRow").addClass("highlight-btm");
    $("#aiCampaign tr.SelectRow1").removeClass("highlight-btm");
    $("#aiCampaign tr.SelectRow1").addClass("highlight-row");
    $("#aiAdset tr.SelectRow1").removeClass("highlight-btm");
    $("#aiAdset tr.SelectRow1").addClass("highlight-row");
    $(this).parent().removeClass("highlight-btm");
    $("#data-result-ad").addClass("d-block");
  });
});

$("#adSetBtn").click(function () {
  $("#nav-adsets-tab").removeClass("disabled");
  $(".tab-inside > .active").next("button").trigger("click");
  $("#adset-txt").addClass("visible");
  $("#adset-txt").removeClass("invisible");
});

$("#adsBtn").click(function () {
  $("#nav-ads-tab").removeClass("disabled");
  $(".tab-inside > .active").next("button").trigger("click");
  $("#ad-txt").addClass("visible");
  $("#ad-txt").removeClass("invisible");
});

// deactivate selections in dropdown
$(document).ready(function () {
  $(".deactiveList option:not(:selected)").attr("disabled", "disabled");
});
