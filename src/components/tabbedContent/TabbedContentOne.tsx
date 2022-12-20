import React from 'react';

//** icons */
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

// interface
import { IContentOne } from './TabbedContent';

//** component */
import PortfolioOneItem from '../portfolio/PortfolioOneItem';

interface ITabbedContentOne {
    data: IContentOne
}

function TabbedContentOne({data}:ITabbedContentOne) {

    let bottomData1 = {
        name : Object.keys(data)[2],
        amount: data.returns
    }
    let bottomData2 = {
        name : Object.keys(data)[3],
        amount: data.returns
    }
    let bottomData3 = {
        name : Object.keys(data)[4],
        amount: data.returns
    }


  return (
    <div className='mb-4 bg-white rounded-lg '>
        <div className='flex justify-between'>
            <div>
                <img src={data?.img} alt="images" className='w-36 rounded' />
            </div>
            <div className='ml-2 pt-2'>
                <p className='text-xs'>{data?.name}</p>
            </div>
            <div className='mr-2 pt-2'>
                <BsFillArrowRightCircleFill />
            </div>
        </div>
        <div></div>
        <div className='flex justify-evenly'>
            <div>
                <PortfolioOneItem data={bottomData1} />
            </div>
            <div>
                <PortfolioOneItem data={bottomData2} />
            </div>
            <div>
                <PortfolioOneItem data={bottomData3} />
            </div>
        </div>
    </div>
  )
}

export default TabbedContentOne