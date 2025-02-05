const ctx = document.getElementById("plot").getContext("2d");

let myChart;

function getData(dates, temp) {
  if (myChart) {
    myChart.destroy();
  }

  myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [
        {
          label: "Temperature in °C",
          data: temp,
          backgroundColor: "grey",
          borderColor: "black",
          borderWidth: 1,
        },
      ],
    },
  });
}

function fetching() {
  let city = document.getElementById("city").value;
  if (city.trim() === "") {
    alert("Enter a valid city");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=89d950a695c26eaf185db4c464e481e6&units=metric`;

  setTimeout(() => {
    alert("Data fetched successfully!");
  }, 10);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let dates = [],
        temp = [];

      for (let i = 0; i < data.list.length; i += 8) {
        let row = data.list[i];
        dates.push(row.dt_txt.split(" ")[0]);
        temp.push(row.main.temp);
      }

      getData(dates, temp);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      alert("Failed to fetch weather data. Please try again.");
    });
}