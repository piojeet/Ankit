import React from 'react'
import HomeHero from './HomeHero'
import Nav from '../nav/Nav'
import NavLinks from '../nav/NavLinks'
import ProductCategrees from './ProductCategrees'
import ProductBanner from './ProductBanner'
import ComparePriceProduct from './ComparePriceProduct'
import TradingProduct from './TradingProduct'
import PopularComparisons from './PopularComparisons'
import AppliancesPriceList from './AppliancesPriceList'
import TopStories from './TopStories'
import SmartphoneFeatures from './SmartphoneFeatures'
import CashbackOffers from './CashbackOffers'

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
        <div className='mb-7'>
        <SmartphoneFeatures />
        </div>
        <ComparePriceProduct />
        <TradingProduct />
        <PopularComparisons />
        <TopStories />
        <CashbackOffers />
        <AppliancesPriceList />
    </div>
  )
}

export default Home