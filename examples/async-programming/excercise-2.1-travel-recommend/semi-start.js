// 👿 Few words from your product manager, we want to get a travelling advice:
//Get input - traveling city, country & dateOutput
//Output - whether it’s recommended to travel to the given city on the given date
//Logic – If the given date falls on a vacation, print ‘No. The streets will be crowded!’ 
//If the temperature might drop below 15 Celsius degree, print ‘Oh no, might be too cold’.
//Other wise print ‘Sure, go for it’

//💰 Few words from your CFO, we will reward you (Bonus!) if you will:
//1. Get dates range, vacation start and end date and check for the entire period
//2. Write a test against this code

// 🧚‍ Few words from your architect:
//1. Aim for async/await and flat code
//2. Separate into at least two files: index.js & core logic

const util = require("util");
const Holidays = require("date-holidays");
const weather = require("weather-js");
const weatherPromisified = util.promisify(weather.find);

//a method to check holidays
const checkHolidays = (place) => {
  //work with the library:
  //https://www.npmjs.com/package/date-holidays
}

//a method to check the wether and returns a bollean
//this one is already implemented for you
const isWeatherWarmEnough = async (place, numberOfDays) => {
  let weatherWarmEnough = true;
  const weatherCheckResult = await weatherPromisified({
    search: `${place.city}, ${place.country}`,
    degreeType: "C"
  });

  weatherCheckResult.forEach((weatherResult, index) => {
    if (weatherResult.forecast && Array.isArray(weatherResult.forecast)) {
      weatherResult.forecast.forEach(specificDay => {
        if (specificDay.high < 20) {
          weatherWarmEnough = false;
        }
      });
    }
  });

  return weatherWarmEnough;
}

const placesToCheck = {
  country: "France",
  city: "Paris"
};