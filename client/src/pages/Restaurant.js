import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import RestaurantApi from '../api/RestaurantApi'
import ReviewApi from '../api/ReviewApi'
import { RestaurantsContext } from '../context/RestaurantsContext'
import Reviews from '../components/Reviews'
import { ReviewsContext } from '../context/ReviewsContext'
import AddReview from '../components/AddReview'

function Restaurant() {
  const { id } = useParams()

  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)
  const { reviews, setReviews } = useContext(ReviewsContext)

  useEffect(() => {
    async function fetchData() {
      try {
        const restaurantResponse = await RestaurantApi.get(`/${id}`)
        const reviewResponse = await ReviewApi.get(`/${id}`)
        setSelectedRestaurant(restaurantResponse.data.data.restaurant)
        setReviews(reviewResponse.data.data.reviews)

      } catch (error) {
        console.log(error)
      }
    }

    fetchData();
  }, [ id, setSelectedRestaurant, setReviews ])

  return (
    <>
      {selectedRestaurant && (
        <div key={selectedRestaurant} >
          <Header title={selectedRestaurant.name} />

          <div className="row justify-content-center gap-2" style={{ marginBottom: "20rem"}}>
            {reviews && reviews.map((review) => (
              <Reviews
                rating={review.rating}
                name={review.name}
                review={review.review}
                className="col"
                key={review.id} ></Reviews>
            ))}
          </div>

          <AddReview />
        </div>
      )}
    </>
  )
}

export default Restaurant
