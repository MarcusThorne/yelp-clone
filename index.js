// Requring the dotenv file
require('dotenv').config();

// Setting up express and calling it
const express = require('express');

const app = express();

// Requiring loaders for the app from an index file in the loaders directory
const loaders = require('./loaders');

// Defining the port based on the env file
const port = process.env.PORT || 4000;

async function startServer() {

  // Init application loaders
  loaders(app);

  // app.get('*', (req, res) => {
  //   res.sendFile(path.join(__dirname, "./client/build/index.html"))
  // })

  // Start server
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  })
}

startServer();
