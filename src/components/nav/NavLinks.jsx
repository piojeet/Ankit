import React, { useCallback, useEffect, useState } from 'react'
import DownArrow from '../../assets/downarrow.svg'
import Home from '../../assets/home.svg'
import BestOffers from '../../assets/best-offers.svg'
import { NavLink } from 'react-router-dom'
import Sumsong from '../../assets/sumsong.png'

function NavLinks() {
    const navItems = [
        {
            title: 'Car',
            dropdownItems: ['Demo 1', 'Demo 2', 'Demo 3']
        },
        {
            title: 'Bikes',
            dropdownItems: ['Demos 1', 'Demos 2', 'Demos 3']
        },
        {
            title: 'Insurance',
            dropdownItems: ['Demos 1', 'Demos 2', 'Demos 3']
        },
        {
            title: 'Mobiles',
            dropdownItems: ['Demos 1', 'Demos 2', 'Demos 3']
        },
        {
            title: 'Tablets',
            dropdownItems: ['Demos 1', 'Demos 2', 'Demos 3']
        },
        {
            title: 'TVs',
            dropdownItems: ['Demos 1', 'Demos 2', 'Demos 3']
        },
        {
            title: 'ACs',
            dropdownItems: ['Demos 1', 'Demos 2', 'Demos 3']
        },
        {
            title: 'Laptops',
            dropdownItems: ['Demos 1', 'Demos 2', 'Demos 3']
        },
        {
            title: 'Cameras',
            dropdownItems: ['Demos 1', 'Demos 2', 'Demos 3']
        },
        {
            title: 'Refrigerators',
            dropdownItems: ['Demos 1', 'Demos 2', 'Demos 3']
        },
        // {
        //     title: 'Electronics & More',
        //     dropdownItems: ['Demos 1', 'Demos 2', 'Demos 3']
        // },
    ];

    const [visibleCount, setVisibleCount] = useState(6);

    const updateVisibleCount = useCallback(() => {
        if (window.innerWidth < 423) {
          setVisibleCount(4);
        } else if (window.innerWidth < 768) {
          setVisibleCount(6);
        } else {
          setVisibleCount(navItems.length);
        }
     }, [navItems.length]);
    
    useEffect(() => {
      updateVisibleCount(); // Initial call to update count based on screen size
    
      const handleResize = () => {
        updateVisibleCount(); // Call on window resize
      };
    
      window.addEventListener('resize', handleResize);
    
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [updateVisibleCount]);
  


    return (
        <div>
            <div className='flex items-center justify-between h-[40px] bg-buttonColor px-4 gap-5 z-20'>
                <div className='flex items-center justify-center h-[32px] w-[32px] rounded-md flex-shrink-0 bg-whiteColor'>
                    <img src={Home} alt="" />
                </div>

                <ul className='flex items-center justify-between w-full'>
                    {navItems.slice(0, visibleCount).map((item, index) => (
                        <React.Fragment key={index}>
                            <span className='w-[1px] h-[25px] bg-whiteColor lg:block hidden'></span>
                            <li className='relative flex-shrink-0'>
                                <NavLink to='#' className='relative group text-[14px] flex items-center gap-2'>
                                    <span className='text-whiteColor font-semibold text-[14px] md:text-[14px] whitespace-nowrap'>{item.title}</span> <span className='md:block hidden'><img src={DownArrow} alt="" /></span>
                                    <div className='absolute top-[100%] hidden group-hover:flex flex-col gap-2 whitespace-nowrap bg-buttonColor text-whiteColor py-2 rounded-md left-0'>
                                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                            <span key={dropdownIndex}><a href="/#" className='px-6'>{dropdownItem}</a></span>
                                        ))}
                                    </div>
                                </NavLink>

                            </li>


                        </React.Fragment>
                    ))}

                    <li className='relative flex-shrink-0 md:hidden inline-block'>
                        <NavLink to='3' className='relative group text-[14px] flex items-center gap-2'>
                            <span className='text-whiteColor font-semibold text-[14px]'>More</span>
                        </NavLink>

                    </li>

                    <span className='w-[1px] h-[25px] bg-whiteColor lg:block hidden'></span>


                    <div className='lg:flex items-center justify-between hidden'>
                        <li>
                            <NavLink to='#' className='relative group text-[14px] flex items-center gap-2 px-2 h-[40px]'>
                                <span className='text-whiteColor font-semibold whitespace-nowrap text-[14px]'>Electronics & More</span> <span><img src={DownArrow} alt="" /></span>
                                <div className={`absolute right-0 top-[100%] z-50 bg-buttonColor w-[800px] hidden items-start justify-between group-hover:flex`}>
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
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='#' className='relative group text-[14px] flex items-center gap-2 px-2 bg-[#DC4F45] h-[40px]'>
                                <span className='text-whiteColor font-semibold text-[14px]'>Campare</span> <span><img src={DownArrow} alt="" /></span>
                                <div className='absolute top-[100%] hidden group-hover:flex flex-col gap-2 whitespace-nowrap bg-[#DC4F45] text-whiteColor py-2 rounded-md left-0'>

                                    <span><a href="/#" className='px-6'>Demo 1</a></span>
                                    <span><a href="/#" className='px-6'>Demo 2</a></span>
                                    <span><a href="/#" className='px-6'>Demo 3</a></span>

                                </div>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='#' className='relative group text-[14px] flex items-center gap-2 px-2 bg-[#C8DD16] h-[40px]'>
                                <span className='text-whiteColor font-semibold text-[14px]'>Coupons</span> <span><img src={DownArrow} alt="" /></span>
                                <div className='absolute top-[100%] hidden group-hover:flex flex-col gap-2 whitespace-nowrap bg-[#C8DD16] text-whiteColor py-2 rounded-md left-0'>

                                    <span><a href="/#" className='px-6'>Demo 1</a></span>
                                    <span><a href="/#" className='px-6'>Demo 2</a></span>
                                    <span><a href="/#" className='px-6'>Demo 3</a></span>

                                </div>
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to='#' className='text-[14px] font-semibold flex items-center gap-1 text-whiteColor pl-2'>
                                <span><img src={BestOffers} alt="" /></span>
                                <span>Best Offers</span>
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default NavLinks