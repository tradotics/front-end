import React from 'react'

export default function Profitcard() {
  return (
    <div className='flex flex-col items-start'>
        <div className='flex'>
            <span className='text-primary sm:text-sm sm:font-semibold md:text-sm md:font-semibold lg:text-md lg:font-bold'>Profit Factor</span></div>
        <div className='flex'>
            <span className='text-md font-semibold text-primary'>1.22</span>
        </div>
    </div>
  )
}
