import React from 'react'
import HomeHero from './HomeHero'
import Nav from '../nav/Nav'
import NavLinks from '../nav/NavLinks'

function Home() {
  return (
    <div>
        <Nav />
        <NavLinks />
        <HomeHero />
    </div>
  )
}

export default Home