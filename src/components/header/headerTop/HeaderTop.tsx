import React from 'react';

interface IHeaderTop{
    title: string,
}

function HeaderTop({title}: IHeaderTop) {
  return (
    <div>
        <h1 className='text-xl font-bold'>{title}</h1>
    </div>
  )
}

export default HeaderTop