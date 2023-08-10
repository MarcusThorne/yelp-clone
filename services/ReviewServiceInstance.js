const createError = require('http-errors');

const ReviewModel = require('../models/Review');
const ReviewModelInstance = new ReviewModel();

module.exports = class RestaurantModel {
  async getByRestaurantId(id) {
    try {
      // Getting all restraurants from the restaurants model
      const reviews = await ReviewModelInstance.getByRestaurantId(id);

      // If reviews don't exist, send back an emprt array, dont want it to break if no revierd exists
      if (!reviews) {
        return {}
      }

      return reviews;

    } catch (error) {
      throw error;
    }
  }

  async create(data) {
    try {
      // Adding the newly create restaurant to the database
      const newReview = await ReviewModelInstance.create(data)

      // If a restaurant has not been created succesfully
      if (!newReview) {
        throw createError(404, "Review not created!")
      }

      return newReview;

    } catch (error) {
      throw (error)
    }
  }
}
