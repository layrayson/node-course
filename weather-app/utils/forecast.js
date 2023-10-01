const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=05f610b587f3689d97bcc74f9adfd737&query=${latitude},${longitude}&units=f`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(
        undefined,
        `${response.body.current.weather_descriptions}. It is currrently ${response.body.current.temperature} degrees out. There is a ${response.body.current.precip}% chance of rain`
      );
    }
  });
};

module.exports = forecast;
