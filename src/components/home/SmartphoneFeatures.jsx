import React from 'react'
import Feature1 from '../../assets/feature1.png'
import Feature2 from '../../assets/feature2.png'
import Feature3 from '../../assets/feature3.png'
import Feature4 from '../../assets/feature4.png'
import Feature5 from '../../assets/feature5.png'
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Navigation } from 'swiper/modules';

function SmartphoneFeatures() {

    const features = [
        { id: 'features1', SrcImg: Feature1, title: '5G Phones', disc: 'Under ₹ 20,000' },
        { id: 'features2', SrcImg: Feature2, title: '108 MP', disc: 'Camera Phone' },
        { id: 'features3', SrcImg: Feature3, title: '120Hz', disc: 'Display Phone' },
        { id: 'features4', SrcImg: Feature4, title: '5000 mAh', disc: 'Battery Phone' },
        { id: 'features5', SrcImg: Feature5, title: 'Snapdragon 8', disc: 'Gaming Phone' },
        { id: 'features6', SrcImg: Feature5, title: 'Snapdragon 8', disc: 'Gaming Phone' },

    ]

    return (
        <>
            <div>
                <h3 className='md:text-[25px] text-[20px] text-blackColor font-semibold px-2 mb-4'>Latest Smartphone Features</h3>

                <div className='px-2'>
                    <div className=''>
                        <div className=''>
                            <Swiper
                                slidesPerView={2.2}
                                spaceBetween={8}
                                freeMode={true}
                                grabCursor={true}
                                navigation={{
                                    nextEl: '.swiper-button-next-b',
                                }}
                                breakpoints={{
                                    1024: {
                                        slidesPerView: 4.5,
                                    },
                                    424: {
                                        slidesPerView: 3.5,
                                    },
                                }}
                                modules={[FreeMode, Navigation]}
                                className="mySwiper"
                            >
                                {features.map((feature) => (
                                    <SwiperSlide key={feature} className=''>
                                        <div className='md:w-full h-full flex-shrink-0 w-full'>
                                            <div className='w-full md:h-[9vw] h-[20vw]'>
                                                <img src={feature.SrcImg} alt="" className='w-full h-full' />
                                            </div>
                                            <div className='text-center md:text-[16px] text-[14px] font-semibold text-blackColor mt-1'>{feature.title}</div>
                                            <div className='text-center md:text-[14px] text-[12px] text-blackColor font-medium'>{feature.disc}</div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            {/* {features.map((feature) => (
                                <div className='md:w-full h-full flex-shrink-0 sm:w-[40%] w-[60%]'>
                                    <div className='w-full md:h-[9vw] h-[20vw]'>
                                        <img src={feature.SrcImg} alt="" className='w-full h-full' />
                                    </div>
                                    <div className='text-center md:text-[22px] text-[16px] font-semibold text-blackColor mt-1'>{feature.title}</div>
                                    <div className='text-center md:text-[20px] text-[14px] text-blackColor font-medium leading-none'>{feature.disc}</div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SmartphoneFeatures