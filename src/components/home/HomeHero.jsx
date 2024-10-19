import React from 'react'
import Amazon from '../../assets/amazone.png'
import DownArrow from '../../assets/downarrow.svg'
import Flipkart from '../../assets/flipkart.png'
import Myntra from '../../assets/myntra.png'
import Onpluse from '../../assets/onplus.png'
import Ajio from '../../assets/ajio.png'
import Shyaway from '../../assets/shyaway.png'
import Foxtale from '../../assets/foxtale.png'
import Caffeine from '../../assets/caffeine.png'
import TraforVarticle from '../../assets/Transfer Vertical.svg'
import CopareCounter from './CopareCounter'
import ElectronicDevice from '../../assets/electronic-device.svg'


function HomeHero() {

  const itemsCores = [
    {id: 'free-corse', text: 'Join Free', imgSrc: ElectronicDevice},
    {id: 'free-corse2', text: 'Visit Retailers via US & Shop', imgSrc: ElectronicDevice},
    {id: 'free-corse3', text: 'Earn Cashback', imgSrc: ElectronicDevice},
    {id: 'free-corse4', text: 'Transfer to Bank', imgSrc: ElectronicDevice}
  ]

  return (
    <>
      <div className='min-h-[200px] h-auto'>
      <div className='h-[45px] content-center'>
        <div className='flex items-center justify-between relative z-10'>
          <div className='text-[14px] font-semibold h-[40px] content-center bg-lightOrange px-2 max-w-[300px] w-full text-center flex-shrink-0 text-whiteColor'>Popular Cashback Stores</div>
          <div><span><img src={Amazon} alt="" className='h-10' /></span></div>
          <div><span><img src={Flipkart} alt="" /></span></div>
          <div><span><img src={Myntra} alt="" /></span></div>
          <div><span><img src={Onpluse} alt="" /></span></div>
          <div><span><img src={Ajio} alt="" /></span></div>
          <div><span><img src={Shyaway} alt="" /></span></div>
          <div><span><img src={Foxtale} alt="" /></span></div>
          <div><span><img src={Caffeine} alt="" /></span></div>

          <div className='group flex items-center gap-2 bg-lightOrange h-[40px] px-2 relative cursor-pointer'>
            <span className='text-[14px] font-semibold text-whiteColor'>More</span>
            <span className='inline-block'><img src={DownArrow} alt="" className='w-4' /></span>
            <div className='absolute top-[100%] right-2 bg-lightOrange text-whiteColor p-5 whitespace-nowrap flex-col gap-2 text-[14px] font-semibold hidden group-hover:flex rounded-md'>
              <div className='cursor-pointer'>demo 1</div>
              <div className='cursor-pointer'>demo 2</div>
              <div className='cursor-pointer'>demo 3</div>
            </div>
          </div>
        </div>
      </div>

      <div className='compare-grid items-start justify-between px-2 bg-buttonColor gap-2 py-2 h-auto'>
        <div className='bg-whiteColor w-full rounded-md flex-shrink-0 h-full'>
          <div className='p-7 py-4'>
            <h3 className='text-[20px] font-bold text-blackColor text-center'>COMPARE PRODUCTS</h3>
            <form action="#" className='w-full text-blackColor font-medium mt-5'>
              <select name="" id="" className='w-full h-[40px] px-3 outline-none border border-[#EDEFF2]'>
                <option value="1" className='bg-buttonColor text-whiteColor' selected>Mobiles</option>
                <option value="2" className='bg-buttonColor text-whiteColor'>Laptops</option>
                <option value="3" className='bg-buttonColor text-whiteColor'>Tablets</option>
              </select>
              <input type="text" placeholder='Type Product 1 Name' className='w-full h-[32px] px-3 outline-none border border-[#EDEFF2] text-blackColor text-[14px] mt-5' />
              <div className='text-center w-fit mx-auto my-2'><img src={TraforVarticle} alt="" className='w-6' /></div>
              <input type="text" placeholder='Type Product 2 Name' className='w-full h-[32px] px-3 outline-none border border-[#EDEFF2] text-blackColor text-[14px]' />
              <button className='w-full h-[40px] bg-[#5DB506] text-whiteColor text-[16px] font-semibold rounded-md mt-5'>Compare Features</button>
            </form>
          </div>
        </div>
        <div className='bg-whiteColor w-full max-w-[560px] flex-shrink-0 rounded-md h-full'>
          <CopareCounter />
        </div>
        <div className='bg-whiteColor w-full h-full rounded-md p-7 py-4 flex-shrink-0'>
          <h3 className='text-[20px] font-bold text-blackColor text-center'>HOW TO EARN CASHBACK</h3>

          <div className='flex flex-col gap-2 mt-5'>
          {itemsCores.map((item, index) => (
            <div key={index} id={item.id} className='border border-borderColor bg-lightBackground flex items-center gap-2'>
            <span className='inline-flex w-[52px] h-[32px] border border-borderColor bg-lightBackground items-center justify-center'><img src={ElectronicDevice} alt="" className='w-5' /></span>
            <span className='text-[14px] font-medium text-blackColor'><span className='select-none'>{index + 1}. </span>{item.text}</span>
          </div>
          ))}
          </div>

          <div className='flex items-center whitespace-nowrap gap-2 mt-5'>
            <div className='flex-1 block px-2 text-center bg-[#5DB506] text-whiteColor font-semibold py-2.5 rounded-md ml-auto cursor-pointer'>Join Free</div>
            <div className='flex-1 block px-2 text-center bg-blackColor text-whiteColor font-semibold py-2.5 rounded-md ml-auto cursor-pointer'>Watch Video</div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default HomeHero;