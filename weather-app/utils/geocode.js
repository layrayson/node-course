const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.maptiler.com/geocoding/${encodeURIComponent(
    address
  )}.json?key=VXVEhQEs2uz8IB5MRLYm&limit=1`;
  request({ url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        longitude: response.body.features[0].center[0],
        latitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
