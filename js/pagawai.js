$(document).ready(function () {
  $.ajax({
    url: "http://localhost/final_aw/data4.php",
    method: "GET",
    success: function (data2) {
      console.log(data2);
      var jk = [];
      var persen = [];

      for (var i in data2) {
        jk.push(data2[i].jk);
        persen.push(data2[i].persen);
      }

      var ctx = document.getElementById("genderChart");


      var myBarChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: jk,
          datasets: [
            {
              label: "total",
              data: persen,
              backgroundColor: ["#29B0D0", "#2A516E"],
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

$(document).ready(function () {
  $.ajax({
    url: "http://localhost/final_aw/data5.php",
    method: "GET",
    success: function (data2) {
      console.log(data2);
      var jabatan = [];
      var persen = [];

      for (var i in data2) {
        jabatan.push(data2[i].jabatan);
        persen.push(data2[i].persen);
      }

      var ctx = document.getElementById("TitleChart");


      var myBarChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: jabatan,
          datasets: [
            {
              label: "total",
              data: persen,
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

