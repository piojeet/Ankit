import React from 'react'
import Logo from '../../assets/logotop.svg'
import Whatsapp from '../../assets/whatsapp.svg'
import ArrowRight from '../../assets/Arrow Right.png'
import LatestImg1 from '../../assets/Mask group.png'
import LatestImg2 from '../../assets/Mask group2.png'
import StoriesImg1 from '../../assets/image 22.png'
import StoriesImg2 from '../../assets/image 24.png'
import StoriesImg3 from '../../assets/image 23.png'
import { NavLink } from 'react-router-dom'

function TopStories() {
  return (
    <>
        <div className='grid lg:grid-cols-2 grid-cols-1 px-2 gap-2'>
            <div>
                <div className='flex bg-[#E6FCDA] items-center justify-center h-[20vh] rounded-md'>
                    <div className='h-full w-full content-center px-2'>
                        <img src={Logo} alt="" className='md:w-[90%] w-[80%] block mx-auto' />
                    </div>
                    <span className='inline-block w-[2px] h-[20vh] bg-[#23262f00] border-r-2 border-[#23262F52] border-dotted'></span>
                    <div className='whitespace-nowrap w-[90%] px-2'>
                        <div className='block w-fit mx-auto'>
                        <span className='text-blackColor font-bold text-[10px] md:text-[16px]'>Whatsapp Channel</span>
                        <div className='w-fit px-6 py-2 bg-[#027E6A] text-whiteColor font-semibold mx-auto mt-2 rounded-lg cursor-pointer text-[10px] md:text-[16px]'>Join Now</div>
                        </div>
                    </div>
                    <span className='inline-block w-[2px] h-[20vh] bg-[#23262f00] border-r-2 border-[#23262F52] border-dotted'></span>
                    <div className='w-full'>
                        <div className='flex items-center justify-center px-2'>
                        <p className='font-bold text-blackColor text-[10px] md:text-[16px]'>For Latest Tech News & Gadgets Reviews</p>
                        <span className='flex-shrink-0'><img src={Whatsapp} alt="" className='md:w-14 w-[35px] h-[35px]' /></span>
                        </div>
                    </div>
                </div>
                <div className='md:border-2 border-[#cccccc] mt-2 px-2 py-5 rounded-xl'>
                    <div className='flex items-center justify-between mb-4'>
                        <div>
                            <span className='text-[22px] font-semibold text-blackColor'>Latest News</span>
                        </div>
                        <div className='md:block hidden'>
                            <NavLink to='' className={`flex items-center gap-2 text-[14px] text-blackColor`}>
                            <span>See all</span>
                            <span><img src={ArrowRight} alt="" className='h-6' /></span>
                            </NavLink>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <div className='flex-shrink-0 md:h-[100px] md:w-[100px] w-[60px] h-[60px] overflow-hidden rounded-xl'>
                            <span><img src={LatestImg1} alt="" className='w-full h-full object-cover' /></span>
                        </div>
                        <div>
                            <h4 className='md:text-[14px] text-[10px] font-semibold text-blackColor'>MediaTek Dimensity 9400 SoC Supports Multimodal Gemini Nano:</h4>
                            <p className={`md:text-[14px] text-[9px] font-medium text-[#23262F99] mt-2 ${window.innerWidth < 768 ? 'text-ellipsis' : ''}`}>TL;DR The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.....</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 mt-2'>
                        <div className='flex-shrink-0 md:h-[100px] md:w-[100px] w-[60px] h-[60px] overflow-hidden rounded-xl'>
                            <span><img src={LatestImg2} alt="" className='w-full h-full object-cover' /></span>
                        </div>
                        <div>
                            <h4 className='md:text-[14px] text-[10px] font-semibold text-blackColor'>UPI वालों के लिए खुशखबरी! नयी UPI लिमिट की हुई घोषणा, जानें किसे मिलेगा फायदा</h4>
                            <p className={`md:text-[14px] text-[9px] font-medium text-[#23262F99] mt-2 ${window.innerWidth < 768 ? 'text-ellipsis' : ''}`}>TL;DR The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.....</p>
                        </div>
                    </div>
                </div>

                <div className='flex items-center justify-center md:hidden'>
                            <NavLink to='' className={`flex items-center gap-2 text-[14px] text-whiteColor bg-lightOrange px-4 py-1 rounded-md`}>
                            <span>See all</span>
                            </NavLink>
                        </div>
            </div>
            <div className='md:bg-[#778899] p-4 rounded-xl'>
                <div>
                    <h3 className='md:text-[32px] text-[20px] font-semibold md:text-whiteColor md:text-center text-left mb-2 text-blackColor'>Top Stories</h3>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-2'>
                        <div className='bg-whiteColor p-[2px] rounded-xl overflow-hidden'>
                        <div className='relative w-full lg:h-[13.5vw] sm:h-[27vw]'>
                            <img src={StoriesImg1} alt="" className='w-full h-full rounded-xl object-cover' />
                            <div className='absolute bottom-0 w-full bg-[#ffffffa2] text-blackColor font-semibold p-3 text-[11px] md:text-[16px]'>
                                <p>12 Best Optical Zoom Camera Phones To Buy in 2023</p>
                            </div>
                        </div>
                        </div>
                        <div className='bg-whiteColor p-[2px] rounded-xl overflow-hidden'>
                        <div className='relative w-full lg:h-[13.5vw] sm:h-[27vw]'>
                            <img src={StoriesImg2} alt="" className='w-full h-full rounded-xl object-cover' />
                            <div className='absolute bottom-0 w-full bg-[#ffffffa2] text-blackColor font-semibold p-3 text-[11px] md:text-[16px]'>
                                <p>Apple iPhone 16 Review: Feels And Handles Like A Pro</p>
                            </div>
                        </div>
                        </div>
                        <div className='bg-whiteColor p-[2px] rounded-xl overflow-hidden'>
                        <div className='relative w-full lg:h-[13.5vw] sm:h-[27vw]'>
                            <img src={StoriesImg3} alt="" className='w-full h-full rounded-xl object-cover' />
                            <div className='absolute bottom-0 w-full bg-[#ffffffa2] text-blackColor font-semibold p-3 text-[11px] md:text-[16px]'>
                                <p>Apple iPhone 16 Pro Review: Still the King?</p>
                            </div>
                        </div>
                        </div>
                        <div className='bg-whiteColor p-[2px] rounded-xl overflow-hidden'>
                        <div className='relative w-full lg:h-[13.5vw] sm:h-[27vw]'>
                            <img src={StoriesImg1} alt="" className='w-full h-full rounded-xl object-cover' />
                            <div className='absolute bottom-0 w-full bg-[#ffffffa2] text-blackColor font-semibold p-3 text-[11px] md:text-[16px]'>
                                <p>12 Best Optical Zoom Camera Phones To Buy in 2023</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default TopStories