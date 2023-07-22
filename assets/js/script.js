var search = document.querySelector("button");
var input = document.querySelector("input");
var cities = ['Atlanta', "Denver", 'Seatle', 'San Francisco', 'Orlando', 'New York', 'Chicago', 'Austin'];
var apikey = '82f7564608e33dc69c2bf305df503fc7';
var requestUrl = "";
var cityT = document.querySelector(".currentCity");
var temp = document.querySelector(".temp");
var wind = document.querySelector(".wind");
var hum = document.querySelector(".hum");
var Fone = document.querySelector(".forecastOne");
var Ftwo = document.querySelector(".forecasTwo");
var Fthree = document.querySelector(".forecastThree");
var Ffour = document.querySelector(".forecastFour");
var Ffive = document.querySelector(".forecastFive");
var currentCity = document.querySelector("#Cweather");
var forecast = document.querySelector("#forecast");

function makeUrl(){
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid='+ apikey +'&units=imperial';
  return requestUrl
} 

search.addEventListener("click",getApi);


function getApi() {
    fetch(makeUrl())
      .then(function (response) {
        //console.log(response);
        return response.json();
      })
      .then(function (data) {
        //console.log(data)
        //console.log(data.list[0].main.temp);
        setData(data);
        currentCity.setAttribute("class", "inline");
        forecast.setAttribute("class", "inline");
      });
  }

function setData(data){

cityT.textContent = data.city.name + '  (' + data.list[0].dt_txt+')';
temp.textContent = 'Temp: ' + data.list[0].main.temp + 'F';
wind.textContent = 'Wind: '+ data.list[0].wind.gust + 'MPH'; 
hum.textContent = 'Humidity: '+ data.list[0].main.humidity + '%';

Fone.children[0].textContent = data.list[6].dt_txt;
Fone.children[2].textContent = data.list[6].main.temp + 'F';
Fone.children[3].textContent = data.list[6].wind.gust + 'MPH'
Fone.children[4].textContent = data.list[6].main.humidity + '%';


Ftwo.children[0].textContent = data.list[14].dt_txt;
Ftwo.children[2].textContent = data.list[14].main.temp + 'F';
Ftwo.children[3].textContent = data.list[14].wind.gust + 'MPH'
Ftwo.children[4].textContent = data.list[14].main.humidity + '%';

Fthree.children[0].textContent = data.list[22].dt_txt;
Fthree.children[2].textContent = data.list[22].main.temp + 'F';
Fthree.children[3].textContent = data.list[22].wind.gust + 'MPH'
Fthree.children[4].textContent = data.list[22].main.humidity + '%';


Ffour.children[0].textContent = data.list[30].dt_txt;
Ffour.children[2].textContent = data.list[30].main.temp + 'F';
Ffour.children[3].textContent = data.list[30].wind.gust + 'MPH'
Ffour.children[4].textContent = data.list[30].main.humidity + '%';

Ffive.children[0].textContent = data.list[38].dt_txt;
Ffive.children[2].textContent = data.list[38].main.temp + 'F';
Ffive.children[3].textContent = data.list[38].wind.gust + 'MPH'
Ffive.children[4].textContent = data.list[38].main.humidity + '%';


}