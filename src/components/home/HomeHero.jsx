import React, { useEffect, useRef } from 'react'
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
import Vector from '../../assets/Vector.png'
import HandHeart from '../../assets/Hand Heart.png'
import Banknote from '../../assets/Banknote 2.png'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


function HomeHero() {

  const wrapperRef = useRef(null);
    const boxesRef = useRef([]);

    useEffect(() => {
        const boxes = boxesRef.current;

        const loop = horizontalLoop(boxes, {
            paused: false,
            repeat: -1,
            speed: 0.4 // कम स्पीड सेट करें
        });

        // ScrollTrigger.create({
        //     trigger: '.container',
        //     start: 'top top',
        //     end: 'bottom bottom',
        //     pin: true,
        //     onUpdate: function (self) {
        //         self.direction === -1 ? loop.timeScale(-1) : loop.timeScale(1);
        //     }
        // });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
            loop.kill();
        };
    }, []);

    function horizontalLoop(items, config) {
        items = gsap.utils.toArray(items);
        config = config || {};
        let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
            length = items.length,
            startX = items[0].offsetLeft,
            times = [],
            widths = [],
            xPercents = [],
            pixelsPerSecond = (config.speed || 1) * 100,
            snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1),
            totalWidth, curX, distanceToStart, distanceToLoop, item, i;
        gsap.set(items, {
            xPercent: (i, el) => {
                let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
                xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
                return xPercents[i];
            }
        });
        gsap.set(items, { x: 0 });
        totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);
        for (i = 0; i < length; i++) {
            item = items[i];
            curX = xPercents[i] / 100 * widths[i];
            distanceToStart = item.offsetLeft + curX - startX;
            distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
            tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
                .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
                .add("label" + i, distanceToStart / pixelsPerSecond);
            times[i] = distanceToStart / pixelsPerSecond;
        }
        return tl;
    }

  const itemsCores = [
    {id: 'free-corse', text: 'Join Free', imgSrc: ElectronicDevice},
    {id: 'free-corse2', text: 'Visit Retailers via US & Shop', imgSrc: Vector},
    {id: 'free-corse3', text: 'Earn Cashback', imgSrc: HandHeart},
    {id: 'free-corse4', text: 'Transfer to Bank', imgSrc: Banknote}
  ]

  const brands = [
    {id: 'free-retailers', text: 'Amazon', imgSrc: Amazon},
    {id: 'free-retailers2', text: 'Flipkart', imgSrc: Flipkart},
    {id: 'free-retailers3', text: 'Myntra', imgSrc: Myntra},
    {id: 'free-retailers4', text: 'Onpluse', imgSrc: Onpluse},
    {id: 'free-retailers5', text: 'Ajio', imgSrc: Ajio},
    {id: 'free-retailers6', text: 'Shyaway', imgSrc: Shyaway},
    {id: 'free-retailers7', text: 'Foxtale', imgSrc: Foxtale},
    {id: 'free-retailers8', text: 'Caffeine', imgSrc: Caffeine},
    {id: 'free-retailer9', text: 'Amazon', imgSrc: Amazon},
    {id: 'free-retailers10', text: 'Flipkart', imgSrc: Flipkart},
    {id: 'free-retailers11', text: 'Myntra', imgSrc: Myntra},
    {id: 'free-retailers12', text: 'Onpluse', imgSrc: Onpluse},
    {id: 'free-retailers13', text: 'Ajio', imgSrc: Ajio},
    {id: 'free-retailers14', text: 'Shyaway', imgSrc: Shyaway},
    {id: 'free-retailers15', text: 'Foxtale', imgSrc: Foxtale},
    {id: 'free-retailers16', text: 'Caffeine', imgSrc: Caffeine}
  ]

  return (
    <>
      <div className='min-h-[200px] h-auto'>
      <div className='h-[45px] content-center'>
        <div className='flex items-center justify-between relative z-10'>
          <div className='text-[14px] font-semibold h-[40px] content-center bg-lightOrange px-2 max-w-[300px] w-full text-center flex-shrink-0 text-whiteColor md:block hidden'>Popular Cashback Stores</div>
          {/* <div><span><img src={Amazon} alt="" className='h-10' /></span></div>
          <div><span><img src={Flipkart} alt="" /></span></div>
          <div><span><img src={Myntra} alt="" /></span></div>
          <div><span><img src={Onpluse} alt="" /></span></div>
          <div><span><img src={Ajio} alt="" /></span></div>
          <div><span><img src={Shyaway} alt="" /></span></div>
          <div><span><img src={Foxtale} alt="" /></span></div>
          <div><span><img src={Caffeine} alt="" /></span></div> */}

          {/* mobile screen  */}
      <div ref={wrapperRef} className="wrapper w-full flex items-center overflow-hidden justify-center py-0 bg-whiteColor z-20">
                {brands.map((brand, index) => (
                    <div key={brand.name} ref={el => boxesRef.current[index] = el} className="box flex gap-7 items-center justify-center px-5 flex-shrink-0 relative font-bold flex-nowrap">
                        <img src={brand.imgSrc} alt="" />
                    </div>
                ))}
            </div>

          <div className='group md:flex hidden items-center gap-2 bg-lightOrange h-[40px] px-2 relative cursor-pointer'>
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



      <div className='xl:compare-grid md-compare-grid xl:grid items-start justify-between px-2 bg-buttonColor gap-2 py-2 h-auto'>
        <div className='bg-whiteColor w-full rounded-md flex-shrink-0 h-full md:block hidden'>
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
        <div className='bg-whiteColor w-full xl:max-w-[560px] max-w-none xl:flex-shrink-0 rounded-md h-full'>
          <CopareCounter />
        </div>
        <div className='bg-whiteColor w-full h-full rounded-md p-7 py-4 flex-shrink-0 md:block hidden'>
          <h3 className='text-[20px] font-bold text-blackColor text-center'>HOW TO EARN CASHBACK</h3>

          <div className='flex flex-col gap-2 mt-5'>
          {itemsCores.map((item, index) => (
            <div key={index} id={item.id} className='border border-borderColor bg-lightBackground flex items-center gap-2'>
            <span className='inline-flex w-[52px] h-[32px] border border-borderColor bg-lightBackground items-center justify-center'><img src={item.imgSrc} alt="" className='w-5' /></span>
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