const express = require('express');
const restaurantsRouter = express.Router();

const RestaurantService = require('../services/RestaurantService');
const RestaurantServiceInstance = new RestaurantService();

module.exports = (app) => {
  // Defining the url
  app.use('/.netlify/functions/restaurants/', restaurantsRouter);


  // Get all restaraunts
  restaurantsRouter.get("/", async (req, res, next) => {

    try {
      // making the request to the service instance
      const response = await RestaurantServiceInstance.getAll();

      // sending back the response
      res.status(200).json({
        status: "Success",
        results: response.length,
        data: {
          restaurants: response,
        }
      })
    } catch(error) {
      next(error)
    }
  })


  // Get one restaurant
  restaurantsRouter.get('/:id', async (req, res) => {

    try {
      // Creating a variable for the id in the params
      const { id } = req.params;
      // Making a requeste to the service instance
      const response = await RestaurantServiceInstance.getById(id);
      console.log(response)

      res.status(200).json({
        status: 'Success',
        results: response.length,
        data: {
          restaurant: response
        }
      })
    } catch (erroror) {
      throw(erroror)
    }
  })


  // Create a new restaurant
  restaurantsRouter.post('/', async (req, res) => {
    try {
      // Creating a variable for the json from the new restaursant
      const data = req.body;
      // making the request to the serivce instance
      const response = await RestaurantServiceInstance.create(data);

      res.status(201).json({
        status: 'Successfully created',
        data: {
          restaurant: response
        }
      })
    } catch (error) {
      throw(error)
    }
  })


  // Update an existing restaurant
  restaurantsRouter.put('/:id', async (req, res) => {
    try {
      // Creating a variable for the json from the new restaursant
      const { id } = req.params;
      const data = req.body;

      // making the request to the serivce instance
      const response = await RestaurantServiceInstance.update(id, data);

      res.status(200).json({
        status: 'Successfully updated',
        data: {
          restaurant: response
        }
      })

    } catch (error) {
      throw(error)
    }

  })


  // Delete a restraunt
  restaurantsRouter.delete('/:id', async (req, res) => {
    console.log("Deleteing...")
    try {
      const { id } = req.params;
      const response = await RestaurantServiceInstance.delete(id)

      res.status(204).json({
        status: 'Successfully deleted',
      })
    } catch (error) {
      throw(error)
    }

  })
}
