import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ReviewsContext } from '../context/ReviewsContext'
import ReviewApi from '../api/ReviewApi'

function AddReview(props) {
  const [ newReview, setNewReview ] = useState({ name: '', rating: 0.0, review: '', restaurant_id: 0 })

  const { addReview } = useContext(ReviewsContext)

  const { id } = useParams()

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const response = await ReviewApi.post('/', {
        name: newReview.name,
        rating: parseFloat(newReview.rating),
        review: newReview.review,
        restaurant_id: id
      })

      addReview(response.data.data.reviews)
      window.location.reload()

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <form
      action=""
      className="container-fluid
              position-fixed
              bottom-0
              start-0
              bg-white
              p-5
              shadow-lg" >

      <h1 className="text-center">Leave a review</h1>

      <div className="container d-flex justfy-content-around">
        <div className="flex-grow-1 m-1">
          <label htmlFor="name" >Name</label>
          <input
            id="name"
            className="form-control"
            type="text"
            value={newReview.name}
            onChange={(event) => setNewReview({ ...newReview, name: event.target.value })} />
        </div>

        <div className="flex-grow-1 m-1">
          <label htmlFor="rating" >Rating</label>
          <input
            id="rating"
            className="form-control"
            type="number"
            value={newReview.rating}
            onChange={(event) => setNewReview({ ...newReview, rating: event.target.value })} />
        </div>

        <div className="flex-grow-1 m-1">
          <label htmlFor="name" >Review</label>
          <input
            id="review"
            className="form-control"
            type="text"
            value={newReview.review}
            onChange={(event) => setNewReview({ ...newReview, review: event.target.value })} />
        </div>
      </div>

      <div className="container d-flex justify-content-center mt-2">
        <button
          className="btn btn-danger px-5"
          onClick={(event) => handleSubmit(event)} >
          <span className="px-5">Post</span>
        </button>
      </div>
      </form>
    </div>
  )
}

export default AddReview
