const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

const API_URL = "https://global.lakmus.org";
const DICTIONARIES_ICP2_ROUTE = "/Dictionaries/icpc2";

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.get(DICTIONARIES_ICP2_ROUTE, async (req, res) => {
  const url = `${API_URL}${DICTIONARIES_ICP2_ROUTE}`;

  try {
    const response = await axios.get(url, { params: req.query });
    const data = response.data;
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send("An error occurred while requesting the API");
  }
});

app.listen(port, () => {
  console.log(`The proxy server is running on the port ${port}`);
});
