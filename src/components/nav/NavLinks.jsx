import React from 'react'
import DownArrow from '../../assets/downarrow.svg'
import Home from '../../assets/home.svg'
import { NavLink } from 'react-router-dom'

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
        {
            title: 'Electronics & More',
            dropdownItems: ['Demos 1', 'Demos 2', 'Demos 3']
        },
        {
            title: 'Campare',
            dropdownItems: ['Demos 1', 'Demos 2', 'Demos 3']
        },
        {
            title: 'Coupons',
            dropdownItems: ['Demos 1', 'Demos 2', 'Demos 3']
        },
    ];

    return (
        <div>
            <div className='flex items-center justify-between h-[40px] bg-buttonColor px-7 gap-7'>
                <div className='flex items-center justify-center h-[32px] w-[32px] rounded-md flex-shrink-0 bg-whiteColor'>
                    <img src={Home} alt="" />
                </div>

                <ul className='flex items-center justify-between w-full'>
                    {navItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <span className='w-[1px] h-[25px] bg-whiteColor'></span>
                            <li>
                                <NavLink to='#' className='relative group text-[14px] flex items-center gap-2'>
                                    <span className='text-whiteColor font-semibold'>{item.title}</span> <span><img src={DownArrow} alt="" /></span>
                                    <div className='absolute top-[100%] hidden group-hover:flex flex-col gap-2 whitespace-nowrap bg-buttonColor text-whiteColor py-2 rounded-md'>
                                        {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                            <span key={dropdownIndex}><a href="/#" className='px-6'>{dropdownItem}</a></span>
                                        ))}
                                    </div>
                                </NavLink>
                            </li>
                            
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default NavLinks