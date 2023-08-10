import React, { useState, createContext } from 'react'

export const ReviewsContext = createContext();

export const ReviewsContextProvider = (props) => {
  const [reviews, setReviews] = useState([])

  const addReview = (newReview) => {
    setReviews([...reviews, newReview])
  }

  return (
    <ReviewsContext.Provider
      value={{
        reviews,
        setReviews,
        addReview
      }} >
      {props.children}
    </ReviewsContext.Provider>
  )
}
