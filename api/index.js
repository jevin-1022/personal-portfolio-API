"use strict";

const express = require("express");
const path = require('path')
const app = express();

// app.get("/", (req, res) => res.send("Express on Vercel by => Jevin A Vaghasiya"));

const routesObj = {
  "": "root.route",
};

const route = Object.keys(routesObj);
route.forEach((r) => {
  console.log("__dirname  : ", __dirname);
  console.log("Final route  : ", path.join(__dirname, `../routes/${routesObj[r]}`));
  const currentRoute = require(path.join(__dirname, `../routes/${routesObj[r]}`));
  app.use(`/${r}`, currentRoute);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
