import React, { useEffect, useRef, useState } from 'react'
import FaceBook from '../../assets/facebook.svg'
import Instagram from '../../assets/instagram.svg'
import Twitter from '../../assets/twitter.svg'
import Wifi from '../../assets/wifi.svg'
import Linkedin from '../../assets/linkedin.svg'
import Pinterest from '../../assets/pintrest.svg'
import Google from '../../assets/google.svg'
import Whatsapp from '../../assets/whatsapp.svg'
import Telegram from '../../assets/telegram.svg'
import Key from '../../assets/key.svg'
import User from '../../assets/user.svg'
import Logo from '../../assets/logotop.svg'
import Search from '../../assets/search.svg'
import Anroid from '../../assets/android.svg'
import Apple from '../../assets/apple.svg'
import Chorom from '../../assets/chorom.svg'
import FirFox from '../../assets/firfox.svg'
import Sumsong from '../../assets/sumsong.png'
import CaratDown from '../../assets/carat-down.svg'

function Nav() {
  
  const [isVisible, setIsVisible] = useState(false); // Initially hidden
  const divRef = useRef(null);
  const buttonRef = useRef(null); // Ref for the button

  // Toggle visibility when button is clicked
  const toggleVisibility = () => {
    setIsVisible(!isVisible); // Toggle between visible and hidden
  };

  // Hide the div if clicking outside button or div
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the button and the div
      if (divRef.current && !divRef.current.contains(event.target) &&
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsVisible(false); // Hide the div if clicking outside
      }
    };

    // Add event listener for detecting outside clicks
    document.addEventListener('click', handleClickOutside);
    
    // Cleanup event listener when component unmounts
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <div>
      <header className=''>
        <nav className='flex items-center justify-between bg-buttonColor h-[40px] px-7'>
          <div className='flex items-center justify-start gap-2 h-full'>
            <div><a href="/"><img src={FaceBook} alt="" className='w-5 h-5 aspect-square' /></a></div>
            <div><a href="/"><img src={Instagram} alt="" className='w-5 h-5 aspect-square' /></a></div>
            <div><a href="/"><img src={Twitter} alt="" className='w-5 h-5 aspect-square' /></a></div>
            <div><a href="/"><img src={Wifi} alt="" className='w-5 h-5 aspect-square' /></a></div>
            <div><a href="/"><img src={Linkedin} alt="" className='w-5 h-5 aspect-square' /></a></div>
            <div><a href="/"><img src={Pinterest} alt="" className='w-5 h-5 aspect-square' /></a></div>
            <div><a href="/"><img src={Google} alt="" className='w-5 h-5 aspect-square' /></a></div>
          </div>

          <span className='h-[40px] w-[1px] bg-whiteColor'></span>

          <div className='flex items-center justify-between gap-2 h-full'>
            <p className='text-whiteColor text-[14px] font-semibold'>Join Whatsapp & Telegram Channel for Cashback & PriceDrop Alerts </p>
            <div className='flex items-center justify-between gap-2'>
              <div><a href="/"><img src={Whatsapp} alt="" className='w-5 h-5 aspect-square' /></a></div>
              <div><a href="/"><img src={Telegram} alt="" className='w-5 h-5 aspect-square' /></a></div>
            </div>
          </div>

          <span className='h-[40px] w-[1px] bg-whiteColor'></span>

          <div className='text-whiteColor text-[14px] cursor-pointer h-full content-center font-semibold'>
            Refer & Earn
          </div>

          <span className='h-[40px] w-[1px] bg-whiteColor'></span>

          <div className='flex items-center justify-between gap-2 text-[14px] text-lightOrange cursor-pointer h-full content-center font-semibold'>
            <span><img src={Key} alt="" className='w-5' /></span>
            <span>Login</span>
          </div>

          <span className='h-[40px] w-[1px] bg-whiteColor'></span>

          <div className='flex items-center justify-between gap-2 text-[14px] text-lightOrange cursor-pointer h-full content-center font-semibold'>
            <span><img src={User} alt="" className='w-5' /></span>
            <span>Register</span>
          </div>

          <span className='h-[40px] w-[1px] bg-whiteColor'></span>

          <div className='text-[14px] text-whiteColor cursor-pointer h-full content-center font-semibold'>
            Become Partner
          </div>

          <span className='h-[40px] w-[1px] bg-whiteColor'></span>

          <div className='text-[14px] text-whiteColor cursor-pointer h-full content-center font-semibold'>
            Dealer Inquiry
          </div>
        </nav>

        <div className='px-7 pl-5 h-[64px] bg-whiteColor flex items-center justify-between'>
          <div className=''>
            <img src={Logo} alt="" className='h-14' />
          </div>

          <div className='max-w-[630px] h-[40px] w-full flex items-center bg-red-400'>
            <div className='h-full relative w-fit'>
              <button className='h-full bg-buttonColor text-whiteColor px-2 outline-none text-[14px] whitespace-nowrap flex items-center justify-between flex-nowrap w-full gap-2' onClick={toggleVisibility} ref={buttonRef}><span>All Categories</span> <span className={`w-5 inline-block transition-transform duration-150 origin-center ${isVisible ? 'rotate-180' : ''}`}><img src={CaratDown} alt="" className='w-5 invert' /></span></button>

              <div ref={divRef} className={`absolute top-[100%] z-50 bg-buttonColor w-[800px] flex items-start justify-between ${isVisible ? 'block' : 'hidden'}`}>
                <div className='w-full p-4 text-whiteColor'>
                  <div className='whitespace-nowrap flex items-start justify-between'>
                    <div>
                      <h3 className='text-[25px] font-semibold'>Mobile Phones</h3>
                      <ul className='list-disc pl-5 text-[14px] font-semibold'>
                        <li>demo 1</li>
                        <li>demo 2</li>
                        <li>demo 3</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className='text-[25px] font-semibold'>Mobile Phones</h3>
                      <ul className='list-disc pl-5 text-[14px] font-semibold'>
                        <li>demo 1</li>
                        <li>demo 2</li>
                        <li>demo 3</li>
                      </ul>
                    </div>
                  </div>

                  <div className='flex items-start justify-between mt-4'>
                    <div className='whitespace-nowrap'>
                      <h3 className='text-[25px] font-semibold'>Mobile Phones</h3>
                      <ul className='list-disc pl-5 text-[14px] font-semibold'>
                        <li>demo 1</li>
                        <li>demo 2</li>
                        <li>demo 3</li>
                      </ul>
                    </div>
                    <div className='whitespace-nowrap'>
                      <h3 className='text-[25px] font-semibold'>Mobile Phones</h3>
                      <ul className='list-disc pl-5 text-[14px] font-semibold'>
                        <li>demo 1</li>
                        <li>demo 2</li>
                        <li>demo 3</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='w-[250px] bg-whiteColor h-full flex-shrink-0 border border-buttonColor'>
                  <div className='flex items-center justify-between p-5'>
                    <div><img src={Sumsong} alt="" className='w-12' /></div>
                    <div>
                      <p>Samsang</p>
                      <p>Galaxy S23 5G</p>
                      <p>Rs. 1 Lac</p>
                    </div>
                  </div>

                  <div className='flex items-center justify-between p-5'>
                    <div><img src={Sumsong} alt="" className='w-12' /></div>
                    <div>
                      <p>Samsang</p>
                      <p>Galaxy S23 5G</p>
                      <p>Rs. 1 Lac</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full h-full'>
              <input type="text" placeholder='Location: City, State, Zip' className='text-blackColor text-[14px] outline-none border border-buttonColor w-full h-full px-3' />
            </div>
            <button className='bg-buttonColor h-full w-[56px] flex-shrink-0 flex items-center justify-center'><img src={Search} alt="" className='w-7 border-none outline-none' /></button>
          </div>

          <div className='flex items-center justify-between gap-6 h-[40px] border-[1.5px] border-[#EDEFF2] px-2'>
            <div className='flex items-center justify-between gap-2'>
              <span className='text-[14px] font-semibold text-blackColor'>Mobile App</span>
              <div className='flex items-center justify-between gap-2'>
                <div><a href="/#" className='w-[28px] h-[28px] bg-buttonColor inline-flex items-center justify-center rounded-full'><img src={Anroid} alt="" className='w-4' /></a></div>
                <div><a href="/#" className='w-[28px] h-[28px] bg-buttonColor inline-flex items-center justify-center rounded-full'><img src={Apple} alt="" className='w-4' /></a></div>
              </div>
            </div>
            <div className='flex items-center justify-between gap-2'>
              <span className='text-[14px] font-semibold text-blackColor'>Browser Extension</span>
              <div className='flex items-center justify-between gap-2'>
                <div><a href="/#" className='w-[28px] h-[28px] bg-buttonColor inline-flex items-center justify-center rounded-full'><img src={Chorom} alt="" className='w-5' /></a></div>
                <div><a href="/#" className='w-[28px] h-[28px] bg-buttonColor inline-flex items-center justify-center rounded-full'><img src={FirFox} alt="" className='w-5' /></a></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Nav