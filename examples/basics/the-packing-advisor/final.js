const weatherService = require("weather-js");

function checkWeather(city, country) {
  console.log("Starting to check for weather");
  weatherService.find({
    search: `${city}, ${country}`,
    degreeType: "C"
  }, (err, result) => {
    
    if (err) {
      reject(err);
      return;
    }
    console.log("Weather info has arrived, let's parse it");
    const coldDayFound = doesResultIncludedColdDay(result, 40);

    console.log(coldDayFound ? "Take a coat" : "Great weather, leave your coat");
  })
}

function doesResultIncludedColdDay(result, minTemperature) {
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

checkWeather("Haifa", "Israel")