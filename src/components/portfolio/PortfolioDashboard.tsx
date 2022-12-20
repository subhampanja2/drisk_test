import React from 'react';
import PortfolioOneItem from './PortfolioOneItem';

interface Iitem{
  name: string,
  amount:string
}

interface IPortfolioDashboard {
    dashboardData: Iitem[],
}

function PortfolioDashboard({dashboardData}: IPortfolioDashboard) {
  return (
    <div className='p-4 bg-white rounded-lg flex justify-between flex-wrap'>
        {
            dashboardData.length > 0 && 
            dashboardData.map((item: Iitem) => {
               return <PortfolioOneItem data={item} />
            })
        }
    </div>
  )
}

export default PortfolioDashboard