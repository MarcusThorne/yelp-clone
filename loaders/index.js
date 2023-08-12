const morganLoader = require('./Morgan');
const expressLoader = require('./Express');
const routeLoader = require('../routes');

const cors = require('cors')

module.exports = async (app) => {
  app.use(cors());

  // Load the express middleware
  await expressLoader(app);
  console.log("Express middleware finished")

  // Load morgan error package
  await morganLoader(app);
  console.log("Morgan middleware finished")

  // Load API route handlers
  await routeLoader(app);
  console.log("Routes finished")

}
