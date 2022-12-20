import React from 'react'

//** usdt img */
import usdtImg from '../../assets/usdt.png';

interface IPortfolioOneItem{
    data: any,
}

function PortfolioOneItem({data}: IPortfolioOneItem) {
  return (
    <div className='p-2 w-30'>
        <div>
            <p className='text-xs text-slate-400'>{data.name}</p>
        </div>
        <div className='flex items-center'>
            <div className='' style={{width: "16px"}}>
                <img src={usdtImg} alt="usdt" />
            </div>
            <div className='ml-2'>
                <h1 className='text-lg'>{data.amount}</h1>
            </div>
        </div>
    </div>
  )
}

export default PortfolioOneItem