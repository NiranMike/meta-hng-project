import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import SponsorSection from './Components/SponsorSection'
import InspirationSection from './Components/InspirationSection'
import DiscoverSection from './Components/DiscoverSection'
import Footer from './Components/Footer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import PlaceToStay from './Pages/PlaceToStay'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/place_to_stay" element={<PlaceToStay />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App