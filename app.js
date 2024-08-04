const express = require("express");
const tourRoute = require("./routes/tourRoute");

const app = express();

// MIDDLEWARE FOR CREATING API
app.use(express.json({}));

// ROUTES
app.use("/api/v1/tours", tourRoute);

module.exports = app;
