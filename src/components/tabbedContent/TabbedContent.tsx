import React, { useState } from 'react';

//** component */
import TabbedContentOne from './TabbedContentOne';

export interface IContentOne{
    img: string,
    name: string,
    investedValue: string,
    currentValue: string,
    returns: string,
}

interface ITabbedContent{
    liveData: IContentOne[],
    closedData: IContentOne[]
}

function TabbedContent({liveData, closedData}: ITabbedContent ) {

  const [tabOpen, isTabOpen] = useState(0);

  return (
    <div>
        <nav className='flex mb-4 justify-around'>
            <a className={`w-full px-4 py-2 font-semibold text-center ${tabOpen === 0 && 'border-b-2 border-yellow-500'}`} href="#" onClick={() => isTabOpen(0)}>Live</a>
            <a className={`w-full px-4 py-2 font-semibold text-center ${tabOpen === 1 && 'border-b-2 border-yellow-500'}`} href="#" onClick={() => isTabOpen(1)}>Closed</a>
        </nav>
        <div>
            {
                tabOpen === 0 ?
                liveData.map((contentOne: IContentOne, i: any) => {
                    return <TabbedContentOne data={contentOne} key={i} />
                })
                :
                closedData.map((contentOne: IContentOne, i: any) => {
                    return <TabbedContentOne data={contentOne} key={i} />
                })
            }
        </div>
    </div>
  )
}

export default TabbedContent;


{/* <nav className="flex mb-4">
<a className="px-4 py-2 font-semibold rounded-t-md text-center bg-gray-200 focus:outline-none focus:bg-gray-300" href="#">Chats</a>
<a className="px-4 py-2 font-semibold text-center bg-gray-200 focus:outline-none focus:bg-gray-300" href="#">Calls</a>
</nav> */}