$(document).ready(function () {
    $.ajax({
      url: "http://localhost/final_aw/data9.php",
      method: "GET",
      success: function (data2) {
        console.log(data2);
        var Name = [];
        var jumlah = [];
  
        for (var i in data2) {
          Name.push(data2[i].Name);
          jumlah.push(data2[i].jumlah);
        }
  
        var ctx = document.getElementById("purchasingChart");
  
  
        var myBarChart = new Chart(ctx, {
          type: "bar",
          data: {
            labels: Name,
            datasets: [
              {
                label: "jumlah",
                data: jumlah,
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

  $(document).ready(function () {
    $.ajax({
      url: "http://localhost/final_aw/data11.php",
      method: "GET",
      success: function (data2) {
        console.log(data2);
        var tahun = [];
        var amount = [];
  
        for (var i in data2) {
          tahun.push(data2[i].tahun);
          amount.push(data2[i].amount);
        }
  
        var ctx = document.getElementById("linetotalChart");
  
  
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

 