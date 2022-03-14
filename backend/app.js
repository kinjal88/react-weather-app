const express = require("express");
const axios = require("axios");
var cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/", async (req, res) => {
  let data;
  try {
    await axios
      .get(
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
          req.query.city +
          "&APPID=fb1158dc7dfef5f0967ceac8f71ee3a6&units=metric"
      )
      .then((response) => {
        // console.log(response);
        data = response.data;
        res.send(data);
      });
  } catch (error) {
    res.send({ msg: "Wrong City" });
  }
});

app.listen(port, () => {
  console.log(`https://localhost:${port}`);
});
