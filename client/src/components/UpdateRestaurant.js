import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import RestaurantApi from '../api/RestaurantApi';
import Header from './Header';

function UpdateRestaurant(props) {
  const { id } = useParams()

  const [ name, setName ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ priceRange, setPriceRange ] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
        const response = await RestaurantApi.get(`/${id}`)

        setName(response.data.data.restaurant.name)
        setLocation(response.data.data.restaurant.location)
        setPriceRange(response.data.data.restaurant.price_range)
    }

    fetchData()
  }, [ id ])

  const handleSubmit = async (event) => {
    event.preventDefault()

    const updatedRestaurant = await RestaurantApi.put(`/${id}`, {
      name,
      location,
      price_range: priceRange
    })

    console.log(updatedRestaurant)
    navigate('/')
  }

  return (
    <div>
      <Header title="Update Restaurant" />

      <form action="">
        {/* form input for name */}
        <div className='form-group'>
          <label htmlFor='name' >Name</label>
          <input
            id="name"
            className="form-control"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)} />
        </div>

        {/* form input for location */}
        <div className='form-group'>
          <label htmlFor='location' >Location</label>
          <input
            id="location"
            className="form-control"
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)} />
        </div>

        {/* form inpit for price range */}
        <div className='form-group'>
          <label htmlFor='name' >Price Range</label>
          <input
            id="priceRange"
            className="form-control"
            type="number"
            value={priceRange}
            onChange={(event) => setPriceRange(event.target.value)} />
        </div>

       {/* submit button */}
       <button
        className="btn btn-primary"
        onClick={handleSubmit } >Submit</button>
      </form>
    </div>
  )
}

export default UpdateRestaurant
