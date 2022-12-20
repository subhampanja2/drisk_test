
import React, { useState } from 'react';

//**icons */
import { HiOutlineHome , HiOutlineChartBar } from 'react-icons/hi';
import { BsBoundingBox } from 'react-icons/bs';
import { CiWallet } from 'react-icons/ci';


function Footer() {

  const [menuOpen, setMenuOpen] = useState(2);

  return (
    <div className='fixed bottom-0 h-10 bg-white w-full flex justify-evenly items-center'>
        <div className='cursor-pointer' onClick={() => setMenuOpen(0)}>
            <HiOutlineHome className={`${menuOpen === 0 ? "text-2xl text-orange-600" : "text-xl"}`} />
        </div>
        <div className='cursor-pointer' onClick={() => setMenuOpen(1)}>
            <BsBoundingBox className={`${menuOpen === 1 ? "text-xl text-orange-600" : "text-lg"}`}/>
        </div>
        <div className='cursor-pointer' onClick={() => setMenuOpen(2)}>
            <HiOutlineChartBar className={`${menuOpen === 2 ? "text-2xl text-orange-600" : "text-xl"}`} />
        </div>
        <div className='cursor-pointer' onClick={() => setMenuOpen(3)}>
            <CiWallet className={`${menuOpen === 3 ? "text-2xl text-orange-600" : "text-xl"}`} />
        </div>
    </div>
  )
}

export default Footer