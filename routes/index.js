// This is where you add all the routes relating to different tables
// Importing all the routes
const restaurantsRouter = require('./Restaurants')
const reviewRouter = require('./Reviews')

// Exporting them all so they can be used in loaders index.js
module.exports = (app) => {
  restaurantsRouter(app);
  reviewRouter(app);
}
