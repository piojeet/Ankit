import React from 'react'
import HomeHero from './HomeHero'
import Nav from '../nav/Nav'
import NavLinks from '../nav/NavLinks'

function Home() {
  return (
    <div>
        <Nav />
        <div className='relative z-20'>
        <NavLinks />
        </div>
        <div className='relative z-10'>
        <HomeHero />
        </div>
    </div>
  )
}

export default Home