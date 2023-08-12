const express = require('express');
const path = require("path")

module.exports = (app) => {
  // This allows use to see the req.body
  app.use(express.json())

  if (process.env.NODE_ENV === "production") {
      app.use(express.static("../client/build"))
  }
}
