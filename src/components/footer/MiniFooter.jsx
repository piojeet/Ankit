import React, { useState } from 'react'
import DownArrow from '../../assets/downarrow.svg'
import compare1 from '../../assets/image 33.png'
import compare2 from '../../assets/image 34.png'
import compare3 from '../../assets/image 36.png'
import compare4 from '../../assets/image 29.png'
import compare5 from '../../assets/image 30.png'
import compare6 from '../../assets/image 35.png'
import compare7 from '../../assets/image 37.png'
import { NavLink } from 'react-router-dom'

function MiniFooter() {
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <div className={`md:fixed hidden ${toggle ? 'w-[100px]' : 'w-full'} bottom-0 left-0 md:flex items-center justify-between px-2 h-[50px] bg-buttonColor z-50 border-t border-lightBackground gap-x-10 transition-all duration-200 ${toggle ? 'border-r overflow-hidden' : ''}`}>
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
                                <div className='text-lightBackground font-semibold text-[18px] h-full content-center bg-lightOrange px-4 rounded-e-md w-fit flex-shrink-0 block text-nowrap text-center cursor-pointer'><span>Submit</span></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* mobile mini footer  */}

            <div className='px-2 bg-whiteColor w-full h-[70px] flex items-end fixed bottom-0 left-0 z-50 md:hidden'>
                <div className='grid grid-cols-5 w-full'>
                    <NavLink to='/' className={({isActive}) => `flex flex-col justify-end items-center py-2 gap-1 ${isActive ? 'text-lightOrange' : 'text-blackColor'}`}>
                        <span className=''>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6204 1.93787C12.999 1.64343 13.5291 1.64343 13.9077 1.93787L23.3428 9.27629C23.5981 9.47491 23.7475 9.7803 23.7475 10.1038V21.6356C23.7475 22.4697 23.4161 23.2697 22.8263 23.8595C22.2365 24.4493 21.4366 24.7807 20.6025 24.7807H5.92562C5.0915 24.7807 4.29155 24.4493 3.70174 23.8595C3.11193 23.2697 2.78058 22.4697 2.78058 21.6356V10.1038C2.78058 9.7803 2.92994 9.47491 3.1853 9.27629L12.6204 1.93787ZM4.87727 10.6165V21.6356C4.87727 21.9137 4.98772 22.1803 5.18432 22.3769C5.38093 22.5735 5.64758 22.684 5.92562 22.684H20.6025C20.8805 22.684 21.1472 22.5735 21.3438 22.3769C21.5404 22.1803 21.6508 21.9137 21.6508 21.6356V10.6165L13.264 4.0935L4.87727 10.6165Z" fill="CurrentColor" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.07068 13.2489C9.07068 12.6699 9.54004 12.2006 10.119 12.2006H16.4091C16.9881 12.2006 17.4574 12.6699 17.4574 13.2489V23.7324C17.4574 24.3114 16.9881 24.7807 16.4091 24.7807C15.8301 24.7807 15.3608 24.3114 15.3608 23.7324V14.2973H11.1674V23.7324C11.1674 24.3114 10.698 24.7807 10.119 24.7807C9.54004 24.7807 9.07068 24.3114 9.07068 23.7324V13.2489Z" fill="currentColor" />
                            </svg>
                        </span>
                        <span className='text-[14px] font-medium'>Home</span>
                    </NavLink>
                    <NavLink to='/search' className={({isActive}) => `flex flex-col justify-end items-center py-2 gap-1 ${isActive ? 'text-lightOrange' : 'text-blackColor'}`}>
                        <span>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.5839 4.86207C7.53096 4.86207 4.24543 8.1476 4.24543 12.2005C4.24543 16.2534 7.53096 19.5389 11.5839 19.5389C15.6368 19.5389 18.9223 16.2534 18.9223 12.2005C18.9223 8.1476 15.6368 4.86207 11.5839 4.86207ZM2.14874 12.2005C2.14874 6.98963 6.37299 2.76538 11.5839 2.76538C16.7947 2.76538 21.019 6.98963 21.019 12.2005C21.019 17.4114 16.7947 21.6356 11.5839 21.6356C6.37299 21.6356 2.14874 17.4114 2.14874 12.2005Z" fill="currentColor" fill-opacity="0.8" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7657 17.3824C17.1751 16.973 17.8389 16.973 18.2483 17.3824L22.8086 21.9427C23.218 22.3521 23.218 23.0159 22.8086 23.4253C22.3992 23.8347 21.7354 23.8347 21.326 23.4253L16.7657 18.865C16.3563 18.4556 16.3563 17.7918 16.7657 17.3824Z" fill="currentColor" fill-opacity="0.8" />
                            </svg>

                        </span>
                        <span className='text-[14px] font-medium'>Search</span>
                    </NavLink>
                    <NavLink to='/history' className={({isActive}) => `flex flex-col justify-end items-center py-2 gap-1 ${isActive ? 'text-lightOrange' : 'text-blackColor'}`}>
                        <span className='text-whiteColor bg-lightOrange w-[60px] h-[60px] rounded-full flex items-center justify-center'>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.81525 20.2368L10.4343 19.4515L9.81525 20.2368ZM13.0004 6.1784L12.2799 6.87187C12.4684 7.06773 12.7285 7.1784 13.0004 7.1784C13.2722 7.1784 13.5323 7.06773 13.7209 6.87187L13.0004 6.1784ZM16.1855 20.2368L16.8046 21.0221L16.1855 20.2368ZM10.4343 19.4515C8.83273 18.1889 7.11899 16.9831 5.75716 15.4496C4.4296 13.9547 3.51703 12.2275 3.51703 9.99063H1.51703C1.51703 12.8517 2.71131 15.0318 4.26173 16.7776C5.77787 18.4849 7.71324 19.8531 9.19616 21.0221L10.4343 19.4515ZM3.51703 9.99063C3.51703 7.81578 4.74563 6.00304 6.40543 5.24434C8.00218 4.51446 10.1771 4.68721 12.2799 6.87187L13.7209 5.48494C11.1063 2.76847 8.03955 2.29834 5.57397 3.42536C3.17143 4.52357 1.51703 7.06751 1.51703 9.99063H3.51703ZM9.19616 21.0221C9.73119 21.4439 10.3191 21.9048 10.9183 22.2549C11.5172 22.6049 12.2223 22.9027 13.0004 22.9027V20.9027C12.7301 20.9027 12.3869 20.7967 11.9274 20.5281C11.4682 20.2598 10.9878 19.8878 10.4343 19.4515L9.19616 21.0221ZM16.8046 21.0221C18.2875 19.8531 20.2229 18.4849 21.739 16.7776C23.2894 15.0318 24.4837 12.8517 24.4837 9.99063H22.4837C22.4837 12.2275 21.5711 13.9547 20.2436 15.4496C18.8817 16.9831 17.168 18.1889 15.5664 19.4515L16.8046 21.0221ZM24.4837 9.99063C24.4837 7.06751 22.8293 4.52357 20.4268 3.42536C17.9612 2.29834 14.8945 2.76847 12.2799 5.48494L13.7209 6.87187C15.8236 4.68721 17.9985 4.51446 19.5953 5.24434C21.2551 6.00304 22.4837 7.81578 22.4837 9.99063H24.4837ZM15.5664 19.4515C15.013 19.8878 14.5325 20.2598 14.0734 20.5281C13.6138 20.7967 13.2707 20.9027 13.0004 20.9027V22.9027C13.7784 22.9027 14.4836 22.6049 15.0824 22.2549C15.6816 21.9048 16.2695 21.4439 16.8046 21.0221L15.5664 19.4515Z" fill="currentColor" />
                            </svg>

                        </span>
                        <span className='text-[14px] font-medium'>History</span>
                    </NavLink>
                    <NavLink to='/history2' className={({isActive}) => `flex flex-col justify-end items-center py-2 gap-1 ${isActive ? 'text-lightOrange' : 'text-blackColor'}`}>
                        <span>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3676 3.81373C8.15669 3.81373 3.93245 8.03798 3.93245 13.2488C3.93245 18.4597 8.15669 22.684 13.3676 22.684C18.5784 22.684 22.8027 18.4597 22.8027 13.2488C22.8027 8.03798 18.5784 3.81373 13.3676 3.81373ZM1.83575 13.2488C1.83575 6.88001 6.99872 1.71704 13.3676 1.71704C19.7364 1.71704 24.8994 6.88001 24.8994 13.2488C24.8994 19.6177 19.7364 24.7807 13.3676 24.7807C6.99872 24.7807 1.83575 19.6177 1.83575 13.2488Z" fill="currentColor" fill-opacity="0.8" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3676 5.9104C13.9465 5.9104 14.4159 6.37976 14.4159 6.95875V12.6009L18.0298 14.4078C18.5476 14.6668 18.7575 15.2965 18.4986 15.8143C18.2397 16.3322 17.61 16.5421 17.0921 16.2832L12.8987 14.1865C12.5436 14.0089 12.3192 13.6459 12.3192 13.2488V6.95875C12.3192 6.37976 12.7886 5.9104 13.3676 5.9104Z" fill="currentColor" fill-opacity="0.8" />
                            </svg>

                        </span>
                        <span className='text-[14px] font-medium'>History</span>
                    </NavLink>
                    <NavLink to='/profile' className={({isActive}) => `flex flex-col justify-end items-center py-2 gap-1 ${isActive ? 'text-lightOrange' : 'text-blackColor'}`}>
                        <span>
                            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.83587 16.8808C5.81888 15.8978 7.15213 15.3456 8.54233 15.3456H16.9291C18.3193 15.3456 19.6525 15.8978 20.6356 16.8808C21.6186 17.8639 22.1708 19.1971 22.1708 20.5873V22.684C22.1708 23.263 21.7015 23.7323 21.1225 23.7323C20.5435 23.7323 20.0741 23.263 20.0741 22.684V20.5873C20.0741 19.7532 19.7428 18.9532 19.153 18.3634C18.5632 17.7736 17.7632 17.4423 16.9291 17.4423H8.54233C7.70821 17.4423 6.90826 17.7736 6.31845 18.3634C5.72864 18.9532 5.39729 19.7532 5.39729 20.5873V22.684C5.39729 23.263 4.92793 23.7323 4.34894 23.7323C3.76996 23.7323 3.3006 23.263 3.3006 22.684V20.5873C3.3006 19.1971 3.85285 17.8639 4.83587 16.8808Z" fill="currentColor" fill-opacity="0.8" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.7357 4.86207C10.9988 4.86207 9.59071 6.27015 9.59071 8.00711C9.59071 9.74407 10.9988 11.1521 12.7357 11.1521C14.4727 11.1521 15.8808 9.74407 15.8808 8.00711C15.8808 6.27015 14.4727 4.86207 12.7357 4.86207ZM7.49402 8.00711C7.49402 5.11218 9.84082 2.76538 12.7357 2.76538C15.6307 2.76538 17.9775 5.11218 17.9775 8.00711C17.9775 10.902 15.6307 13.2488 12.7357 13.2488C9.84082 13.2488 7.49402 10.902 7.49402 8.00711Z" fill="currentColor" fill-opacity="0.8" />
                            </svg>

                        </span>
                        <span className='text-[14px] font-medium'>Profile</span>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default MiniFooter
