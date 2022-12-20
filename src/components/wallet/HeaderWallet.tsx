import React from 'react';

//** icons */
import {CiWallet} from 'react-icons/ci';

//** images */
import usdtImage from "../../assets/usdt.png";

interface IHeaderWallet{
    amount: number
}

function HeaderWallet({amount} : IHeaderWallet) {
  return (
    <div className='p-1 bg-white rounded-lg cursor-pointer'>
        <div className='flex justify-between items-center px-2'>
            <div>
                <CiWallet />
            </div>
            <div className='ml-2'>
                {amount}
            </div>
            <div className='ml-2' style={{width: "16px"}}>
                <img src={usdtImage} alt="usdt coin" />
            </div>
        </div>
    </div>
  )
}

export default HeaderWallet