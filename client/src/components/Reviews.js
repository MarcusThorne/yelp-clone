import React from 'react'
import StarRating from '../components/StarRating'

function Reviews({rating, name, review}) {
  return (
    <div className="card text-bg-primary mb-3" style={{ maxWidth: "18rem" }} >
      <div className="card-header">
        <StarRating rating={rating} />
      </div>
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{review}</p>
      </div>
    </div>
  )
}

export default Reviews
