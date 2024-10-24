import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Bag from '../../assets/318, Bag, Favorite, Shopping, Purchase.svg';
import Arrow from '../../assets/downarrow.svg';
import Clock from '../../assets/350, Clock, electric, time, machine.svg';
import Calender from '../../assets/74, Summer, Calendar, Date.svg';
import Hotel from '../../assets/Group.svg';
import Mobile from '../../assets/307, Banking, Online, Payment, Shopping.svg';
import Cars from '../../assets/cars.svg';
import Bike from '../../assets/bichbike.svg';
import Laptop from '../../assets/boxdrop.svg';
import Machine from '../../assets/macshine.svg';
import Tablet from '../../assets/765, Screen, Television, Tv.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';

function ProductCategrees() {
    const [swiper, setSwiper] = useState(null);
    const [isEnd, setIsEnd] = useState(false);
    const [isBeginning, setIsBeginning] = useState(true);

    const priceranges = [
        { id: 'product1', label: 'Deals', imgSrc: Bag },
        { id: 'product2', label: 'News', imgSrc: Clock },
        { id: 'product3', label: 'Flights', imgSrc: Calender },
        { id: 'product4', label: 'Hotels', imgSrc: Hotel },
        { id: 'product5', label: 'Mobiles', imgSrc: Mobile },
        { id: 'product6', label: 'Cars', imgSrc: Cars },
        { id: 'product7', label: 'Bikes', imgSrc: Bike },
        { id: 'product8', label: 'Laptops', imgSrc: Laptop },
        { id: 'product9', label: 'Machines', imgSrc: Machine },
        { id: 'product10', label: 'Tablets', imgSrc: Tablet },
        { id: 'product11', label: 'demo 5', imgSrc: Bag },
        { id: 'product12', label: 'demo 6', imgSrc: Bag },
    ];

    return (
        <>
            <div className='px-12 py-5 relative'>
                <Swiper
                    onSwiper={setSwiper}
                    slidesPerView="auto"
                    spaceBetween={40}
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
                    {priceranges.map((pricerange) => (
                        <SwiperSlide key={pricerange.id} className='!w-fit !pl-3'>
                            <div className=''>
                                <span className='block'>
                                    <img src={pricerange.imgSrc} alt={pricerange.label} className='md:w-[70px] md:h-[50px] w-[50px] h-[50px] aspect-square' />
                                </span>
                                <p className='text-blackColor md:text-[18px] text-[16px] text-center font-semibold'>{pricerange.label}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Next button */}
                {!isEnd && (
                    <div onClick={() => swiper.slideNext()} className={`flex justify-center items-center bg-lightOrange w-fit h-[60px] rounded-md px-2 absolute top-1/2 right-2 translate-y-[-50%] z-10 cursor-pointer shadow-[0px_0px_50px_0px_rgba(0,0,0,0.8)]`}>
                        <img src={Arrow} alt="arrow" className='w-[20px] h-[20px] -rotate-90' />
                    </div>
                )}

                {/* Prev button */}
                {!isBeginning && (
                    <div onClick={() => swiper.slidePrev()} className={`flex justify-center items-center bg-lightOrange w-fit h-[60px] rounded-md px-2 absolute top-1/2 left-4 translate-y-[-50%] z-10 cursor-pointer shadow-[0px_0px_50px_0px_rgba(0,0,0,0.8)]`}>
                        <img src={Arrow} alt="arrow" className='w-[20px] h-[20px] rotate-90' />
                    </div>
                )}
            </div>
        </>
    );
}

export default ProductCategrees;
