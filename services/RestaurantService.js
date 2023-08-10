const createError = require('http-errors');
const RestaurantModel = require('../models/Restaurant');
const RestaurantModelInstance = new RestaurantModel();

const ReviewModel = require('../models/Review');
const ReviewModelInstance = new ReviewModel();

module.exports = class RestaurantModel {

  async getAll() {
    try {
      // Getting all restraurants from the restaurants model
      const restaurants = await RestaurantModelInstance.getAll();

      // If restaurants don't exist, reject
      if (!restaurants) {
        throw createError(404, 'No Restaurants exist');
      }

      return restaurants;

    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      // Getting the restaurant with the id from the restaurant model
      const restaurant = await RestaurantModelInstance.getById(id)

      // If a restaurant has not been returned from the database
      if(!restaurant) {
        throw createError(404, `No restaurant exists with the id of ${id}`)
      }

      return restaurant;

    } catch (error) {
      throw(error)
    }
  }

  async create(data) {
    try {
      // Adding the newly create restaurant to the database
      const newRestaurant = await RestaurantModelInstance.create(data)

      // If a restaurant has not been created succesfully
      if (!newRestaurant) {
        throw createError(404, "Restaurant not created!")
      }

      return newRestaurant;

    } catch (error) {
      throw(error)
    }
  }

  async update(id, data) {
    try {
      // first find the restaurant by the id
      const restaurant = await RestaurantModelInstance.getById(id)

      if(!restaurant) {
        throw createError(404, "No restaurant with given id!")
      }

      const updateRestaurant = await RestaurantModelInstance.update(id, data)

      if (updateRestaurant) {
        return updateRestaurant;
      }

s
    } catch (error) {
      throw(error)
    }
  }

  async delete(id) {
    try {
      // first find the restaurant by the id
      const restaurant = await RestaurantModelInstance.getById(id)

      if (!restaurant) {
        throw createError(404, "No restaurant with given id!")
      }

      const review = await ReviewModelInstance.delete(id)

      const deleteRestaurant = await RestaurantModelInstance.delete(id)

      return deleteRestaurant

    } catch (error) {

    }
  }
}
