"use strict";

const express = require("express");
const routes = express.Router();
const Path = require("path");
const controllers = Path.resolve(__dirname, "..", "controllers");
const contactController = require(`${controllers}/contactController`);

// middleware
const timeLog = (request, response, next) => {
  console.log("Time from Contact: ", Date.now());
  next();
};
routes.use(timeLog);

// Send email
routes.post("/email", async (request, response) => {
  const payload = request.body;
  const result = await contactController.sendMail(payload);

  if (!result.success) {
    response.send({
      success: false,
      data: result,
      message: "Something went wrong! Please try again.",
    });
  }

  response.send({
    success: true,
    data: result,
    message: "Email sent successfully",
  });
});

module.exports = routes;
