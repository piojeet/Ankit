import React from 'react'
import Logo from '../../assets/logotop.svg'
import FaceBook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import Wifi from '../../assets/wifi.svg'
import Linkedin from '../../assets/linkedin.svg'
import Pinterest from '../../assets/pintrest.svg'
import Google from '../../assets/google.svg'

function MainFooter() {
  return (
    <>
    <div className='px-2 bg-buttonColor pb-20 pt-5'>
        <div className='flex justify-start items-start gap-x-[8vw]'>
            <div className='max-w-[400px] w-full'>
                <div className='mb-4'><span className=' bg-lightBackground block w-fit rounded-md'><img src={Logo} alt="" /></span></div>
                <p className='text-[16px] text-lightBackground font-normal'>Our portal combining more than 250 online stores lets you compare prices of a wide variety of products, creates price alert, and in addition to that give back Munafa points which can be redeemed in various forms.</p>
                <div className='flex items-center gap-2 mt-2'>
                    <span><a href="/#"><img src={FaceBook} alt="" /></a></span>
                    <span><a href="/#"><img src={Instagram} alt="" /></a></span>
                    <span><a href="/#"><img src={Twitter} alt="" /></a></span>
                    <span><a href="/#"><img src={Wifi} alt="" /></a></span>
                    <span><a href="/#"><img src={Linkedin} alt="" /></a></span>
                    <span><a href="/#"><img src={Pinterest} alt="" /></a></span>
                    <span><a href="/#"><img src={Google} alt="" /></a></span>
                </div>
            </div>
            <div>
                <h3 className='text-[22px] font-semibold text-lightBackground'>Special Pages</h3>
                <div className='text-[16px] font-normal text-lightBackground flex flex-col gap-1 mt-1'>
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
            <div>
                <h3 className='text-[22px] font-semibold text-lightBackground'>About</h3>
                <div className='text-[16px] font-normal text-lightBackground flex flex-col gap-1 mt-1'>
                    <span className='cursor-pointer hover:text-[#b8b8b8]'>About Us</span>
                    <span className='cursor-pointer hover:text-[#b8b8b8]'>Contact Us</span>
                    <span className='cursor-pointer hover:text-[#b8b8b8]'>Press</span>
                    <span className='cursor-pointer hover:text-[#b8b8b8]'>Blog</span>
                    <span className='cursor-pointer hover:text-[#b8b8b8]'>Testimonials</span>
                    <span className='cursor-pointer hover:text-[#b8b8b8]'>FAQ</span>
                    <span className='cursor-pointer hover:text-[#b8b8b8]'>Sitemap</span>
                </div>
            </div>
            <div>
                <h3 className='text-[22px] font-semibold text-lightBackground'>Customer List</h3>
                <div className='text-[16px] font-normal text-lightBackground flex flex-col gap-1 mt-1'>
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
    </>
  )
}

export default MainFooter