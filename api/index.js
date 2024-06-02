"use strict";

require('dotenv').config()
const path = require('path')
const bodyParser = require("body-parser");
var cors = require('cors')

//server
const express = require("express");
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routesObj = {
  "": "root.route",
  "contact" : "contact.route"
};

const route = Object.keys(routesObj);
route.forEach((r) => {
  const currentRoute = require(path.join(__dirname, `../routes/${routesObj[r]}`));
  app.use(`/${r}`, currentRoute);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
