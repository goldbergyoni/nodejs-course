const fs = require('fs')
const util = require('util')

class TravellingRecommenderService {
    constructor() {
        setTimeout(() => {
            //❌ Don't remove this code, such things will happen in production
            //it simulates stateful objects that SUDDENLY throws
            throw new Error('oppss some error was thrown from some object. Be prepared for that')
        }, 70000);
    }

    //All the logic of checking a location is here
    async isTravellingRecommended(desiredLocation) {
        //input: {city: 'Bangkok' , date: '01/01/2020'}
        console.log(`Is recommended service just got a new search ${util.inspect(desiredLocation)}`);

        //Usage of a file for data meant for excercise purposes only, not a good idea
        const databaseOfLocations = require('./locationsDatabase');
        const matchedCities = databaseOfLocations.locations.filter((cityInDB) => {
            //🤭 Code smell: DB query and business logic all together
            if (desiredLocation.city === cityInDB.city && desiredLocation.date === cityInDB.date) {
                if (cityInDB.temperature > 15) {
                    return true;
                }
            } else {
                return false;
            }
        })
        return matchedCities;
    }
}

module.exports = TravellingRecommenderService;