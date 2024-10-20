import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import CharatOrange from '../../assets/charat-down-orange.svg'
import Samsang1 from '../../assets/image 11.png'
import Samsang2 from '../../assets/image 15.png'
import Samsang3 from '../../assets/image 13.png'
import Samsang4 from '../../assets/image 14.png'

import Arrow from '../../assets/downarrow.svg';

import mobile from '../../assets/307, Banking, Online, Payment, Shopping.svg' // Assuming this is the correct path
import car from '../../assets/cars.svg' 
import calender from '../../assets/calender.svg' 
import bike from '../../assets/bichbike.svg' 
import laptop from '../../assets/301, Box, Drop Shipper, E-Commerce, Laptop, Online.png' 
import hotel from '../../assets/hotel.svg' 
import mashin from '../../assets/macshine.svg' 
import tablet from '../../assets/765, Screen, Television, Tv.svg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';

function PopularComparisons() {

    const [swiper, setSwiper] = useState(null);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [isAtBeginning, setIsAtBeginning] = useState(true);

    // const [selectedData, setSelectedData] = useState('mobiles') 
    // Default selected data is 'mobiles'

    const popularComparison = [
        { id: 'PCitem1', label: 'Mobiles', imgSrc: mobile, data: 'PCmobiles', defaultChecked: true },
        { id: 'PCitem2', label: 'Cars', imgSrc: car, data: 'PCcars', defaultChecked: false },
        { id: 'PCitem3', label: 'Flight', imgSrc: calender, data: 'PCflights', defaultChecked: false },
        { id: 'PCitem4', label: 'Bikes', imgSrc: bike, data: 'PCbikes', defaultChecked: false },
        { id: 'PCitem5', label: 'Laptops', imgSrc: laptop, data: 'PClaptops', defaultChecked: false },
        { id: 'PCitem6', label: 'Hotels', imgSrc: hotel, data: 'PChotels', defaultChecked: false },
        { id: 'PCitem7', label: 'Washing Machines', imgSrc: mashin, data: 'PCwashing-machines', defaultChecked: false },
        { id: 'PCitem8', label: 'Tablets', imgSrc: tablet, data: 'PCtablets', defaultChecked: false },
        // { id: 'item9', label: 'Tablets', imgSrc: mobile, data: 'Tablets' },
        // { id: 'item10', label: 'Tablets', imgSrc: mobile, data: 'Tablets' },
        // { id: 'item11', label: 'Tablets', imgSrc: mobile, data: 'Tablets' },
        // { id: 'item12', label: 'Tablets', imgSrc: mobile, data: 'Tablets' },
    ]

    const popularComparisonData = [
        { id: 'PCbox1', topLabelName: 'Samsang Glaxy', topBrandlName: 'S23 5G', leftImgSrc: Samsang1, bottomLabelName: 'Samsang Glaxy', bottomBrandlName: 'S23 5G', rightImgSrc: Samsang2, data: 'PCmobiles', to: '/#' },
        { id: 'PCbox2', topLabelName: 'Samsung Galaxy', topBrandlName: 'M55s', leftImgSrc: Samsang3, bottomLabelName: 'Samsang Glaxy', bottomBrandlName: 'M56s', rightImgSrc: Samsang4, data: 'PCmobiles', to: '/#' },
        { id: 'PCbox3', topLabelName: 'Samsang Glaxy', topBrandlName: 'S23 5G', leftImgSrc: Samsang1, bottomLabelName: 'Samsang Glaxy', bottomBrandlName: 'S23 5G', rightImgSrc: Samsang2, data: 'PCmobiles', to: '/#' },
        { id: 'PCbox4', topLabelName: 'Samsang Glaxy', topBrandlName: 'M55s', leftImgSrc: Samsang3, bottomLabelName: 'Samsang Glaxy', bottomBrandlName: 'M55s', rightImgSrc: Samsang4, data: 'PCmobiles', to: '/#' },
        // { id: 'box5', topLabelName: 'Samsang', topBrandlName: 'Galaxy S23 5G', topPriceName: 'Rs. 1 Lac', leftImgSrc: Samsang1, button: 'Compare Now', bottomLabelName: 'Samsang', bottomBrandlName: 'Galaxy S23 5G', bottomPriceName: 'Rs. 1 Lac', rightImgSrc: Samsang2, data: 'mobiles' },
        // { id: 'box6', topLabelName: 'Samsang', topBrandlName: 'Galaxy S23 5G', topPriceName: 'Rs. 1 Lac', leftImgSrc: Samsang1, button: 'Compare Now', bottomLabelName: 'Samsang', bottomBrandlName: 'Galaxy S23 5G', bottomPriceName: 'Rs. 1 Lac', rightImgSrc: Samsang2, data: 'mobiles' },
    ]

    const [selectedData, setSelectedData] = useState(
        popularComparison.find((item) => item.defaultChecked)?.data || 'PCmobiles'
    );
    const [activeProduct, setActiveProduct] = useState(
        popularComparison.find((item) => item.defaultChecked)?.id || 'PCitem1'
    );

    const handleProductChange = (event) => {
        setActiveProduct(event.target.id);
        setSelectedData(event.target.dataset.filter);
    };

    // Ensure the selected data appears first in the sorted list
    const filteredProductData = [...popularComparisonData].sort((a, b) =>
        a.data === selectedData ? -1 : b.data === selectedData ? 1 : 0
    ).reverse();

    return (
        <>
            <div className='my-7'>
                <h3 className='text-[30px] text-blackColor font-semibold px-2 mb-4 mt-9'>Popular Comparisons</h3>
                <div className='relative px-4'>
                    <Swiper
                        onSwiper={setSwiper}
                        slidesPerView="auto"
                        spaceBetween={10}
                        freeMode={true}
                        modules={[FreeMode, Navigation]}
                        // grabCursor={true}
                        onReachEnd={() => setIsAtEnd(true)}
                        onFromEdge={() => setIsAtEnd(false)}
                        onReachBeginning={() => setIsAtBeginning(true)}
                        onSlideChange={(swiper) => {
                            setIsAtEnd(swiper.isAtEnd);
                            setIsAtBeginning(swiper.isAtBeginning);
                        }}
                    >
                        {popularComparison.map((item) => (
                            <SwiperSlide key={item.id} className="!w-max">
                                <div>
                                    <input
                                        type="radio"
                                        name="poppularcomparision"
                                        id={item.id}
                                        className="peer hidden"
                                        onChange={handleProductChange}
                                        defaultChecked={item.defaultChecked}
                                        checked={activeProduct === item.id}
                                        data-filter={item.data}
                                    />
                                    <label
                                        htmlFor={item.id}
                                        className="peer-checked:text-lightBackground font-semibold peer-checked:bg-lightOrange flex items-center gap-x-1 px-2 py-1 rounded-md border border-[#EDEFF2] bg-[#FCFCFD] text-blackColor cursor-pointer"
                                        data-filter={item.data}
                                    >
                                        <span><img src={item.imgSrc} alt="" className="w-7 h-7" /></span>
                                        <span className="text-[18px]">{item.label}</span>
                                    </label>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Next button */}
                    {!isAtEnd && (
                        <div onClick={() => swiper.slideNext()} className=' w-[30px] h-[30px] border-borderColor border bg-lightBackground flex items-center justify-center cursor-pointer swiper-button-next-b absolute right-2 z-10 top-1/2 -translate-y-1/2'><img src={CharatOrange} alt="" className='w-5 -rotate-90' /></div>

                    )}

                    {/* Prev button */}
                    {!isAtBeginning && (
                        <div onClick={() => swiper.slidePrev()} className='flex-shrink-0 w-[30px] h-[30px] border-borderColor border bg-lightBackground flex items-center justify-center cursor-pointer swiper-button-next-b absolute left-2 z-10 top-1/2 -translate-y-1/2'><img src={CharatOrange} alt="" className='w-5 -rotate-90' /></div>
                    )}

                </div>

                <div className='relative px-2'>
                    <Swiper
                        slidesPerView={3.7}
                        spaceBetween={8}
                        freeMode={true}
                        navigation={{
                            nextEl: '.swiper-button-next-pc'
                        }}
                        modules={[FreeMode, Navigation]}
                        grabCursor={true}
                        className="mySwiper"
                    >
                        {filteredProductData.map((item) => (
                            <SwiperSlide key={item.id} data-box={item.data}>
                                <div className='my-5'>
                                    <div className='border-2 border-borderColor rounded-md'>
                                        <span></span>
                                        <div className='flex items-center gap-x-4 justify-center border-b border-borderColor bg-[#EDEFF2]'>
                                            <div className='p-4'>
                                                <img src={item.leftImgSrc} alt="" className='h-[110px]' />
                                            </div>
                                            <span className='inline-flex w-[32px] h-[32px] flex-shrink-0 bg-lightOrange border-2 border-[#E59400] rounded-full items-center justify-center leading-none text-whiteColor font-bold'>VS</span>
                                            <div className='p-4'>
                                                <img src={item.rightImgSrc} alt="" className='h-[110px]' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-center justify-between gap-y-2 border-t border-borderColor text-center font-semibold py-4 text-[22px] text-blackColor'>
                                        
                                                <div>
                                                    <div>{item.topLabelName}</div>
                                                    <div>{item.topBrandlName}</div>
                                                </div>
                                                <span className='inline-flex w-[32px] h-[32px] flex-shrink-0 bg-lightOrange border-2 border-[#E59400] rounded-full items-center justify-center leading-none text-whiteColor font-bold text-[16px]'>VS</span>
                                                <div>
                                                    <div>{item.bottomLabelName}</div>
                                                    <div>{item.bottomBrandlName}</div>
                                                </div>
                                            
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <div className='flex-shrink-0 w-[30px] h-[60px] rounded-md top-1/2 -translate-y-1/2 bg-lightOrange flex items-center justify-center cursor-pointer swiper-button-next-pc absolute right-2 z-10'><img src={Arrow} alt="" className='w-5 -rotate-90' /></div>
                </div>
            </div>
        </>
    )
}

export default PopularComparisons