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
        <div className='grid grid-cols-2 px-2 gap-2'>
            <div>
                <div className='flex bg-[#E6FCDA] items-center justify-center h-[20vh] rounded-md'>
                    <div className='h-full w-full content-center px-2'>
                        <img src={Logo} alt="" className='w-[90%] block mx-auto' />
                    </div>
                    <span className='inline-block w-[2px] h-[20vh] bg-[#23262f00] border-r-2 border-[#23262F52] border-dotted'></span>
                    <div className='whitespace-nowrap w-[90%] px-2'>
                        <div className='block w-fit mx-auto'>
                        <span className='text-blackColor font-bold'>Whatsapp Channel</span>
                        <div className='w-fit px-6 py-2 bg-[#027E6A] text-whiteColor font-semibold mx-auto mt-2 rounded-lg cursor-pointer'>Join Now</div>
                        </div>
                    </div>
                    <span className='inline-block w-[2px] h-[20vh] bg-[#23262f00] border-r-2 border-[#23262F52] border-dotted'></span>
                    <div className='w-full'>
                        <div className='flex items-center justify-center px-2'>
                        <p className='font-bold text-blackColor'>For Latest Tech News & Gadgets Reviews</p>
                        <span className='flex-shrink-0'><img src={Whatsapp} alt="" className='w-14' /></span>
                        </div>
                    </div>
                </div>
                <div className='border-2 border-[#cccccc] mt-2 px-2 py-5 rounded-xl'>
                    <div className='flex items-center justify-between mb-4'>
                        <div>
                            <span className='text-[22px] font-semibold text-blackColor'>Latest News</span>
                        </div>
                        <div>
                            <NavLink to='' className={`flex items-center gap-2 text-[14px] text-blackColor`}>
                            <span>See all</span>
                            <span><img src={ArrowRight} alt="" className='h-6' /></span>
                            </NavLink>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mt-2'>
                        <div className='flex-shrink-0 h-[100px] w-[100px] overflow-hidden rounded-xl'>
                            <span><img src={LatestImg1} alt="" className='w-full h-full object-cover' /></span>
                        </div>
                        <div>
                            <h4 className='text-[14px] font-semibold text-blackColor'>MediaTek Dimensity 9400 SoC Supports Multimodal Gemini Nano:</h4>
                            <p className='text-[14px] font-medium text-[#23262F99] mt-2'>TL;DR The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.....</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-2 mt-2'>
                        <div className='flex-shrink-0 h-[100px] w-[100px] overflow-hidden rounded-xl'>
                            <span><img src={LatestImg2} alt="" className='w-full h-full object-cover' /></span>
                        </div>
                        <div>
                            <h4 className='text-[14px] font-semibold text-blackColor'>UPI वालों के लिए खुशखबरी! नयी UPI लिमिट की हुई घोषणा, जानें किसे मिलेगा फायदा</h4>
                            <p className='text-[14px] font-medium text-[#23262F99] mt-2'>TL;DR The newly-launched Dimensity 9400 SoC comes with a lot of improvements in its processing and graphical prowess. However, the most exciting development seems to be the inclusion of on-device, multimodal.....</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#778899] p-4 rounded-xl'>
                <div>
                    <h3 className='text-[32px] font-semibold text-whiteColor text-center mb-2'>Top Stories</h3>
                    <div className='grid grid-cols-2 gap-2'>
                        <div className='bg-whiteColor p-[2px] rounded-xl overflow-hidden'>
                        <div className='relative w-full h-[13.5vw]'>
                            <img src={StoriesImg1} alt="" className='w-full h-full rounded-xl object-cover' />
                            <div className='absolute bottom-0 w-full bg-[#ffffffa2] text-blackColor font-semibold p-3'>
                                <p>12 Best Optical Zoom Camera Phones To Buy in 2023</p>
                            </div>
                        </div>
                        </div>
                        <div className='bg-whiteColor p-[2px] rounded-xl overflow-hidden'>
                        <div className='relative w-full h-[13.5vw]'>
                            <img src={StoriesImg2} alt="" className='w-full h-full rounded-xl object-cover' />
                            <div className='absolute bottom-0 w-full bg-[#ffffffa2] text-blackColor font-semibold p-3'>
                                <p>Apple iPhone 16 Review: Feels And Handles Like A Pro</p>
                            </div>
                        </div>
                        </div>
                        <div className='bg-whiteColor p-[2px] rounded-xl overflow-hidden'>
                        <div className='relative w-full h-[13.5vw]'>
                            <img src={StoriesImg3} alt="" className='w-full h-full rounded-xl object-cover' />
                            <div className='absolute bottom-0 w-full bg-[#ffffffa2] text-blackColor font-semibold p-3'>
                                <p>Apple iPhone 16 Pro Review: Still the King?</p>
                            </div>
                        </div>
                        </div>
                        <div className='bg-whiteColor p-[2px] rounded-xl overflow-hidden'>
                        <div className='relative w-full h-[13.5vw]'>
                            <img src={StoriesImg1} alt="" className='w-full h-full rounded-xl object-cover' />
                            <div className='absolute bottom-0 w-full bg-[#ffffffa2] text-blackColor font-semibold p-3'>
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