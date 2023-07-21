var cities = ['Atlanta', "Denver", 'Seatle', 'San Francisco', 'Orlando', 'New York', 'Chicago', 'Austin'];
var apikey = '82f7564608e33dc69c2bf305df503fc7';



var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cities[1] + '&appid='+ apikey;
console.log(requestUrl)


function getApi(requestUrl) {

  
    fetch(requestUrl)
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (data) {
        console.log(data)

      });
  }

getApi(requestUrl);
