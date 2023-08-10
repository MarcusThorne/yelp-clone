import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import RestaurantApi from '../api/RestaurantApi'
import { RestaurantsContext } from '../context/RestaurantsContext'

function RestaurantsList(props) {
  const { restaurants, setRestaurants } = useContext(RestaurantsContext)
  let navigate = useNavigate()

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await RestaurantApi.get("/")
        setRestaurants(response.data.data.restaurants)

      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [ setRestaurants ])

  const handleDelete = async (event, id) => {
    // this allows the update button to be clicked through the parent element having a onclick event also
    event.stopPropagation()
    try {
      await RestaurantApi.delete(`/${id}`)
      setRestaurants(restaurants.filter((restaurant) => {
        return restaurant.id !== id
      }))

    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async (event, id) => {
    // this allows the update button to be clicked through the parent element having a onclick event also
    event.stopPropagation()
    navigate(`/restaurants/${id}/update`)
  }

  const handleClick = async (id) => {
    navigate(`restaurants/${id}`)
  }


  return (
    <div className='list-group'>
      <table className="table table-dark table-striped">
        <thead className="table-primary">
          <tr>
            <th scope="col">Restaurant</th>
            <th scope="col">Location</th>
            <th scope="col">Price Range</th>
            <th scope="col">Rating</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          {restaurants && restaurants.map((restaurant) => (
            <tr
            key={restaurant.id}
              onClick={() => handleClick(restaurant.id)}>
              <td>{restaurant.name}</td>
              <td>{restaurant.location}</td>
              <td>{"£".repeat(restaurant.price_range)}</td>
              <td>Rating</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={(event) => handleUpdate(event, restaurant.id)} >
                    Update
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={(event) => handleDelete(event, restaurant.id)}>
                    Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default RestaurantsList
