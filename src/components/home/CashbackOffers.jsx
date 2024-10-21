import React from 'react'
import { NavLink } from 'react-router-dom'
import ArrowRight from '../../assets/Arrow Right.png'
import Clogo1 from '../../assets/image 56.png'
import Clogo2 from '../../assets/image 50.png'
import Clogo3 from '../../assets/image 57.png'
import Clogo4 from '../../assets/image 54.png'
import Clogo5 from '../../assets/image 51.png'
import Clogo6 from '../../assets/image 53.png'
import Clogo7 from '../../assets/image 61.png'
import Clogo8 from '../../assets/image 52.png'
import Clogo9 from '../../assets/image 62.png'
import Clogo10 from '../../assets/image.png'
import Clogo11 from '../../assets/image 60.png'
import Clogo12 from '../../assets/image 59.png'
import Clogo13 from '../../assets/image 55.png'
import Clogo14 from '../../assets/image 63.png'
import Clogo15 from '../../assets/image 58.png'

function CashbackOffers() {

    const cashbackData = [
        {id: 'cashback1', SrcImg: Clogo1, cashback: '10% Rewards'},
        {id: 'cashback2', SrcImg: Clogo2, cashback: '7% Rewards'},
        {id: 'cashback3', SrcImg: Clogo3, cashback: '6.5% Cashback'},
        {id: 'cashback4', SrcImg: Clogo4, cashback: '5% Cashback'},
        {id: 'cashback5', SrcImg: Clogo5, cashback: '3% Cashback'},
        {id: 'cashback6', SrcImg: Clogo6, cashback: '6.5% Cashback'},
        {id: 'cashback7', SrcImg: Clogo7, cashback: '8% Cashback'},
        {id: 'cashback8', SrcImg: Clogo8, cashback: '2.3% Cashback'},
        {id: 'cashback9', SrcImg: Clogo9, cashback: '1.9% Cashback'},
        {id: 'cashback10', SrcImg: Clogo10, cashback: '8.9% Cashback'},
        {id: 'cashback11', SrcImg: Clogo11, cashback: '10% Cashback'},
        {id: 'cashback12', SrcImg: Clogo12, cashback: '4.9% Cashback'},
        {id: 'cashback13', SrcImg: Clogo13, cashback: '3.1% Cashback'},
        {id: 'cashback14', SrcImg: Clogo14, cashback: '4.5% Cashback'},
        {id: 'cashback15', SrcImg: Clogo15, cashback: '8% Cashback'},
        // Add more cashbacks here...
    ]

    return (
        <>
            <div className='my-14'>
                <div className='flex items-center justify-between px-2'>
                    <h3 className='text-[30px] text-blackColor font-semibold mb-4'>Latest Smartphone Features</h3>
                    <div>
                        <NavLink to='' className={`flex items-center gap-2 text-[20px] text-blackColor`}>
                            <span>See all</span>
                            <span><img src={ArrowRight} alt="" className='h-7' /></span>
                        </NavLink>
                    </div>
                </div>

                <div className='grid grid-cols-5 gap-2 px-2'>
                    {cashbackData.map((cashbackData) => (
                        <div key={cashbackData.id} className='border-2 border-borderColor text-center'>
                            <div className='w-fit mx-auto py-2'>
                                <img src={cashbackData.SrcImg} alt="" className='w-[10vw]' />
                            </div>
                            <div className='py-2 border-t-2 border-borderColor text-[20px] text-blackColor font-medium bg-[#FCFCFD]'>
                                {cashbackData.cashback}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default CashbackOffers