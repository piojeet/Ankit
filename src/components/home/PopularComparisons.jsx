import React, { useState } from 'react'
import mobile from '../../assets/307, Banking, Online, Payment, Shopping.svg' // Assuming this is the correct path
import { Swiper, SwiperSlide } from 'swiper/react';
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

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

function PopularComparisons() {

    const [swiper, setSwiper] = useState(null);
    const [isAtEnd, setIsAtEnd] = useState(false);
    const [isAtBeginning, setIsAtBeginning] = useState(true);

    // const [selectedData, setSelectedData] = useState('mobiles') 
    // Default selected data is 'mobiles'

    const popularComparison = [
        { id: 'PCitem1', label: 'Mobiles', imgSrc: mobile, data: 'PCmobiles', defaultChecked: false },
        { id: 'PCitem2', label: 'Cars', imgSrc: mobile, data: 'PCcars', defaultChecked: false },
        { id: 'PCitem3', label: 'Flight', imgSrc: mobile, data: 'PCflights', defaultChecked: false },
        { id: 'PCitem4', label: 'Bikes', imgSrc: mobile, data: 'PCbikes', defaultChecked: true },
        { id: 'PCitem5', label: 'Laptops', imgSrc: mobile, data: 'PClaptops', defaultChecked: false },
        { id: 'PCitem6', label: 'Hotels', imgSrc: mobile, data: 'PChotels', defaultChecked: false },
        { id: 'PCitem7', label: 'Washing Machines', imgSrc: mobile, data: 'PCwashing-machines', defaultChecked: false },
        { id: 'PCitem8', label: 'Tablets', imgSrc: mobile, data: 'PCtablets', defaultChecked: false },
        // { id: 'item9', label: 'Tablets', imgSrc: mobile, data: 'Tablets' },
        // { id: 'item10', label: 'Tablets', imgSrc: mobile, data: 'Tablets' },
        // { id: 'item11', label: 'Tablets', imgSrc: mobile, data: 'Tablets' },
        // { id: 'item12', label: 'Tablets', imgSrc: mobile, data: 'Tablets' },
    ]

    const popularComparisonData = [
        { id: 'PCbox1', topLabelName: 'Samsang', topBrandlName: 'Galaxy S23 5G', topPriceName: 'Rs. 1 Lac', topImgSrc: Samsang1, button: 'Compare Now', bottomLabelName: 'Samsang', bottomBrandlName: 'Galaxy S23 5G', bottomPriceName: 'Rs. 1 Lac', bottomImgSrc: Samsang2, data: 'PCmobiles', to: '/#' },
        { id: 'PCbox2', topLabelName: 'Proton X70', topBrandlName: 'Executive AWD', topPriceName: 'Rs. 87.99 lacs', topImgSrc: Car1, button: 'Compare Now', bottomLabelName: 'MG HS', bottomBrandlName: '1.5 Turbo', bottomPriceName: 'Rs. 89 lacs', bottomImgSrc: Car2, data: 'PCcars', to: '/#' },
        { id: 'PCbox3', topLabelName: 'Proton X70', topBrandlName: 'Executive AWD', topPriceName: 'Rs. 87.99 lacs', topImgSrc: Bike1, button: 'Compare Now', bottomLabelName: 'MG HS', bottomBrandlName: '1.5 Turbo', bottomPriceName: 'Rs. 89 lacs', bottomImgSrc: Bike2, data: 'PCbikes', to: '/#' },
        { id: 'PCbox4', topLabelName: 'ASUS', topBrandlName: 'GL702 i7', topPriceName: 'Rs. 46,000', topImgSrc: Laptop1, button: 'Compare Now', bottomLabelName: 'Samsung', bottomBrandlName: 'Intel Core i7', bottomPriceName: 'Rs. 45,000', bottomImgSrc: Laptop2, data: 'PClaptops', to: '/#' },
        // { id: 'box5', topLabelName: 'Samsang', topBrandlName: 'Galaxy S23 5G', topPriceName: 'Rs. 1 Lac', topImgSrc: Samsang1, button: 'Compare Now', bottomLabelName: 'Samsang', bottomBrandlName: 'Galaxy S23 5G', bottomPriceName: 'Rs. 1 Lac', bottomImgSrc: Samsang2, data: 'mobiles' },
        // { id: 'box6', topLabelName: 'Samsang', topBrandlName: 'Galaxy S23 5G', topPriceName: 'Rs. 1 Lac', topImgSrc: Samsang1, button: 'Compare Now', bottomLabelName: 'Samsang', bottomBrandlName: 'Galaxy S23 5G', bottomPriceName: 'Rs. 1 Lac', bottomImgSrc: Samsang2, data: 'mobiles' },
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
    );

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
                                        <div className='flex items-center justify-between border-b border-borderColor'>
                                            <div className='flex-1 grid place-items-center p-4'>
                                                <img src={item.topImgSrc} alt="" className='h-[110px]' />
                                            </div>
                                            <div className='flex-1 grid place-items-center content-center text-left font-semibold'>
                                                <div>
                                                    <div>{item.topLabelName}</div>
                                                    <div>{item.topBrandlName}</div>
                                                    <div>{item.topPriceName}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex items-center justify-between border-t border-borderColor'>
                                            <div className='flex-1 grid place-items-center content-center text-left font-semibold'>
                                                <div>
                                                    <div>{item.bottomLabelName}</div>
                                                    <div>{item.bottomBrandlName}</div>
                                                    <div>{item.bottomPriceName}</div>
                                                </div>
                                            </div>
                                            <div className='flex-1 grid place-items-center p-4'>
                                                <img src={item.bottomImgSrc} alt="" className='h-[110px]' />
                                            </div>
                                        </div>
                                    </div>
                                    <NavLink to={item.to}><span className='block w-full border-2 border-borderColor mt-2 text-center p-1 rounded-md text-blackColor hover:bg-lightOrange hover:text-whiteColor font-bold'>{item.button}</span></NavLink>
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