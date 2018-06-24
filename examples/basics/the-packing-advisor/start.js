const weatherService = require("weather-js");
//https://www.npmjs.com/package/weather-js

function checkWeather(city, country) {
  console.log("Starting to check for weather");
  //use weather-js here
}

//helper function that takes weather-js result + a temperature and returns whether any day is colder than the allowed min
function doesResultIncludedColdDay(result , minTemperature){
  let coldDayFound = false;
    result.forEach(location => {
      location.forecast.forEach(specificDay => {
        if (specificDay.low < minTemperature) {
          coldDayFound = true;
        }
      });
    });

    return coldDayFound;
}

checkWeather("Haifa" , "Israel")