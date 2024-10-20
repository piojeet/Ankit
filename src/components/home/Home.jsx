import React from 'react'
import HomeHero from './HomeHero'
import Nav from '../nav/Nav'
import NavLinks from '../nav/NavLinks'
import ProductCategrees from './ProductCategrees'
import ProductBanner from './ProductBanner'
import ComparePriceProduct from './ComparePriceProduct'

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
        <ProductCategrees />
        <ProductBanner />
        <ComparePriceProduct />
    </div>
  )
}

export default Home