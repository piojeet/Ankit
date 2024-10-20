import React, { useState } from 'react'
import DownArrow from '../../assets/downarrow.svg'
import compare1 from '../../assets/image 33.png'
import compare2 from '../../assets/image 34.png'
import compare3 from '../../assets/image 36.png'
import compare4 from '../../assets/image 29.png'
import compare5 from '../../assets/image 30.png'
import compare6 from '../../assets/image 35.png'
import compare7 from '../../assets/image 37.png'

function MiniFooter() {
    const [toggle, setToggle] = useState(false)

    return (
        <>
        <div className={`fixed ${toggle ? 'w-[100px]' : 'w-full'} bottom-0 left-0 flex items-center justify-between px-2 h-[50px] bg-buttonColor z-50 border-t border-lightBackground gap-x-10 transition-all duration-200 ${toggle ? 'border-r overflow-hidden' : ''}`}>
            <div className={`flex items-center gap-x-1 cursor-pointer h-full select-none ${toggle ? 'w-full' : ''}`} onClick={() => setToggle(!toggle)}>
                {toggle ? (
                    <span className='text-lightBackground font-semibold'>Show</span>
                ) : (
                    <span className='text-lightBackground font-semibold'>Hide</span>
                )}
                <span className={`bg-lightOrange inline-flex w-5 h-5 rounded-full items-center justify-center transition-all duration-200 ${toggle ? '-rotate-90' : 'rotate-90'}`}>
                    <img src={DownArrow} alt="" className='w-3' />
                </span>
            </div>
            <div className={`flex items-center justify-between gap-x-1 w-full ${toggle ? 'hidden' : ''}`}>
                <div className='flex items-center gap-x-1'>
                    <span className='text-lightBackground font-semibold'>Campare</span>
                    <span><img src={DownArrow} alt="" className='w-3' /></span>
                </div>
                <div className='flex items-center gap-x-1'>
                    <span className='w-9 h-9 border border-lightBackground rounded-full overflow-hidden inline-block'><img src={compare1} alt="" className='w-full h-full object-cover' /></span>
                    <span className='w-9 h-9 border border-lightBackground rounded-full overflow-hidden inline-block'><img src={compare2} alt="" className='w-full h-full object-cover' /></span>
                    <span className='w-9 h-9 border border-lightBackground rounded-full overflow-hidden inline-block'><img src={compare3} alt="" className='w-full h-full object-cover' /></span>
                    <span className='w-9 h-9 border border-lightBackground rounded-full overflow-hidden inline-block'><img src={compare4} alt="" className='w-full h-full object-cover' /></span>
                    <span className='w-9 h-9 border border-lightBackground rounded-full overflow-hidden inline-block'><img src={compare5} alt="" className='w-full h-full object-cover' /></span>
                    <span className='w-9 h-9 border border-lightBackground rounded-full overflow-hidden inline-block'><img src={compare6} alt="" className='w-full h-full object-cover' /></span>
                    <span className='w-9 h-9 border border-lightBackground rounded-full overflow-hidden inline-block'><img src={compare7} alt="" className='w-full h-full object-cover' /></span>
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
        </div>
        </>
    )
}

export default MiniFooter
