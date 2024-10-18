import React, { useEffect, useRef, useState } from 'react';
import Mobile from '../../assets/307, Banking, Online, Payment, Shopping.svg';
import Cars from '../../assets/cars.svg';
import CharatOrange from '../../assets/charat-down-orange.svg'
import Calender from '../../assets/calender.svg'
import Bike from '../../assets/bichbike.svg'
import Box from '../../assets/boxdrop.svg'
import Hotel from '../../assets/hotel.svg'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';

function CopareCounter() {
    const sliderRef = useRef(null);
    const progressRef = useRef(null);
    const minPriceInputRef = useRef(null);
    const maxPriceInputRef = useRef(null);
    const minInputRef = useRef(null);
    const maxInputRef = useRef(null);

    const [minValue, setMinValue] = useState(1500);
    const [maxValue, setMaxValue] = useState(40000);

    const updateProgress = () => {
        const range = maxInputRef.current.max - minInputRef.current.min;
        const valueRange = maxValue - minValue;
        const width = (valueRange / range) * 100;
        const minOffset = ((minValue - minInputRef.current.min) / range) * 100;

        if (progressRef.current) {
            progressRef.current.style.width = `${width}%`;
            progressRef.current.style.left = `${minOffset}%`;
        }

        if (minPriceInputRef.current) {
            minPriceInputRef.current.value = minValue;
        }
        if (maxPriceInputRef.current) {
            maxPriceInputRef.current.value = maxValue;
        }
    };

    const updateRange = (inputValue, isMinInput) => {
        let newMin = isMinInput ? inputValue : minValue;
        let newMax = isMinInput ? maxValue : inputValue;

        if (isMinInput && newMin > newMax) {
            newMax = newMin;
        } else if (!isMinInput && newMax < newMin) {
            newMin = newMax;
        }

        setMinValue(newMin);
        setMaxValue(newMax);

        updateProgress();
    };

    useEffect(() => {
        updateProgress();
    }, [minValue, maxValue]);

    // features code 
    const features = [
        { id: 'features1', label: 'Dual Sim' },
        { id: 'features2', label: '4G LTE' },
        { id: 'features3', label: 'MicroSD' },
        { id: 'features4', label: 'Fingerprint' },
        { id: 'features5', label: 'Android' },
        { id: 'features6', label: '5G LTE' },
        { id: 'features7', label: 'Apple' },
    ]
    const priceranges = [
        { id: 'product1', label: 'Mobiles', imgSrc: Mobile, defaultChecked: true },
        { id: 'product2', label: 'Cars', imgSrc: Cars },
        { id: 'product3', label: 'Flight', imgSrc: Calender },
        { id: 'product4', label: 'Bikes', imgSrc: Bike },
        { id: 'product5', label: 'Laptops', imgSrc: Box },
        { id: 'product6', label: 'Hotels', imgSrc: Hotel },
        { id: 'product7', label: 'demo 1', imgSrc: Mobile },
        { id: 'product8', label: 'demo 2', imgSrc: Mobile },
    ]

    const [selectedProduct, setSelectedProduct] = useState(priceranges.find((pricerange) => pricerange.defaultChecked)?.id);
    const handleChange = (event) => {
        setSelectedProduct(event.target.id)
    }

    return (
        <div className='p-7 py-6'>
            <form action="#" className='w-full'>
                <div className='flex items-center gap-2 pr-9 w-full'>
                    <div className='w-full'>
                        <Swiper
                            slidesPerView="auto"
                            spaceBetween={8}
                            freeMode={true}
                            
                            navigation={{
                                nextEl: '.swiper-button-next'
                            }}
                            // pagination={{
                            //     clickable: true,
                            // }}
                            modules={[FreeMode, Navigation]}
                            grabCursor={true}
                            className="mySwiper"
                        >
                            {priceranges.map((pricerange) => (
                                <SwiperSlide key={pricerange.id} className='!w-max'>
                                    <div className='whitespace-nowrap select-none'>
                                        <input type="radio" name="electrics" id={pricerange.id} checked={selectedProduct === pricerange.id} onChange={handleChange} className='peer w-4 h-4 appearance-none hidden' />
                                        <label htmlFor={pricerange.id} className='text-blackColor font-medium text-[14px] inline-flex items-center gap-1 px-3 py-2 h-[40px] rounded-md border border-[#EDEFF2] bg-[#FCFCFD] peer-checked:bg-lightOrange peer-checked:text-whiteColor peer-checked:border-lightOrange'>
                                            <span><img src={pricerange.imgSrc} alt="" className='w-5 h-5' /></span>
                                            <span>{pricerange.label}</span>
                                        </label>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                    </div>

                    <div className='flex-shrink-0 w-[30px] h-[30px] border-borderColor border bg-lightBackground flex items-center justify-center cursor-pointer swiper-button-next'><img src={CharatOrange} alt="" className='w-5 -rotate-90' /></div>
                </div>

                <div className='flex items-center justify-between gap-x-5 my-5 mb-3'>
                    <p className='text-blackColor font-semibold whitespace-nowrap'>Price Range</p>
                    <div className='w-full'>
                        <div className="range-slider" ref={sliderRef}>


                            <div className="range grid max-w-[350px] w-full relative z-10">
                                <input
                                    type="range"
                                    className="min-input"
                                    ref={minInputRef}
                                    value={minValue}
                                    min="1000"
                                    max="43499"
                                    onChange={(e) => {
                                        const newMinValue = parseInt(e.target.value);
                                        setMinValue(newMinValue);
                                        if (newMinValue >= maxValue) {
                                            setMaxValue(newMinValue);
                                        }
                                        updateProgress();
                                    }}
                                />
                                <input
                                    type="range"
                                    className="max-input"
                                    ref={maxInputRef}
                                    value={maxValue}
                                    min="2000"
                                    max="45000"
                                    onChange={(e) => {
                                        const newMaxValue = parseInt(e.target.value);
                                        setMaxValue(newMaxValue);
                                        if (newMaxValue <= minValue) {
                                            setMinValue(newMaxValue);
                                        }
                                        updateProgress();
                                    }}
                                />

                                <div className="slider absolute h-[8px] w-full bg-[#EFEFF0] top-1/2 -translate-y-1/2 rounded-md overflow-hidden -z-10">
                                    <div className="progress absolute h-full bg-lightOrange" ref={progressRef} />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

                <div>
                    <div className='flex items-center justify-center gap-x-5'>
                        <div className='border border-borderColor bg-lightBackground w-fit'>
                            <span className='inline-flex justify-center items-center w-[32px] h-[32px] border border-borderColor bg-lightBackground text-[14px] text-blackColor font-medium'>Rs</span>
                            <input
                                type="number"
                                className="min-price appearance-none outline-none text-[14px] text-blackColor font-medium"
                                ref={minPriceInputRef}
                                value={minValue}
                                min="1000"
                                max="43499"
                                onChange={(e) => updateRange(parseInt(e.target.value), true)}
                            />
                        </div>
                        <span className='text-[14px] text-blackColor font-medium'>TO</span>
                        <div className='border border-borderColor bg-lightBackground w-fit'>
                            <span className='inline-flex justify-center items-center w-[32px] h-[32px] border border-borderColor bg-lightBackground text-[14px] text-blackColor font-medium'>Rs</span>
                            <input
                                type="number"
                                className="max-price appearance-none outline-none text-[14px] text-blackColor font-medium"
                                ref={maxPriceInputRef}
                                value={maxValue}
                                min="2000"
                                max="45000"
                                onChange={(e) => updateRange(parseInt(e.target.value), false)}
                            />
                        </div>
                    </div>
                </div>

                <div className='flex items-start gap-x-12 mt-5'>
                    <span className='text-blackColor font-semibold whitespace-nowrap'>Features</span>
                    <div className='flex items-start gap-2 flex-wrap'>

                        {features.map((feature) => (
                            <div key={feature.id}>
                                <input type="checkbox" name="" id={feature.id} className='peer w-4 h-4 appearance-none hidden' />
                                <label htmlFor={feature.id} className='text-blackColor font-medium text-[14px] inline-flex items-center gap-1 px-3 py-2 h-[40px] border border-[#EDEFF2] bg-[#FCFCFD] peer-checked:bg-lightOrange peer-checked:text-whiteColor peer-checked:border-lightOrange select-none rounded-md'>
                                    <span>{feature.label}</span>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <button type='submit' className='w-fit block px-7 bg-[#5DB506] text-whiteColor font-semibold py-2.5 rounded-md ml-auto'>Search</button>
                </div>
            </form>
        </div>
    );
}

export default CopareCounter;
