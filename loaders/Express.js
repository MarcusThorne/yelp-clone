const express = require('express');
const path = require("path")

module.exports = (app) => {
  // This allows use to see the req.body
  app.use(express.json())

  app.use(express.static("../client/build"))
    // if (process.env.NODE_ENV === "production") {
  // }
}
