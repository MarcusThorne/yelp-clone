const db = require('../db');

module.exports = class RestaurantModel {
  async getAll() {
    try {
      const statement = `SELECT *
                         FROM restaurants`;

      const result = await db.query(statement);

      if (result.rows?.length) {
        return result.rows;
      }

      return [];

    } catch (error) {
      throw new Error(error);
    }
  }

  async getById(id) {
    try {
      const statement = `SELECT *
                         FROM restaurants
                         WHERE id = $1`
      const values = [id]

      const result = await db.query(statement, values)

      if(result.rows?.length) {
        return result.rows[0];
      }

      return null;

    } catch (error) {
      throw new Error(error)
    }
  }

  async create(data) {
    try {
      // deconstructing the data array
      const { name, location, price_range } = data;

      console.log(price_range)

      const statement = `INSERT INTO restaurants (name, location, price_range)
                         VALUES ($1, $2, $3) returning *`
      const values = [name, location, price_range]

      const result = await db.query(statement, values)

      if (result.rows?.length) {
        return result.rows;
      }

      return null;

    } catch (error) {
      throw new Error(error)
    }
  }

  async update(id, data) {
    try {
      const { name, location, price_range } = data;

      const statement = `UPDATE restaurants
                         SET name = $1, location = $2, price_range = $3
                         WHERE id = $4 returning *`
      const values = [ name, location, price_range, id ]

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
      const statement = `DELETE FROM restaurants
                         WHERE id = $1`
      const values = [id]

      const result = await db.query(statement, values)

    } catch (error) {
      throw new Error(error)
    }
  }
}
