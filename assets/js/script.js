var search = document.querySelector("button");
var input = document.querySelector("input");
var cities = {
  history: []
};
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
var iconMain = document.querySelector(".iconMain");
var searchSection = document.querySelector("#search");



function makeUrl(){
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid='+ apikey +'&units=imperial';
  return requestUrl
} 

function makeUrlhistory(city){
  var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid='+ apikey +'&units=imperial';
  return requestUrl
} 

search.addEventListener("click",getApi);


function getApi() {
    fetch(makeUrl())
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setData(data);
        saveHistory();
        displayLocalData();

        currentCity.setAttribute("class", "inline");
        forecast.setAttribute("class", "inline");
      });
  }

  function getLastCity(city){
    fetch(makeUrlhistory(city))
    .then(function (response) {
      return response.json();
    })
    .then(function (city) {
      setData(city);
      saveHistory();+
      displayLocalData();

      currentCity.setAttribute("class", "inline");
      forecast.setAttribute("class", "inline");
    });   
  }

function displayLocalData(){
  var data = JSON.parse(localStorage.getItem("history"));
  var divHist = document.createElement("div");
  divHist.setAttribute("style", "width:50%;  color:white; background: #666666; margin: 5rem; padding: 25px;");
  var buttonHist = document.createElement("button");
  divHist.appendChild(buttonHist);
  searchSection.appendChild(divHist);
  buttonHist.setAttribute("style", "background: red; width: 8rem; height:1rem; padding: 25px; margin-left: 55px;");
  buttonHist.setAttribute("class", "historyBtnn");
  buttonHist.addEventListener("click", function(event){
    event.preventDefault();
    getLastCity(event.target.textContent);
  });


  if(data != null){
    for (i = 0; i < data.history.length; i++){
      buttonHist.textContent = data.history[i];
    }
  }
}






function saveHistory(){
var storeData = cities.history.push(input.value);
localStorage.setItem("history",JSON.stringify(cities));

}

function setData(data){
var date = data.city.name + '  (' + data.list[0].dt_txt+')';
var datesp = date.split(" ");
cityT.textContent = data.city.name + "  (" +datesp[2].substr(1,10) + ")";
iconMain.setAttribute("src", "https://openweathermap.org/img/wn/"+ data.list[0].weather[0].icon+"@2x.png");
Fone.children[1].setAttribute("class", "mx-6");
iconMain.setAttribute("class", "w-12 h-12");
temp.textContent = 'Temp: ' + data.list[0].main.temp + 'F';
wind.textContent = 'Wind: '+ data.list[0].wind.gust + 'MPH'; 
hum.textContent = 'Humidity: '+ data.list[0].main.humidity + '%';

var dateOne = data.city.name + '  (' + data.list[6].dt_txt+')';
var dateOnesp = dateOne.split(" ");
Fone.children[0].textContent = "  (" +dateOnesp[2].substr(1,10) + ")";
Fone.children[1].setAttribute("src", "https://openweathermap.org/img/wn/"+ data.list[6].weather[0].icon+"@2x.png");
Fone.children[1].setAttribute("class", "w-12 h-12");
Fone.children[2].textContent = data.list[6].main.temp + 'F';
Fone.children[3].textContent = data.list[6].wind.gust + 'MPH'
Fone.children[4].textContent = data.list[6].main.humidity + '%';

var dateTwo = data.city.name + '  (' + data.list[14].dt_txt+')';
var dateTwosp = dateTwo.split(" ");
Ftwo.children[0].textContent = "  (" +dateTwosp[2].substr(1,10) + ")";
Ftwo.children[1].setAttribute("src", "https://openweathermap.org/img/wn/"+ data.list[14].weather[0].icon+"@2x.png");
Ftwo.children[1].setAttribute("class", "w-12 h-12");
Ftwo.children[2].textContent = data.list[14].main.temp + 'F';
Ftwo.children[3].textContent = data.list[14].wind.gust + 'MPH'
Ftwo.children[4].textContent = data.list[14].main.humidity + '%';

var dateThree = data.city.name + '  (' + data.list[22].dt_txt+')';
var dateThreesp = dateThree.split(" ");
Fthree.children[0].textContent = "  (" +dateThreesp[2].substr(1,10) + ")";
Fthree.children[1].setAttribute("src", "https://openweathermap.org/img/wn/"+ data.list[22].weather[0].icon+"@2x.png");
Fthree.children[1].setAttribute("class", "w-12 h-12");
Fthree.children[2].textContent = data.list[22].main.temp + 'F';
Fthree.children[3].textContent = data.list[22].wind.gust + 'MPH'
Fthree.children[4].textContent = data.list[22].main.humidity + '%';


var dateFour = data.city.name + '  (' + data.list[30].dt_txt+')';
var dateFoursp = dateFour.split(" ");
Ffour.children[0].textContent =  "  (" +dateFoursp[2].substr(1,10) + ")";
Ffour.children[1].setAttribute("src", "https://openweathermap.org/img/wn/"+ data.list[30].weather[0].icon+"@2x.png");
Ffour.children[1].setAttribute("class", "w-12 h-12");
Ffour.children[2].textContent = data.list[30].main.temp + 'F';
Ffour.children[3].textContent = data.list[30].wind.gust + 'MPH'
Ffour.children[4].textContent = data.list[30].main.humidity + '%';


var dateFive = data.city.name + '  (' + data.list[38].dt_txt+')';
var dateFivesp = dateFive.split(" ");
Ffive.children[0].textContent =  "  (" +dateFivesp[2].substr(1,10) + ")";
Ffive.children[1].setAttribute("src", "https://openweathermap.org/img/wn/"+ data.list[38].weather[0].icon+"@2x.png");
Ffive.children[1].setAttribute("class", "w-12 h-12");
Ffive.children[2].textContent = data.list[38].main.temp + 'F';
Ffive.children[3].textContent = data.list[38].wind.gust + 'MPH'
Ffive.children[4].textContent = data.list[38].main.humidity + '%';


}