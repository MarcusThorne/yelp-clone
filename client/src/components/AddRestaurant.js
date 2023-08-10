import React, { useState, useContext } from 'react'
import RestaurantApi from '../api/RestaurantApi';
import { RestaurantsContext } from '../context/RestaurantsContext';

function AddRestaurant() {
  const { addRestaurant } = useContext( RestaurantsContext )

  const [ name, setName ] = useState("");
  const [ location, setLocation ] = useState("");
  const [ priceRange, setPriceRange ] = useState("Price Range");

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await RestaurantApi.post('/', {
        name,
        location,
        price_range: priceRange
      })

      console.log(response)
      addRestaurant(response.data.data.restaurant)
      window.location.reload()

    } catch (error) {

    }
  }

  return (
    <div className="mb-4 flex-row mx-5" >
      <form action="" >
        <div className="form-row d-flex justify-content-around gap-3">
          <div className="col">
            <input
              type='text'
              className="form-control"
              placeholder='Name'
              value={name}
              onChange={(event) => setName(event.target.value)} />
          </div>

          <div className="col">
            <input
              type='text'
              className="form-control"
              placeholder='Location'
              value={location}
              onChange={(event) => setLocation(event.target.value)} />
          </div>

          <div className="col">
            <select
              className="form-select mr-sm-2 flex-fill"
              value={priceRange}
              onChange={(event) => setPriceRange(event.target.value)} >
              <option disabled>Price Range</option>
              <option value='1'>£</option>
              <option value='2'>££</option>
              <option value='3'>£££</option>
              <option value='4'>££££</option>
              <option value='5'>£££££</option>
            </select>
          </div>

          <button
            className="btn btn-primary"
            onClick={ (event) => handleSubmit(event) }>Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddRestaurant
