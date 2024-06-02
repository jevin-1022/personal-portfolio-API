"use strict";

const express = require("express");
const routes = express.Router();

// Middleware
const timeLog = (request, response, next) => {
  console.log("Time: ", Date.now());
  next();
};
routes.use(timeLog);

// root route
routes.get("/", (request, response) => {
  response.send({
    name: "personal-portfolio-API",
    date: new Date(),
    test: "1",
  });
});

module.exports = routes;
