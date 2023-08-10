import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as starEmpty, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons'

function StarRating({rating}) {
  let stars = []
  let decimal = (rating - parseInt(rating)) >= 0.5;

  for(let i = 1; i < 6; i++) {
    if(i < rating) {
      stars.push(<FontAwesomeIcon className="text-warning" icon={faStar} />)
    } else if (decimal) {
      stars.push(<FontAwesomeIcon className="text-warning" icon={faStarHalfStroke} />)
      decimal = false;
    } else {
      stars.push(<FontAwesomeIcon className="text-warning" icon={starEmpty} />)

    }
  }

  return (
    <div className="d-flex align-items-center">
      {stars.map((star, index) => (
        <i key={index}>{star}</i>
      ))}
      <i className="mx-2 inline">{rating}</i>
    </div>
  )
}

export default StarRating
