import React, { useState } from 'react'
import Logo from '../../assets/logotop.svg'
import FaceBook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import Wifi from '../../assets/wifi.svg'
import Linkedin from '../../assets/linkedin.svg'
import Pinterest from '../../assets/pintrest.svg'
import Google from '../../assets/google.svg'
import Arrow from '../../assets/downarrow.svg'

function MainFooter() {

    const [openIndex, setOpenIndex] = useState(null);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle accordion
    };


    return (
        <>
            <div className='px-2 bg-buttonColor pb-20 pt-5'>
                <div className='flex justify-start items-start gap-x-[8vw] md:flex-row flex-col border-b-2 border-[#ffffff3d] md:border-b-0 pb-8 md:pb-0'>
                    <div className='max-w-[400px] w-full'>
                        <div className='mb-4'><span className=' bg-lightBackground block w-fit rounded-md'><img src={Logo} alt="" className='md:w-fit w-[60vw]' /></span></div>
                        <p className='text-[16px] text-lightBackground font-normal hidden md:block'>Our portal combining more than 250 online stores lets you compare prices of a wide variety of products, creates price alert, and in addition to that give back Munafa points which can be redeemed in various forms.</p>
                        <div className='md:flex items-center gap-2 mt-2 hidden'>
                            <span><a href="/#"><img src={FaceBook} alt="" /></a></span>
                            <span><a href="/#"><img src={Instagram} alt="" /></a></span>
                            <span><a href="/#"><img src={Twitter} alt="" /></a></span>
                            <span><a href="/#"><img src={Wifi} alt="" /></a></span>
                            <span><a href="/#"><img src={Linkedin} alt="" /></a></span>
                            <span><a href="/#"><img src={Pinterest} alt="" /></a></span>
                            <span><a href="/#"><img src={Google} alt="" /></a></span>
                        </div>
                    </div>

                    <div className="w-full">
                        <h3
                            className="md:text-[22px] text-[20px] font-semibold text-lightBackground cursor-pointer md:cursor-text flex items-center justify-between w-full"
                            onClick={() => handleAccordionClick(0)}
                        >
                            <span>Special Pages</span>
                            <span className={`block transition-all duration-300 md:hidden ${openIndex === 0 ? 'rotate-0' : '-rotate-90'}`}><img src={Arrow} alt="" /></span>
                        </h3>
                        <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out text-[16px] font-normal text-lightBackground ${openIndex === 0 ? 'max-h-[500px]' : 'max-h-0 md:max-h-none'}`}>
                            <div className="mt-1 flex flex-col gap-1 text-[14px] md:text-[16px]">
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Invite Friends</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Corporate Gifting</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Deals Near Me</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Citywise Directory</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Alphabetical Directory</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Refer & Earn</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Careers</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Donate Cashback</span>
                            </div>
                        </div>
                    </div>

                    {/* About */}
                    <div className="w-full mt-4">
                        <h3
                            className="md:text-[22px] text-[20px] font-semibold text-lightBackground cursor-pointer md:cursor-text flex items-center justify-between w-full"
                            onClick={() => handleAccordionClick(1)}
                        >
                            <span>About</span>
                            <span className={`block transition-all duration-300 md:hidden ${openIndex === 1 ? 'rotate-0' : '-rotate-90'}`}><img src={Arrow} alt="" /></span>
                        </h3>
                        <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out text-[16px] font-normal text-lightBackground ${openIndex === 1 ? 'max-h-[500px]' : 'max-h-0 md:max-h-none'}`}>
                            <div className="mt-1 flex flex-col gap-1 text-[14px] md:text-[16px]">
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>About Us</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Contact Us</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Press</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Blog</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Testimonials</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>FAQ</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Sitemap</span>
                            </div>
                        </div>
                    </div>

                    {/* Customer List */}
                    <div className="w-full mt-4">
                        <h3
                            className="md:text-[22px] text-[20px] font-semibold text-lightBackground cursor-pointer md:cursor-text flex items-center justify-between w-full"
                            onClick={() => handleAccordionClick(2)}
                        >
                            <span>Customer List</span>
                            <span className={`block transition-all duration-300 md:hidden ${openIndex === 2 ? 'rotate-0' : '-rotate-90'}`}><img src={Arrow} alt="" /></span>
                        </h3>
                        <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out text-[16px] font-normal text-lightBackground ${openIndex === 2 ? 'max-h-[500px]' : 'max-h-0 md:max-h-none'}`}>
                            <div className="mt-1 flex flex-col gap-1 text-[14px] md:text-[16px]">
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>User Login</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>User Signup</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Dealer Login</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Dealer Signup</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Become a Partner</span>
                                <span className='cursor-pointer hover:text-[#b8b8b8]'>Student Program</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='md:hidden block my-8'>
                    <h4 className='text-[20px] font-semibold text-whiteColor'>Subscribe</h4>
                    <p className='font-medium text-[16px] text-[#ffffffad] my-2 mb-3'>Sign up to receive Latest Offers, Cashback &
                        Pricedrop Alerts.</p>

                    <div>
                        <form>
                            <div className='bg-whiteColor rounded-md overflow-hidden flex'>
                                <input type="text" className='py-1.5 text-[16px] font-medium px-4 w-full text-blackColor block outline-none border-none' placeholder='Enter your email...' />
                                <button className='bg-lightOrange text-whiteColor block text-[18px] px-4'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='flex items-center gap-2 mt-2 md:hidden border-t-2 border-[#ffffff3d] pt-4 pb-8'>
                    <span><a href="/#"><img src={FaceBook} alt="" /></a></span>
                    <span><a href="/#"><img src={Instagram} alt="" /></a></span>
                    <span><a href="/#"><img src={Twitter} alt="" /></a></span>
                    <span><a href="/#"><img src={Wifi} alt="" /></a></span>
                    <span><a href="/#"><img src={Linkedin} alt="" /></a></span>
                    <span><a href="/#"><img src={Pinterest} alt="" /></a></span>
                    <span><a href="/#"><img src={Google} alt="" /></a></span>
                </div>
            </div>
        </>
    )
}

export default MainFooter