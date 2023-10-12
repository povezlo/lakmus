const express = require("express");
const request = require("request");

const app = express();
const port = 3000;

const API_URL = "https://global.lakmus.org";
const DICTIONARIES_ICP2_ROUTE = "/Dictionaries/icpc2";

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get(DICTIONARIES_ICP2_ROUTE, (req, res) => {
  const params = req.query;
  const apiUrl = `${API_URL}${DICTIONARIES_ICP2_ROUTE}?IsPublic=true`;

  console.log({ params: req.query });
  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode == 200) {
      res.send(body);
    } else {
      res.status(500).send("An error occurred while requesting the API");
    }
  });
});

app.listen(port, () => {
  console.log(`The proxy server is running on the port ${port}`);
});
