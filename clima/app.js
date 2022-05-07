const getWeather = async () => {
  const url = 'https://api.waqi.info/feed/mexico/?token=4fd91d25f55408d38f12fcdc71a890c7c642592e'
  const res = await fetch(url)

  console.log(res)
  const data = await res.json()

  console.log(data)
  setGraph(data.data)
}

const setGraph = (data) => {
  const labels = Object.keys(data.iaqi)
  const converData = Object.values(data.iaqi).map((item) => item.v)
  console.log(converData)

  const dataConfig = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: converData,
    }]
  };


  const config = {
    type: 'bar',
    data: dataConfig,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  )

}

getWeather()