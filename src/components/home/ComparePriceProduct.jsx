import React, { useState } from 'react'
import mobile from '../../assets/307, Banking, Online, Payment, Shopping.svg' // Assuming this is the correct path
import car from '../../assets/cars.svg'
import calender from '../../assets/calender.svg'
import bike from '../../assets/bichbike.svg'
import laptop from '../../assets/301, Box, Drop Shipper, E-Commerce, Laptop, Online.png'
import hotel from '../../assets/hotel.svg'
import mashin from '../../assets/macshine.svg'
import tablet from '../../assets/765, Screen, Television, Tv.svg'
import CharatOrange from '../../assets/charat-down-orange.svg'
import Samsang1 from '../../assets/image 11.png'
import Samsang2 from '../../assets/image 15.png'
import Car1 from '../../assets/pngwing.com (2).png'
import Car2 from '../../assets/pngwing.com (4).png'
import Bike1 from '../../assets/pngwing.com (22).png'
import Bike2 from '../../assets/pngwing.com (20) 1.png'
import Laptop1 from '../../assets/pngwing.com (29).png'
import Laptop2 from '../../assets/pngwing.com (27).png'
import Arrow from '../../assets/downarrow.svg';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

function ComparePriceProduct() {

    const [swiper, setSwiper] = useState(null);
    const [isEnd, setIsEnd] = useState(false);
    const [isBeginning, setIsBeginning] = useState(true);

    // const [selectedData, setSelectedData] = useState('mobiles') // Default selected data is 'mobiles'

    const comparePriceProduct = [
        { id: 'item1', label: 'Mobiles', imgSrc: mobile, data: 'mobiles', defaultChecked: false },
        { id: 'item2', label: 'Cars', imgSrc: car, data: 'cars', defaultChecked: false },
        { id: 'item3', label: 'Flight', imgSrc: calender, data: 'Flights', defaultChecked: false },
        { id: 'item4', label: 'Bikes', imgSrc: bike, data: 'Bikes', defaultChecked: false },
        { id: 'item5', label: 'Laptops', imgSrc: laptop, data: 'Laptops', defaultChecked: true },
        { id: 'item6', label: 'Hotels', imgSrc: hotel, data: 'Hotels', defaultChecked: false },
        { id: 'item7', label: 'Washing Machines', imgSrc: mashin, data: 'washing-machines', defaultChecked: false },
        { id: 'item8', label: 'Tablets', imgSrc: tablet, data: 'Tablets', defaultChecked: false },
        // { id: 'item9', label: 'Tablets', imgSrc: mobile, data: 'Tablets' },
        // { id: 'item10', label: 'Tablets', imgSrc: mobile, data: 'Tablets' },
        // { id: 'item11', label: 'Tablets', imgSrc: mobile, data: 'Tablets' },
        // { id: 'item12', label: 'Tablets', imgSrc: mobile, data: 'Tablets' },
    ]

    const comparePriceProductData = [
        { id: 'box1', topLabelName: 'Samsang', topBrandlName: 'Galaxy S23 5G', topPriceName: 'Rs. 1 Lac', topImgSrc: Samsang1, button: 'Compare Now', bottomLabelName: 'Samsang', bottomBrandlName: 'Galaxy S23 5G', bottomPriceName: 'Rs. 1 Lac', bottomImgSrc: Samsang2, data: 'mobiles', to: '/#' },
        { id: 'box2', topLabelName: 'Proton X70', topBrandlName: 'Executive AWD', topPriceName: 'Rs. 87.99 lacs', topImgSrc: Car1, button: 'Compare Now', bottomLabelName: 'MG HS', bottomBrandlName: '1.5 Turbo', bottomPriceName: 'Rs. 89 lacs', bottomImgSrc: Car2, data: 'cars', to: '/#' },
        { id: 'box3', topLabelName: 'Proton X70', topBrandlName: 'Executive AWD', topPriceName: 'Rs. 87.99 lacs', topImgSrc: Bike1, button: 'Compare Now', bottomLabelName: 'MG HS', bottomBrandlName: '1.5 Turbo', bottomPriceName: 'Rs. 89 lacs', bottomImgSrc: Bike2, data: 'Bikes', to: '/#' },
        { id: 'box4', topLabelName: 'ASUS', topBrandlName: 'GL702 i7', topPriceName: 'Rs. 46,000', topImgSrc: Laptop1, button: 'Compare Now', bottomLabelName: 'Samsung', bottomBrandlName: 'Intel Core i7', bottomPriceName: 'Rs. 45,000', bottomImgSrc: Laptop2, data: 'Laptops', to: '/#' },
        { id: 'box5', topLabelName: 'Samsang', topBrandlName: 'Galaxy S23 5G', topPriceName: 'Rs. 1 Lac', topImgSrc: Samsang1, button: 'Compare Now', bottomLabelName: 'Samsang', bottomBrandlName: 'Galaxy S23 5G', bottomPriceName: 'Rs. 1 Lac', bottomImgSrc: Samsang2, data: 'mobiles' },
        // { id: 'box6', topLabelName: 'Samsang', topBrandlName: 'Galaxy S23 5G', topPriceName: 'Rs. 1 Lac', topImgSrc: Samsang1, button: 'Compare Now', bottomLabelName: 'Samsang', bottomBrandlName: 'Galaxy S23 5G', bottomPriceName: 'Rs. 1 Lac', bottomImgSrc: Samsang2, data: 'mobiles' },
    ]

    const [selectedData, setSelectedData] = useState(
        comparePriceProduct.find((item) => item.defaultChecked)?.data || 'mobiles'
    );
    const [activeProduct, setActiveProduct] = useState(
        comparePriceProduct.find((item) => item.defaultChecked)?.id || 'item1'
    );

    const handleProductChange = (event) => {
        setActiveProduct(event.target.id);
        setSelectedData(event.target.dataset.filter);
    };

    // Ensure the selected data appears first in the sorted list
    const filteredProductData = [...comparePriceProductData].sort((a, b) =>
        a.data === selectedData ? -1 : b.data === selectedData ? 1 : 0
    );

    return (
        <>
            <h3 className='md:text-[25px] text-[20px] text-blackColor font-semibold px-2 mb-4'>Compare Price and Features </h3>
            <div className='relative px-4'>
                <Swiper
                    onSwiper={setSwiper}
                    slidesPerView="auto"
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode, Navigation]}
                    // grabCursor={true}
                    onReachEnd={() => setIsEnd(true)}
                    onFromEdge={() => setIsEnd(false)}
                    onReachBeginning={() => setIsBeginning(true)}
                    onSlideChange={(swiper) => {
                        setIsEnd(swiper.isEnd);
                        setIsBeginning(swiper.isBeginning);
                    }}
                >
                    {comparePriceProduct.map((item) => (
                        <SwiperSlide key={item.id} className='!w-max'>
                            <div>
                                <input
                                    type="radio"
                                    name="compare-price-product"
                                    id={item.id}
                                    className='peer hidden'
                                    onChange={handleProductChange}
                                    defaultChecked={item.defaultChecked}
                                    checked={activeProduct === item.id}
                                    data-filter={item.data} // Changed 'pricerange.id' to 'item.id'
                                />
                                <label htmlFor={item.id} className='peer-checked:text-lightBackground font-semibold peer-checked:bg-lightOrange flex items-center gap-x-1 px-2 py-1 rounded-md border border-[#EDEFF2] bg-[#FCFCFD] text-blackColor cursor-pointer' data-filter={item.data}>
                                    <span><img src={item.imgSrc} alt="" className='w-5 h-5 flex-shrink-0 aspect-square' /></span>
                                    <span className='text-[14px]'>{item.label}</span>
                                </label>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Next button */}
                {!isEnd && (
                    <div onClick={() => swiper.slideNext()} className=' w-[30px] h-[30px] border-borderColor border bg-lightBackground flex items-center justify-center cursor-pointer swiper-button-next-b absolute right-2 z-10 top-1/2 -translate-y-1/2'><img src={CharatOrange} alt="" className='w-5 -rotate-90' /></div>

                )}

                {/* Prev button */}
                {!isBeginning && (
                    <div onClick={() => swiper.slidePrev()} className='flex-shrink-0 w-[30px] h-[30px] border-borderColor border bg-lightBackground flex items-center justify-center cursor-pointer swiper-button-next-b absolute left-2 z-10 top-1/2 -translate-y-1/2'><img src={CharatOrange} alt="" className='w-5 -rotate-90' /></div>
                )}

            </div>

            <div className='relative px-2'>
                <Swiper
                    slidesPerView={1.3}
                    spaceBetween={8}
                    freeMode={true}
                    grabCursor={true}
                    navigation={{
                        nextEl: '.swiper-button-next-b',
                    }}
                    breakpoints={{
                        1024: {
                            slidesPerView: 4.3,
                        },
                        424: {
                            slidesPerView: 2,
                        },
                    }}
                    modules={[FreeMode, Navigation]}
                    className="mySwiper"
                >
                    {filteredProductData.map((item) => (
                        <SwiperSlide key={item.id} data-box={item.data}>
                            <div className='my-5'>
                                <div className='border-2 border-borderColor rounded-md relative'>
                                    <span></span>
                                    <div className='flex items-center justify-between border-b border-borderColor'>
                                        <div className='flex-1 grid place-items-center p-4'>
                                            <img src={item.topImgSrc} alt="" className='md:h-[60px] h-[40px]' />
                                        </div>
                                        <div className='flex-1 grid place-items-center content-center text-left font-semibold'>
                                            <div className='md:text-[16px] text-[10px] font-semibold text-blackColor'>
                                                <div>{item.topLabelName}</div>
                                                <div>{item.topBrandlName}</div>
                                                <div className='text-gray-400 md:text-[14px] text-[10px]'>{item.topPriceName}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between border-t border-borderColor'>
                                        <div className='flex-1 grid place-items-center content-center text-left font-semibold'>
                                            <div className='md:text-[16px] text-[10px] font-semibold text-blackColor'>
                                                <div>{item.bottomLabelName}</div>
                                                <div>{item.bottomBrandlName}</div>
                                                <div className='text-gray-400 md:text-[14px] text-[10px]'>{item.bottomPriceName}</div>
                                            </div>
                                        </div>
                                        <div className='flex-1 grid place-items-center p-4'>
                                            <img src={item.bottomImgSrc} alt="" className='md:h-[60px] h-[40px]' />
                                        </div>
                                    </div>

                                    <span className='border-2 border-borderColor bg-whiteColor md:w-[32px] md:h-[32px] w-[25px] h-[25px] rounded-full absolute font-semibold text-blackColor text-center content-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] md:text-[16px]'>VS</span>
                                </div>
                                <NavLink to={item.to}><span className='block w-full border-2 border-borderColor mt-2 text-center p-1 rounded-md text-blackColor hover:bg-lightOrange hover:text-whiteColor font-bold text-[14px]'>{item.button}</span></NavLink>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='flex-shrink-0 w-[30px] h-[60px] rounded-md top-1/2 -translate-y-1/2 bg-lightOrange flex items-center justify-center cursor-pointer swiper-button-next-b absolute right-2 z-10'><img src={Arrow} alt="" className='w-5 -rotate-90' /></div>
            </div>
        </>
    )
}

export default ComparePriceProduct
