const express = require('express');

module.exports = (app) => {
  // This allows use to see the req.body
  app.use(express.json())
}
