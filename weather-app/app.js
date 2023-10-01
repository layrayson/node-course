const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Los Angeles", (error, { latitude, longitude }) => {
  console.log("Error", error);
  console.log(longitude, latitude);

  forecast(latitude, longitude, (error, data) => {
    console.log("Error", error);
    console.log("Data", data);
  });
});
