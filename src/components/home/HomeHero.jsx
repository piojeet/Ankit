import React from 'react'
import Amazon from '../../assets/amazone.png'
import DownArrow from '../../assets/downarrow.svg'
import Flipkart from '../../assets/flipkart.png'
import Myntra from '../../assets/myntra.png'
import Onpluse from '../../assets/onplus.png'
import Ajio from '../../assets/ajio.png'
import Shyaway from '../../assets/shyaway.png'
import Foxtale from '../../assets/foxtale.png'
import Caffeine from '../../assets/caffeine.png'

function HomeHero() {
  return (
    <>
      <div className='h-[50px] content-center'>
        <div className='flex items-center justify-between relative z-10'>
          <div className='text-[14px] font-semibold h-[40px] content-center bg-lightOrange px-7 max-w-[300px] w-full text-center flex-shrink-0 text-whiteColor'>Popular Cashback Stores</div>
          <div><span><img src={Amazon} alt="" className='h-10' /></span></div>
          <div><span><img src={Flipkart} alt="" /></span></div>
          <div><span><img src={Myntra} alt="" /></span></div>
          <div><span><img src={Onpluse} alt="" /></span></div>
          <div><span><img src={Ajio} alt="" /></span></div>
          <div><span><img src={Shyaway} alt="" /></span></div>
          <div><span><img src={Foxtale} alt="" /></span></div>
          <div><span><img src={Caffeine} alt="" /></span></div>

          <div className='group flex items-center gap-2 bg-lightOrange h-[40px] px-7 relative cursor-pointer'><span className='text-[14px] font-semibold text-whiteColor'>More</span> <span className='inline-block'><img src={DownArrow} alt="" className='w-4' /></span>
          <div className='absolute top-[100%] right-7 bg-lightOrange text-whiteColor p-5 whitespace-nowrap flex-col gap-2 text-[14px] font-semibold hidden group-hover:flex'>
            <div className='cursor-pointer'>demo 1</div>
            <div className='cursor-pointer'>demo 2</div>
            <div className='cursor-pointer'>demo 3</div>
          </div>
          </div>
        </div>
      </div>

      <div className='flex items-start justify-between px-7 bg-buttonColor gap-7 py-7'>
        <div className='bg-whiteColor w-full'>hi</div>
        <div className='bg-whiteColor w-full'>hi</div>
        <div className='bg-whiteColor w-full'>hi</div>
      </div>
    </>
  )
}

export default HomeHero;