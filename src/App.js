import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import SponsorSection from './Components/SponsorSection'
import InspirationSection from './Components/InspirationSection'
import DiscoverSection from './Components/DiscoverSection'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SponsorSection />
      <InspirationSection />
      <DiscoverSection />
      <Footer />
    </div>
  )
}

export default App