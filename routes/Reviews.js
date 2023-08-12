const express = require('express')
const reviewsRouter = express.Router();


const RestaurantService = require('../services/RestaurantService');
const RestaurantServiceInstance = new RestaurantService();

const ReviewService = require('../services/ReviewServiceInstance')
const ReviewServiceInstance = new ReviewService();

module.exports = (app) => {
  app.use('/reviews', reviewsRouter)

  // Get reviews for specific restaurant
  reviewsRouter.get('/:restaurantId', async (req, res) => {
    try {
      // Creating a variable for the id in the params
      const { restaurantId } = req.params;
      // Making a request to the service instance
      await RestaurantServiceInstance.getById(restaurantId);

      const response = await ReviewServiceInstance.getByRestaurantId(restaurantId);

      res.status(200).json({
        status: 'Success',
        results: response.length,
        data: {
          reviews: response
        }
      })
    } catch (error) {
      throw (error)
    }
  })

  reviewsRouter.post('/', async (req, res) => {
    try {
      const data = req.body;

      const response = await ReviewServiceInstance.create(data)

      res.status(200).json({
        status: "success",
        results: response.length,
        data: {
          reviews: response
        }
      })

    } catch (error) {
      throw (error)
    }
  })
}
