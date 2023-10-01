const express = require("express");

const geocode = require("../../weather-app/utils/geocode");
const forecast = require("../../weather-app/utils/forecast");

const app = express();
app.get("/weather", (req, res) => {
  const address = req.query.address;
  geocode(address, (error, { latitude, longitude } = {}) => {
    if (error) return res.send({ error });

    forecast(latitude, longitude, (error, data) => {
      if (error) return res.send({ error });
      res.send({ data });
    });
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
