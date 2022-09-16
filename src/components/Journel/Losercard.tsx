import React from 'react'

function Losercard() {
  return (
    <div className='flex flex-col items-start'>
        <div className='flex'>
            <span className='text-primary sm:text-sm sm:font-semibold md:text-sm md:font-semibold lg:text-md lg:font-bold'>Average Lossers</span></div>
        <div className='flex'>
            <span className='text-xl font-bold text-error1'>1.22</span>
        </div>
    </div>
  )
}

export default Losercard