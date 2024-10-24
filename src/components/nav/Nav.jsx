import React, { useState } from 'react'
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
import Heart from '../../assets/Heart.png'
import Humburger from '../../assets/Hamburger Menu.png'
import Horizontal from '../../assets/Transfer Horizontal.png'
import SearchMb from '../../assets/magnifying-glass.png'
import LoginMb from '../../assets/Login.png'
import UserOutline from '../../assets/User Roundedfd.png'
import HeartOutline from '../../assets/Heartfd.svg'
import HandMoney from '../../assets/Hand Money.svg'
import Close from '../../assets/Close Circle.svg'
import Clock from '../../assets/350, Clock, electric, time, machine.svg'
import Arrow from '../../assets/downarrow.svg'
import InfoCircle from '../../assets/Info Circle.png'
import Letter from '../../assets/Letter.png'
import QuestionCircle from '../../assets/Question Circle.png'
import UserGroup from '../../assets/Users Group Two Rounded.png'
import Download from '../../assets/Download Square.png'
import Help from '../../assets/Help.png'
import Deals from '../../assets/318, Bag, Favorite, Shopping, Purchase.svg'
import Calender from '../../assets/74, Summer, Calendar, Date.svg'
import Hotel from '../../assets/hotel.svg'
import Mobile from '../../assets/307, Banking, Online, Payment, Shopping.svg'
import Car from '../../assets/cars.svg'
import Bike from '../../assets/bichbike.svg'
import Laptop from '../../assets/301, Box, Drop Shipper, E-Commerce, Laptop, Online.png'
import Machines from '../../assets/macshine.svg'
import Tablet from '../../assets/765, Screen, Television, Tv.svg'


function Nav() {

  const accordionDataOne = [
    {
      id: 0,
      title: 'Deals',
      icon: Deals,
      content: [
        { text: 'demo 1', url: '/demo1' },
        { text: 'demo 2', url: '/demo2' },
        { text: 'demo 3', url: '/demo3' }
      ],
    },
    {
      id: 1,
      title: 'News',
      icon: Clock,
      content: [
        { text: 'offer 1', url: '/offer1' },
        { text: 'offer 2', url: '/offer2' },
        { text: 'offer 3', url: '/offer3' }
      ],
    },
    {
      id: 2,
      title: 'Flights',
      icon: Calender,
      content: [
        { text: 'discount 1', url: '/discount1' },
        { text: 'discount 2', url: '/discount2' },
        { text: 'discount 3', url: '/discount3' }
      ],
    },
    {
      id: 3,
      title: 'Hotels',
      icon: Hotel,
      content: [
        { text: 'discount 1', url: '/discount1' },
        { text: 'discount 2', url: '/discount2' },
        { text: 'discount 3', url: '/discount3' }
      ],
    },
    {
      id: 4,
      title: 'Mobiles',
      icon: Mobile,
      content: [
        { text: 'discount 1', url: '/discount1' },
        { text: 'discount 2', url: '/discount2' },
        { text: 'discount 3', url: '/discount3' }
      ],
    },
    {
      id: 5,
      title: 'Cars',
      icon: Car,
      content: [
        { text: 'discount 1', url: '/discount1' },
        { text: 'discount 2', url: '/discount2' },
        { text: 'discount 3', url: '/discount3' }
      ],
    },
    {
      id: 6,
      title: 'Bikes',
      icon: Bike,
      content: [
        { text: 'discount 1', url: '/discount1' },
        { text: 'discount 2', url: '/discount2' },
        { text: 'discount 3', url: '/discount3' }
      ],
    },
    {
      id: 7,
      title: 'Laptops',
      icon: Laptop,
      content: [
        { text: 'discount 1', url: '/discount1' },
        { text: 'discount 2', url: '/discount2' },
        { text: 'discount 3', url: '/discount3' }
      ],
    },
    {
      id: 8,
      title: 'Machines',
      icon: Machines,
      content: [
        { text: 'discount 1', url: '/discount1' },
        { text: 'discount 2', url: '/discount2' },
        { text: 'discount 3', url: '/discount3' }
      ],
    },
    {
      id: 9,
      title: 'Tablets',
      icon: Tablet,
      content: [
        { text: 'discount 1', url: '/discount1' },
        { text: 'discount 2', url: '/discount2' },
        { text: 'discount 3', url: '/discount3' }
      ],
    },
    
    // Add more accordions as needed
  ];

  const accordionDataTwo = [
    {
      id: 0,
      title: 'About',
      icon: InfoCircle,
      content: [
        { text: 'demo 1', url: '/demo1' },
        { text: 'demo 2', url: '/demo2' },
        { text: 'demo 3', url: '/demo3' }
      ],
    },
    {
      id: 1,
      title: 'Contact us',
      icon: Letter,
      content: [
        { text: 'offer 1', url: '/offer1' },
        { text: 'offer 2', url: '/offer2' },
        { text: 'offer 3', url: '/offer3' }
      ],
    },
    {
      id: 2,
      title: 'FAQs',
      icon: QuestionCircle,
      content: [
        { text: 'discount 1', url: '/discount1' },
        { text: 'discount 2', url: '/discount2' },
        { text: 'discount 3', url: '/discount3' }
      ],
    },
    {
      id: 3,
      title: 'Testimonial',
      icon: UserGroup,
      content: [
        { text: 'discount 1', url: '/discount1' },
        { text: 'discount 2', url: '/discount2' },
        { text: 'discount 3', url: '/discount3' }
      ],
    },
    {
      id: 4,
      title: 'Download Mobile App',
      icon: Download,
      content: [
        { text: 'discount 1', url: '/discount1' },
        { text: 'discount 2', url: '/discount2' },
        { text: 'discount 3', url: '/discount3' }
      ],
    },
    {
      id: 5,
      title: 'Download Browser Extention',
      icon: Help,
      content: [
        { text: 'discount 1', url: '/discount1' },
        { text: 'discount 2', url: '/discount2' },
        { text: 'discount 3', url: '/discount3' }
      ],
    },
    
    // Add more accordions as needed
  ];

  const [isFirstTabActive, setIsFirstTabActive] = useState(true);

  const [openIndex, setOpenIndex] = useState(null);

  const handleAccordionClick = (index) => {
      setOpenIndex(openIndex === index ? null : index); // Toggle accordion
  };

    const [openIndexs, setOpenIndexs] = useState(null);

  const handleAccordionClicks = (indexs) => {
      setOpenIndexs(openIndexs === indexs ? null : indexs); // Toggle accordion
  };




  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };


  return (
    <div>
      <header className=''>
        <nav className='lg:flex items-center justify-between bg-buttonColor h-[40px] px-2 hidden'>
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

        <div className='px-2 pl-1 h-[50px] bg-whiteColor flex items-center justify-between gap-[3vw] lg:gap-0'>
          {/* menu mobile devices */}
          <div className='flex-shrink-0 cursor-pointer' onClick={openMenu}>
            <img src={Humburger} alt="" className='w-8' />
          </div>

          <div className=''>
            <span><img src={Logo} alt="" className='md:h-14 h-20' /></span>
          </div>

          <div className='max-w-[630px] h-[40px] w-full lg:flex items-center hidden'>
            <div className='h-full relative w-fit flex-shrink-0'>
              <select name="" id="" className='h-full bg-buttonColor text-whiteColor px-2 outline-none text-[14px] whitespace-nowrap w-full gap-2'>
                <option value="1">All Categories</option>
                <option value="2">demo 1</option>
                <option value="3">demo 2</option>
                <option value="3">demo 3</option>
              </select>
              {/* <button className='h-full bg-buttonColor text-whiteColor px-2 outline-none text-[14px] whitespace-nowrap flex items-center justify-between flex-nowrap w-full gap-2'><span></span> <span className={`w-5 inline-block transition-transform duration-150 origin-center`}><img src={CaratDown} alt="" className='w-5 invert' />All Categories</span></button> */}


            </div>
            <div className='w-full h-full'>
              <input type="text" placeholder='Location: City, State, Zip' className='text-blackColor text-[14px] outline-none border border-buttonColor w-full h-full px-3' />
            </div>
            <button className='bg-buttonColor h-full w-[56px] flex-shrink-0 lg:flex items-center justify-center hidden'><img src={Search} alt="" className='w-7 border-none outline-none' /></button>
          </div>

          <div className='lg:flex items-center justify-between gap-6 h-[40px] border-[1.5px] border-[#EDEFF2] px-2 hidden'>
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

          {/* mobile device screen  */}

          <div className='w-full flex items-center justify-end gap-1 lg:hidden'>
            <div className='flex-shrink-0 w-[36px] h-[36px] bg-[#F1F6FC] rounded-full flex items-center justify-center cursor-pointer'>
              <img src={Heart} alt="" className='w-6' />
            </div>
            <div className='flex-shrink-0 w-[36px] h-[36px] bg-[#F1F6FC] rounded-full flex items-center justify-center cursor-pointer'>
            <img src={Horizontal} alt="" className='w-6' />
            </div>
            <div className='flex-shrink-0 w-[36px] h-[36px] bg-[#F1F6FC] rounded-full flex items-center justify-center cursor-pointer'>
            <img src={User} alt="" className='w-6' />
            </div>
            <div className='flex-shrink-0 w-[36px] h-[36px] bg-[#F1F6FC] rounded-full flex items-center justify-center cursor-pointer'>
            <img src={SearchMb} alt="" className='w-6' />
            </div>
          </div>

        </div>
      </header>


      {/* mobile list menu  */}

      <div className={`fixed top-[50px] left-0 w-full h-full z-[1000] p-2 transition-all duration-300 ${isOpen ? 'left-0' : 'left-[-100%]'}`}>
      <div className=' bg-whiteColor px-2 pt-12 rounded-md h-full'>
        <div>
          <div className='grid grid-cols-5 items-end gap-2 mb-3'>
            <div className='flex-shrink-0 flex flex-col justify-center items-center cursor-pointer'>
              <span className='inline-flex items-center justify-center w-[40px] h-[40px] bg-[#F1F6FC] rounded-full'>
                <img src={LoginMb} alt="" className='h-6' />
              </span>
              <span className='text-[10px] font-semibold text-blackColor'>Login</span>
            </div>
            <div className='flex-shrink-0 flex flex-col justify-center items-center cursor-pointer'>
              <span className='inline-flex items-center justify-center w-[40px] h-[40px] bg-[#F1F6FC] rounded-full'>
                <img src={UserOutline} alt="" className='h-6' />
              </span>
              <span className='text-[10px] font-semibold text-blackColor'>Sign Up</span>
            </div>
            <div className='flex-shrink-0 flex flex-col justify-center items-center cursor-pointer'>
              <span className='inline-flex items-center justify-center w-[40px] h-[40px] bg-[#F1F6FC] rounded-full'>
                <img src={HeartOutline} alt="" className='h-6' />
              </span>
              <span className='text-[10px] font-semibold text-blackColor'>Saved</span>
            </div>
            <div className='flex-shrink-0 flex flex-col justify-center items-center cursor-pointer'>
              <span className='inline-flex items-center justify-center w-[40px] h-[40px] bg-[#F1F6FC] rounded-full'>
                <img src={Horizontal} alt="" className='h-6' />
              </span>
              <span className='text-[10px] font-semibold text-blackColor'>Compare</span>
            </div>
            <div className='flex-shrink-0 flex flex-col justify-center items-center cursor-pointer'>
              <span className='inline-flex items-center justify-center w-[40px] h-[40px] bg-[#F1F6FC] rounded-full'>
                <img src={HandMoney} alt="" className='h-6' />
              </span>
              <span className='text-[10px] font-semibold text-blackColor'>Cashback</span>
            </div>
            
          </div>

          {/* tab one  */}
          <div className='h-full'>
          <div className='grid grid-cols-2'>
        <div
          className={`py-2 border-2 border-borderColor text-center text-[14px] font-semibold cursor-pointer ${isFirstTabActive ? 'bg-lightOrange text-whiteColor border-lightOrange' : 'bg-whiteColor text-blackColor'}`}
          onClick={() => setIsFirstTabActive(true)} // Activates first tab
        >
          All Categories
        </div>
        <div
          className={`py-2 border-2 text-center text-[14px] font-semibold text-blackColor cursor-pointer ${isFirstTabActive ? 'bg-whiteColor text-blackColor border-borderColor' : 'bg-lightOrange text-whiteColor border-lightOrange'}`}
          onClick={() => setIsFirstTabActive(false)} // Activates second tab
        >
          About Us
        </div>
      </div>

      {/* Tab content */}
      <div className='mt-4 overflow-y-auto h-[55vh]'>
        {isFirstTabActive ? (
          <div className='first flex flex-col gap-2'>
            {accordionDataOne.map((accordion, index) => (
              <div key={accordion}>
              <div onClick={() => handleAccordionClick(index)} className='flex w-full items-center justify-between bg-[#F1F6FC] p-2 cursor-pointer'>
                <div className='w-full flex items-center gap-2'>
                  <span className='flex-shrink-0 w-[35px] h-[35px] bg-white inline-flex items-center justify-center rounded-full'>
                    <img src={accordion.icon} alt="" className='w-5' />
                  </span>
                  <span className='text-[14px] text-blackColor font-medium'>{accordion.title}</span>
                </div>
                <span className={`block transition-all duration-300 md:hidden ${openIndex === index ? 'rotate-0' : '-rotate-90'}`}><img src={Arrow} alt="" className='invert' /></span>
              </div>
              <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out text-[16px] font-normal text-blackColor ${openIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className='px-3 py-2'>
                {accordion.content.map((item, idex) => (
                  <div key={idex}>{item.text}</div>
                ))}
                </div>
              </div>
            </div>
            ))}
          </div>
        ) : (
          <div className='second flex flex-col gap-2'>
            {accordionDataTwo.map((accordions, indexs) => (
              <div key={accordions}>
              <div onClick={() => handleAccordionClicks(indexs)} className='flex w-full items-center justify-between bg-[#F1F6FC] p-2 cursor-pointer'>
                <div className='w-full flex items-center gap-2'>
                  <span className='flex-shrink-0 w-[35px] h-[35px] bg-white inline-flex items-center justify-center rounded-full'>
                    <img src={accordions.icon} alt="" className='w-5' />
                  </span>
                  <span className='text-[14px] text-blackColor font-medium'>{accordions.title}</span>
                </div>
                <span className={`block transition-all duration-300 md:hidden ${openIndexs === indexs ? 'rotate-0' : '-rotate-90'}`}><img src={Arrow} alt="" className='invert' /></span>
              </div>
              <div className={`overflow-hidden transition-[max-height] duration-500 ease-in-out text-[16px] font-normal text-blackColor ${openIndexs === indexs ? 'max-h-[500px]' : 'max-h-0'}`}>
                <div className='px-3 py-2'>
                {accordions.content.map((items, idexs) => (
                  <div key={idexs}>{items.text}</div>
                ))}
                </div>
              </div>
            </div>
            ))}
          </div>
        )}
      </div>

          </div>
        </div>

        <div className='absolute right-2 top-2 cursor-pointer' onClick={closeMenu}>
              <span className='inline-flex items-center justify-center w-[40px] h-[40px] rounded-full'>
                <img src={Close} alt="" className='h-8' />
              </span>
            </div>
      </div>
      </div>
    </div>
  )
}

export default Nav