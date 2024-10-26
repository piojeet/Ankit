import React from 'react';
import Star from '../../assets/star.svg'; // Importing a star image for display
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, } from 'swiper/modules';

function ChatBot() {


  return (
    <>
      <div className='fixed bottom-[13%] md:bottom-[25%] left-2 z-20'>
        <div>
          {/* Container with fixed size and border for chatbot */}
          <div className='w-[150px] h-[40px] bg-whiteColor rounded-md border-2 border-lightOrange flex items-center justify-between px-3 cursor-pointer'>
            <div className='content-center flex items-center justify-center relative'>
              {/* Displaying a star icon */}
              <span className='inline-flex w-[25px] h-[25px] bg-lightOrange flex-shrink-0 items-center justify-center rounded-full relative z-20'>
                <img src={Star} alt="" className='w-5' />
              </span>

              <span className='absolute w-full h-full bg-[#e99f31] rounded-full z-10 animate-ping'></span>
            </div>

            {/* Text container for rotating spans */}
            <div className='text-[12px] font-semibold text-blackColor w-full text-right'>
              <div className="h-[15px] relative w-full">
                {/* First span: It moves up and comes back down when toggled */}
                <Swiper
                  direction={'vertical'}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className="mySwiper !h-[15px] select-none pointer-events-none">
                  <SwiperSlide>
                    <span
                      className={`block h-[15px] leading-none text1 right-0 transition-all duration-1000`}
                    >
                      Ask Anything
                    </span>
                  </SwiperSlide>

                  <SwiperSlide>
                    <span
                      className={`block h-[15px] leading-none text1 right-0 transition-all duration-1000`}
                    >
                      SearchKarle.ai
                    </span>
                  </SwiperSlide>
                </Swiper>


                {/* Second span: It appears after the first span moves up */}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatBot;
