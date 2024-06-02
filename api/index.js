"use strict";

require("module-alias/register");
const express = require("express");
const app = express();

// app.get("/", (req, res) => res.send("Express on Vercel by => Jevin A Vaghasiya"));

const routesObj = {
  "": "root.route",
};

const route = Object.keys(routesObj);
route.forEach((r) => {
  const currentRoute = require(`@route/${routesObj[r]}`);
  app.use(`/${r}`, currentRoute);
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;
