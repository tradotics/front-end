import React from 'react'

export default function Totalpnl() {
  return (
    <div className='grid grid-cols-2 grid-rows-2'>
      <div className="row-span-2 col-span-1 flex justify-center items-end">
        <span className='text-primary sm:text-sm sm:font-semibold md:text-sm md:font-semibold lg:text-lg lg:font-semibold'>Total Net P&L</span> </div>
      <div className="row-span-1 col-span-1 pl-3">
        <span className='text-lg font-bold text-success1 sm:text-md sm:font-bold md:text-md md:font-bold lg:text-lg lg:font-bold '>$25,683</span>
      </div>
      <div className="row-span-1 col-span-1 pl-3">
        <span className=' text-primary sm:text-xs sm:font-normal md:text-xs md:font-normal lg:text-xs lg:font-light '>(IN 68 TRADES)</span>
      </div>
    </div>
  )
}
