import React, { useState } from 'react';
import mobile from '../../assets/307, Banking, Online, Payment, Shopping.svg'; // Assuming this is the correct path
import { Swiper, SwiperSlide } from 'swiper/react';
import CharatOrange from '../../assets/charat-down-orange.svg';

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

function TradingProduct() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);
  const [hasReachedBeginning, setHasReachedBeginning] = useState(true);

  const comparePriceProduct = [
    { id: 'titem1', label: 'Mobiles', imgSrc: mobile, data: 'mobilesPrice', defaultChecked: false },
    { id: 'titem2', label: 'Cars', imgSrc: car, data: 'carsPrice', defaultChecked: true },
    { id: 'titem3', label: 'Flight', imgSrc: calender, data: 'FlightsPrice', defaultChecked: false },
    { id: 'titem4', label: 'Bikes', imgSrc: bike, data: 'BikesPrice', defaultChecked: false },
    { id: 'titem5', label: 'Laptops', imgSrc: laptop, data: 'LaptopsPrice', defaultChecked: false },
    { id: 'titem6', label: 'Hotels', imgSrc: hotel, data: 'HotelsPrice', defaultChecked: false },
    { id: 'titem7', label: 'Washing Machines', imgSrc: mashin, data: 'washing-machinesPrice', defaultChecked: false },
    { id: 'titem8', label: 'Tablets', imgSrc: tablet, data: 'TabletsPrice', defaultChecked: false },
  ];

  const comparePriceProductData = [
    { id: 'priceCheck1', price: 'Below ₹ 10,000', data: 'mobilesPrice' },
    { id: 'priceCheck2', price: '₹ 10,000 - ₹ 15,000 ', data: 'mobilesPrice' },
    { id: 'priceCheck3', price: '₹ 15,000 - ₹ 20,000 ', data: 'mobilesPrice' },
    { id: 'priceCheck4', price: '₹ 20,000 - ₹ 25,000 ', data: 'mobilesPrice' },
    { id: 'priceCheck5', price: '₹ 25,000 - ₹ 30,000 ', data: 'mobilesPrice' },
    { id: 'priceCheck6', price: '₹ 30,000 - ₹ 40,000 ', data: 'mobilesPrice' },
    { id: 'priceCheck7', price: '₹ 40,000 - ₹ 50,000 ', data: 'mobilesPrice' },
    { id: 'priceCheck8', price: '₹ 50,000 and Above', data: 'mobilesPrice' },
    { id: 'priceCheck9', price: 'Below ₹ 20,000', data: 'carsPrice' },
    { id: 'priceCheck10', price: 'Below ₹ 5,000', data: 'FlightsPrice' },
    { id: 'priceCheck11', price: 'Below ₹ 50,000', data: 'BikesPrice' },
    { id: 'priceCheck12', price: 'Below ₹ 40,000', data: 'LaptopsPrice' },
    { id: 'priceCheck13', price: 'Below ₹ 30,000', data: 'HotelsPrice' },
    { id: 'priceCheck14', price: 'Below ₹ 60,000', data: 'washing-machinesPrice' },
    { id: 'priceCheck15', price: 'Below ₹ 80,000', data: 'TabletsPrice' },
  ];

  // Find the default checked item
  const defaultProduct = comparePriceProduct.find((item) => item.defaultChecked);

  // State to track currently selected product and radio button
  const [currentlySelected, setCurrentlySelected] = useState(
    defaultProduct ? defaultProduct.data : 'mobilesPrice' // Use the defaultChecked product's data
  );
  
  const [selectedProduct, setSelectedProduct] = useState(
    defaultProduct ? defaultProduct.id : '' // Default the selected product's id
  );

  // Handle when a radio button is selected
  const handleRadioChange = (data) => {
    setCurrentlySelected(data);
  };

  const sortedProductData = comparePriceProductData.filter(
    (item) => item.data === currentlySelected // Filter data based on currently selected
  );

  // Handle input changes (for radio buttons)
  const handleChange = (event) => {
    setSelectedProduct(event.target.id);
  };

  return (
    <>
      <div className='my-7'>
      <div className='flex items-center gap-x-2 leading-none mb-4'>
      <h3 className='text-[30px] text-blackColor font-semibold px-2 mb-4'>Trending Products</h3>
      <div className='pb-1 text-[18px] font-bold'><span className='text-lightOrange'>₹</span> <span className='text-gray-800 text-opacity-80'>By Price Range</span></div>
      </div>
      <div className='relative px-4'>
        <Swiper
          onSwiper={(swiper) => setSwiperInstance(swiper)}
          slidesPerView="auto"
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          onReachEnd={() => setHasReachedEnd(true)}
          onFromEdge={() => setHasReachedEnd(false)}
          onReachBeginning={() => setHasReachedBeginning(true)}
          onSlideChange={(swiper) => {
            setHasReachedEnd(swiper.isEnd);
            setHasReachedBeginning(swiper.isBeginning);
          }}
        >
          {comparePriceProduct.map((item) => (
            <SwiperSlide key={item.id} className='!w-max'>
              <div>
                <input
                  type="radio"
                  name="tranding-product"
                  id={item.id}
                  className='peer hidden'
                  onChange={(event) => { handleChange(event); handleRadioChange(item.data); }}
                  defaultChecked={item.defaultChecked}
                  checked={selectedProduct === item.id}
                />
                <label htmlFor={item.id} className='peer-checked:text-lightBackground font-semibold peer-checked:bg-lightOrange flex items-center gap-x-1 px-2 py-1 rounded-md border border-[#EDEFF2] bg-[#FCFCFD] text-blackColor cursor-pointer'>
                  <span><img src={item.imgSrc} alt="" className='w-7 h-7' /></span>
                  <span className='text-[18px]'>{item.label}</span>
                </label>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Next and Prev buttons */}
        {!hasReachedEnd && (
          <div onClick={() => swiperInstance?.slideNext()} className='w-[30px] h-[30px] border-borderColor border bg-lightBackground flex items-center justify-center cursor-pointer absolute right-2 z-10 top-1/2 -translate-y-1/2'>
            <img src={CharatOrange} alt="" className='w-5 -rotate-90' />
          </div>
        )}

        {!hasReachedBeginning && (
          <div onClick={() => swiperInstance?.slidePrev()} className='w-[30px] h-[30px] border-borderColor border bg-lightBackground flex items-center justify-center cursor-pointer absolute left-2 z-10 top-1/2 -translate-y-1/2'>
            <img src={CharatOrange} alt="" className='w-5 -rotate-90' />
          </div>
        )}
      </div>

      <div className='relative px-2 mt-5 grid grid-cols-4 flex-wrap gap-2'>
        {sortedProductData.map((item) => (
          <div key={item.id} data-box={item.data} className='w-full'>
            <input type="checkbox" id={item.id} className='peer hidden' />
            <label htmlFor={item.id} className='inline-block w-full text-center px-8 py-2 peer-checked:bg-lightOrange select-none peer-checked:text-whiteColor rounded-md text-[24px] font-bold border-2 border-borderColor cursor-pointer'>{item.price}</label>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default TradingProduct;
