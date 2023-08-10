const db = require('../db');

module.exports = class RestaurantModel {
  async getByRestaurantId(id) {
    try {
      const statement = `SELECT *
                         FROM reviews
                         WHERE restaurant_id = $1`;
      const values = [ id ]

      const result = await db.query(statement, values);

      if (result.rows?.length) {
        return result.rows;
      }

      return [];

    } catch (error) {
      throw new Error(error);
    }
  }

  async create(data) {
    try {
      // deconstructing the data array
      const { name, rating, review, restaurant_id } = data;
      console.log(name)
      console.log(rating)
      console.log(review)
      console.log(restaurant_id)

      const statement = `INSERT INTO reviews (name, rating, review, restaurant_id)
                         VALUES ($1, $2, $3, $4) returning *`
      const values = [name, rating, review, restaurant_id]

      const result = await db.query(statement, values)

      if (result.rows?.length) {
        return result.rows;
      }

      return null;

    } catch (error) {
      throw new Error(error)
    }
  }

  async delete(id) {
    try {
      const statement = `DELETE FROM reviews
                         WHERE restaurant_id = $1`
      const values = [id]

      const result = await db.query(statement, values)

    } catch (error) {
      throw new Error(error)
    }
  }
}
