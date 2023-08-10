import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurant from './pages/Restaurant'
import Update from './pages/Update'
import { RestaurantsContextProvider } from './context/RestaurantsContext'
import { ReviewsContextProvider } from './context/ReviewsContext'

const App = () => {
  return (
    <RestaurantsContextProvider >
      <ReviewsContextProvider >
        <div className='container'>
          <Router>
            <Routes>
              <Route exact path='/' Component={Home} />
              <Route exact path='/restaurants/:id/update' Component={Update} />
              <Route exact path='/restaurants/:id' Component={Restaurant} />
            </Routes>
          </Router>
        </div>
      </ReviewsContextProvider>
    </RestaurantsContextProvider>
  )
}

export default App;
