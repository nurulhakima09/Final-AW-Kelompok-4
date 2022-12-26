$(document).ready(function () {
    $.ajax({
      url: "http://localhost/final_aw/data6.php",
      method: "GET",
      success: function (data2) {
        console.log(data2);
        var name = [];
        var total = [];
  
        for (var i in data2) {
          name.push(data2[i].name);
          total.push(data2[i].total);
        }
  
        var ctx = document.getElementById("kategoriChart");
  
  
        var myBarChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: name,
            datasets: [
              {
                label: "total",
                data: total,
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
  