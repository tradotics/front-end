import React from 'react'
import Tabledata from './Tabledata'


function Tradechart() {
  return (
    <div className='col-span-2 rounded-md'>
        <div className='overflow-y-scroll max-h-[600px]
                        scrollbar-thin scrollbar-thumb-[#3E3F3F] scrollbar-track-[#6E6E6E] '>
      <table className='w-full bg-background50 text-secondary border-separate border-spacing-x-0 
                      border-spacing-y-2 px-1 pb-5 rounded-lg'>
        <tr className='w-full h-5 text-xs font-light rounded-md'>
          <th className='text-center'></th>
          <th className='text-left'>Status</th>
          <th className='text-left'>Date</th>
          <th className='text-left'>Symbol</th>
          <th className='text-left'>Net P&L</th>
          <th className='text-left'>ROI</th>
          <th className='text-left'>Side</th>
          <th className='text-left'>Volume</th>
          <th className='text-left'>Setup</th>
          <th className='text-left'>Entry Time</th>
          <th className='text-left'>Entry Price</th>
          <th className='text-left'>Exit Time</th>
          <th className='text-left'>Exit Price</th>
        </tr>
        <Tabledata />
        <Tabledata />
        <Tabledata />
        <Tabledata />
        <Tabledata />
        <Tabledata />
        <Tabledata />
        <Tabledata />
        <Tabledata />
        <Tabledata />
        <Tabledata />
        <Tabledata />
        <Tabledata />
      </table>
        </div>
    </div>
  )
}

export default Tradechart