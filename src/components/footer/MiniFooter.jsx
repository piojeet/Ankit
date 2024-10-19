import React from 'react'
import DownArrow from '../../assets/downarrow.svg'
import compare from '../../assets/image 33.png'

function MiniFooter() {
  return (
    <>
    <div className='fixed w-full bottom-0 left-0 flex items-center justify-between px-2 py-3 bg-buttonColor z-50 border-t border-lightBackground'>
        <div className='flex items-center gap-x-1'>
            <span className='text-lightBackground font-semibold'>Hide</span>
            <span className='rotate-90 bg-lightOrange inline-flex w-5 h-5 rounded-full items-center justify-center'><img src={DownArrow} alt="" className='w-3' /></span>
        </div>
        <div className='flex items-center gap-x-1'>
        <span className='text-lightBackground font-semibold'>Campare</span>
        <span><img src={DownArrow} alt="" className='w-3' /></span>
        </div>
        <div className='flex items-center gap-x-1'>
            <span className='w-9 h-9 border border-lightBackground rounded-full overflow-hidden inline-block'><img src={compare} alt="" className='w-full h-full object-cover' /></span>
            <span className='w-9 h-9 border border-lightBackground rounded-full overflow-hidden inline-block'><img src={compare} alt="" className='w-full h-full object-cover' /></span>
            <span className='w-9 h-9 border border-lightBackground rounded-full overflow-hidden inline-block'><img src={compare} alt="" className='w-full h-full object-cover' /></span>
            <span className='w-9 h-9 border border-lightBackground rounded-full overflow-hidden inline-block'><img src={compare} alt="" className='w-full h-full object-cover' /></span>
            <span className='w-9 h-9 border border-lightBackground rounded-full overflow-hidden inline-block'><img src={compare} alt="" className='w-full h-full object-cover' /></span>
            <span className='w-9 h-9 border border-lightBackground rounded-full overflow-hidden inline-block'><img src={compare} alt="" className='w-full h-full object-cover' /></span>
            <span className='w-9 h-9 border border-lightBackground rounded-full overflow-hidden inline-block'><img src={compare} alt="" className='w-full h-full object-cover' /></span>
        </div>
        <div className='flex items-center gap-x-1'>
            <span className='text-lightBackground font-semibold'>Save item</span>
            <span><img src={DownArrow} alt="" className='w-3 rotate-180' /></span>
        </div>
        <div className='w-full max-w-[550px] flex items-end justify-end'>
            <form className='w-full'>
                <div className='flex items-center w-full h-[40px]'>
                    <div className='text-lightBackground font-semibold text-[18px] h-full content-center bg-lightOrange px-4 rounded-s-md w-fit flex-shrink-0 block text-nowrap text-center cursor-pointer'><span>Subscribe</span></div>
                    <input type="text" placeholder='Enter your email' className='w-full block h-full outline-none px-4 text-[18px] text-blackColor' />
                    <div className='text-lightBackground font-semibold text-[18px] h-full content-center bg-lightOrange px-4 rounded-e-md w-fit flex-shrink-0 block text-nowrap text-center cursor-pointer'><span>Subscribe</span></div>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default MiniFooter