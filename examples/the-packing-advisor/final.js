const weather = require("weather-js");

checkWeather().then((result) =>{
  console.log(result);
});


function checkWeather() {
  return new Promise((resolve, reject) =>{
    weather.find({ search: "Israel", degreeType: "C" }, (err, result) => {
      if(err){
        reject(err);
        return;
      }
      let youNeedCoat = false;
      result.forEach(location => {
        location.forecast.forEach(specificDay => {
          if (specificDay.low < 18) {
            youNeedCoat = true;
          }
        });
        resolve(youNeedCoat);
      });
    });
  })
  
}
