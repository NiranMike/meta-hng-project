import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import SponsorSection from './Components/SponsorSection'
import InspirationSection from './Components/InspirationSection'
import DiscoverSection from './Components/DiscoverSection'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <SponsorSection />
      <InspirationSection />
      <DiscoverSection />
    </div>
  )
}

export default App