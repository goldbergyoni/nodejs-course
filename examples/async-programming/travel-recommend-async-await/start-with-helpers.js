const util = require("util");
const Holidays = require("date-holidays");
const weather = require("weather-js");

class travellingRecommender {
  isLocationRecommended(place) {
    console.log(`Starting to check now the location ${util.inspect(place)}`);

    return new Promise((resolve, reject) => {
      const weatherCheckAsPromise = util.promisify(this.isWeatherWarmEnough);
      weatherCheckAsPromise(place, 5).then((result) => {
        resolve(result);
      })
    });
  }

  checkHolidays(place) {
    const holidays = new Holidays(place.country);

    return holidays.isHoliday(new Date());
  }

  isWeatherWarmEnough(place, numberOfDays, callback) {
    weather.find({
      search: `${place.city}, ${place.country}`,
      degreeType: "C"
    }, (err, weatherResult) => {
      let weatherTooCold = false;

      // Check through every location the service got
      weatherResult.forEach((weatherResult, index) => {
        if (weatherResult.forecast && Array.isArray(weatherResult.forecast)) {
          weatherResult.forecast.forEach(specificDay => {
            if (specificDay.high < 20) {
              weatherTooCold = true;
            }
          });
        }
      });
      callback(null, weatherTooCold);
    })
  }
}

const placesToCheck = {
  country: "Canada",
  city: "Toronto"
};

new travellingRecommender()
  .isLocationRecommended(placesToCheck)
  .then(result => console.log(result));