import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper for the slider
import Banner1 from '../../assets/image 90.png'; // Import banner image
import Banner2 from '../../assets/image 88.png'; // Import banner image
import Banner3 from '../../assets/image 91.png'; // Import banner image
import Arrow from '../../assets/downarrow.svg'; // Import arrow image

// Import Swiper styles and modules
import 'swiper/css';
import 'swiper/css/free-mode';
import { FreeMode, Navigation, Autoplay } from 'swiper/modules'; // Swiper modules

function ProductBanner() {
    const [swiper, setSwiper] = useState(null); // Swiper instance
    const [isEnd, setIsEnd] = useState(false); // Track if slider reached the end
    const [isBeginning, setIsBeginning] = useState(true); // Track if slider is at the beginning

    // Array of images to display in the slider
    const priceranges = [
        { id: 'product1', imgSrc: Banner1 },
        { id: 'product2', imgSrc: Banner2 },
        { id: 'product3', imgSrc: Banner3 },
        { id: 'product4', imgSrc: Banner1 },
        { id: 'product5', imgSrc: Banner2 },
        { id: 'product6', imgSrc: Banner3 },
        { id: 'product7', imgSrc: Banner1 },
        { id: 'product8', imgSrc: Banner2 },
        { id: 'product9', imgSrc: Banner3 },
        { id: 'product10', imgSrc: Banner1 },
        { id: 'product11', imgSrc: Banner2 },
        { id: 'product12', imgSrc: Banner3 },
    ];

    return (
        <div className="px-4 py-5 relative">
            <Swiper
                onSwiper={setSwiper} // Get the swiper instance
                slidesPerView={3} // Number of slides visible at a time
                spaceBetween={40} // Space between slides
                loop={true} // Infinite loop
                autoplay={{ delay: 4000, disableOnInteraction: false }} // Autoplay settings
                modules={[FreeMode, Navigation, Autoplay]} // Swiper modules
                onReachEnd={() => setIsEnd(true)} // Triggered when the end of the slider is reached
                onFromEdge={() => setIsEnd(false)} // Triggered when sliding away from the edge
                onReachBeginning={() => setIsBeginning(true)} // Triggered when reaching the start
                onSlideChange={(swiper) => {
                    // Track current state of the slider
                    setIsEnd(swiper.isEnd);
                    setIsBeginning(swiper.isBeginning);
                }}
            >
                {priceranges.map((pricerange) => (
                    <SwiperSlide key={pricerange.id}>
                        {/* Display each image */}
                        <div>
                            <span className="block">
                                <img src={pricerange.imgSrc} alt="Product Banner" className="w-full h-full select-none" />
                            </span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Next button */}
            <div 
                onClick={() => swiper?.slideNext()} // Slide to the next image
                className="flex justify-center items-center bg-lightOrange w-fit h-[60px] rounded-md px-2 absolute top-1/2 right-2 translate-y-[-50%] z-10 cursor-pointer shadow-[0px_0px_50px_0px_rgba(0,0,0,0.8)] select-none"
            >
                <img src={Arrow} alt="Next Arrow" className="w-[20px] h-[20px] -rotate-90" />
            </div>

            {/* Prev button */}
            <div 
                onClick={() => swiper?.slidePrev()} // Slide to the previous image
                className="flex justify-center items-center bg-lightOrange w-fit h-[60px] rounded-md px-2 absolute top-1/2 left-2 translate-y-[-50%] z-10 cursor-pointer shadow-[0px_0px_50px_0px_rgba(0,0,0,0.8)] select-none"
            >
                <img src={Arrow} alt="Previous Arrow" className="w-[20px] h-[20px] rotate-90" />
            </div>
        </div>
    );
}

export default ProductBanner;