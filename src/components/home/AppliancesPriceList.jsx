import React from 'react'
import { NavLink } from 'react-router-dom'
import Arrow from '../../assets/downarrow.svg'

function AppliancesPriceList() {

  // TODO: Fetch and display best appliances price list from API

  const priceList1 = [
    { id: 'list1', title: 'Best Air Purifiers Under 15,000 In India', to: '/#' },
    { id: 'list2', title: 'Best Single Door Refrigerators In India', to: '/#' },
    { id: 'list3', title: 'Best Mini Washing Machines In India', to: '/#' },
    { id: 'list4', title: 'Best Air Purifiers Under 10,000 In India', to: '/#' },
    { id: 'list5', title: 'Best Double Door Refrigerators In India', to: '/#' },
    { id: 'list6', title: 'Best Refrigerators In India', to: '/#' },
    { id: 'list7', title: 'Best 8kg Washing Machines In India', to: '/#' },
    { id: 'list8', title: 'Best Top Load Washing Machines 9kg In India', to: '/#' },
    { id: 'list9', title: 'Best Washing Machines Under 40,000 In India', to: '/#' },
    { id: 'list10', title: 'Best Washing Machines Under 12,000 in India', to: '/#' },
    { id: 'list11', title: 'Best Washing Machines In India', to: '/#' },
    { id: 'list12', title: 'Best 1 Ton ACs in India', to: '/#' },
    { id: 'list13', title: 'Best Split ACs in India', to: '/#' },
    { id: 'list14', title: 'Best ACs in India', to: '/#' },
    { id: 'list15', title: 'Best 1.5 Ton ACs in India', to: '/#' },
    // Add more items here...
  ]

  const priceList2 = [
    { id: 'slist1', title: 'Best Air Purifiers in India', to: '/#' },
    { id: 'slist2', title: 'Best 2 Ton Split ACs in India', to: '/#' },
    { id: 'slist3', title: 'Best Fully Automatic Washing Machines In', to: '/#' },
    { id: 'slist4', title: 'Best Window ACs in India', to: '/#' },
    { id: 'slist5', title: 'Best Front Load Washing Machines In India', to: '/#' },
    { id: 'slist6', title: 'Best Semi Automatic Washing Machines In...', to: '/#' },
    { id: 'slist7', title: 'Best Top Load Washing Machines In India', to: '/#' },
    { id: 'slist8', title: 'Best Washing Machines Under 10.000 In India', to: '/#' },
    { id: 'slist9', title: 'Best Washing Machines Under 30,000 In India', to: '/#' },
    { id: 'slist10', title: 'Best Washing Machines Under 25,000 In India', to: '/#' },
    { id: 'slist11', title: 'Best Washing Machines with Dryer In India', to: '/#' },
    { id: 'slist12', title: 'Best Refrigerators Under 30,000 In India', to: '/#' },
    { id: 'slist13', title: 'Best Refrigerators Under 15,000 In India', to: '/#' },
    { id: 'slist14', title: 'Best Washing Machines Under 20,000 In India', to: '/#' },
    { id: 'slist15', title: 'Best Washing Machines Under 15,000 In India', to: '/#' },
    // Add more items here...
  ]

  const priceList3 = [
    { id: 'tlist1', title: 'Best Side by Side Refrigerators In India', to: '/#' },
    { id: 'tlist2', title: 'Best Refrigerators Under 40,000 In India', to: '/#' },
    { id: 'tlist3', title: 'Best Refrigerators Under 25,000 In India', to: '/#' },
    { id: 'tlist4', title: 'Best Refrigerators Under 20,000 in India', to: '/#' },
    { id: 'tlist5', title: 'Best Refrigerators Under 10,000 In India', to: '/#' },
    { id: 'tlist6', title: 'Best 5 Star Single Door Refrigerators in India', to: '/#' },
    { id: 'tlist7', title: 'Best Washing Machines In India', to: '/#' },
    { id: 'tlist8', title: 'Best 1 Ton ACs in India', to: '/#' },
    { id: 'tlist9', title: 'Best Split ACs in India', to: '/#' },
    { id: 'tlist10', title: 'Best ACs in India', to: '/#' },
    { id: 'tlist11', title: 'Best 1.5 Ton ACs in India', to: '/#' },
    { id: 'tlist12', title: 'Best Window ACs in India', to: '/#' },
    { id: 'tlist13', title: 'Best Air Purifiers in India', to: '/#' },
    { id: 'tlist14', title: 'Best 2 Ton Split ACs in India', to: '/#' },
    { id: 'tlist15', title: 'Best ACs in India', to: '/#' },
    // Add more items here...
  ]

  return (
    <>
      <div className='my-14'>
        <h3 className='text-[30px] text-blackColor font-semibold px-2 mb-4'>Best Appliances Price List</h3>

        <div className='grid grid-cols-3 px-2 gap-2'>
          <div className='flex gap-0.5 flex-col'>
          {priceList1.map((priceList1) => (
            <div key={priceList1.id}>
              <NavLink to={priceList1.to} className='flex items-center gap-2 hover:text-buttonColor text-[17px]'>
                <span><img src={Arrow} alt="" className='w-2 invert -rotate-90' /></span>
                <span>{priceList1.title}</span>
              </NavLink>
            </div>
          ))}
          </div>

          <div className='flex gap-0.5 flex-col'>
          {priceList2.map((priceList2) => (
            <div key={priceList2.id}>
              <NavLink to={priceList2.to} className='flex items-center gap-2 hover:text-buttonColor text-[17px]'>
              <span><img src={Arrow} alt="" className='w-2 invert -rotate-90' /></span>
                <span>{priceList2.title}</span>
              </NavLink>
            </div>
          ))}
          </div>

          <div className='flex gap-0.5 flex-col'>
          {priceList3.map((priceList3) => (
            <div key={priceList3.id}>
              <NavLink to={priceList3.to} className='flex items-center gap-2 hover:text-buttonColor text-[17px]'>
              <span><img src={Arrow} alt="" className='w-2 invert -rotate-90' /></span>
                <span>{priceList3.title}</span>
              </NavLink>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AppliancesPriceList