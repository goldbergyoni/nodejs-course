const util = require("util");
const Holidays = require("date-holidays");
const weather = require("weather-js");

class travellingRecommender {

    //returns promise
    checkHolidays(place) {
        return new Promise((resolve, reject) => {
            const holidays = new Holidays(place.country);

            resolve(holidays.isHoliday(new Date()));
        });

    }

    //returns callback
    isWeatherWarmEnough(place, callback) {
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

    //Should return a promise
    isLocationRecommended(place) {
        console.log(`Starting to check now the location ${util.inspect(place)}`);

        //Use the methods isWeatherWarmEnough & checkHolidays to check the travelling recommendations
        //Use only promises, return a promise

    }

}

const placeToCheck = {
    country: "Israel",
    city: "Tel Aviv"
};

//TODO: call the class and invoke the method 'iSLocationRecommended'