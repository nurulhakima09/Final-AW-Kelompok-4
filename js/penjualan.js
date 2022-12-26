$(document).ready(function () {
  $.ajax({
    url: "http://localhost/final_aw/data8.php",
    method: "GET",
    success: function (data2) {
      console.log(data2);
      var Name = [];
      var jumlah = [];

      for (var i in data2) {
        Name.push(data2[i].Name);
        jumlah.push(data2[i].jumlah);
      }

      console.log(jumlah);
      var ctx = document.getElementById("penjualanChart");

      var myBarChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: Name,
          datasets: [
            {
              label: "Total Penjualan",
              backgroundColor: "#4e73df",
              hoverBackgroundColor: "#2e59d9",
              borderColor: "#4e73df",
              data: jumlah,
            },
          ],
        },
        options: {
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 20,
              right: 35,
              top: 35,
              bottom: 0,
            },
          },
          scales: {
            xAxes: [
              {
                time: {},
                gridLines: {
                  display: false,
                  drawBorder: false,
                },
                ticks: {
                  maxTicksLimit: 10,
                },
                maxBarThickness: 25,
              },
            ],
            yAxes: [
              {
                ticks: {
                  min: 0,
                  maxTicksLimit: 6,
                  padding: 5,
                },
                gridLines: {
                  color: "rgb(234, 236, 244)",
                  zeroLineColor: "rgb(234, 236, 244)",
                  drawBorder: false,
                  borderDash: [2],
                  zeroLineBorderDash: [2],
                },
              },
            ],
          },
          legend: {
            display: false,
          },
          tooltips: {
            titleMarginBottom: 10,
            titleFontColor: "#6e707e",
            titleFontSize: 15,
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: "#dddfeb",
            borderWidth: 5,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 15,
          },
        },
      });
    },
    error: function (data2) {
      console.log(data2);
    },
  });
});

$(document).ready(function () {
  $.ajax({
    url: "http://localhost/final_aw/data10.php",
    method: "GET",
    success: function (data2) {
      console.log(data2);
      var tahun = [];
      var amount = [];

      for (var i in data2) {
        tahun.push(data2[i].tahun);
        amount.push(data2[i].amount);
      }

      var ctx = document.getElementById("subtotalChart");


      var myBarChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: tahun,
          datasets: [
            {
              label: "amount",
              data: amount,
              backgroundColor: ["#29B0D0", "#2A516E", "#57abc0", "#40e0d0", "#65f0de"],
            },
          ],
        },
        options: {
          responsive: true,
        },
      });
    },
    error: function (data2) {
      console.log(data2);
    },
  });
});
