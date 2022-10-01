import React from 'react'
import JournelAreachart from './JournelAreachart'

export default function JournelData() {
  return (
    <React.Fragment>
        <div className='flex flex-col justify-around p-2'>
          <div className='flex flex-row justify-between'>
            <span className='justify-start text-primary text-medium font-normal'>Winrate</span>
            <span className='justify-end text-primary text-medium font-semibold'>75%</span>
          </div>
          <div className='flex flex-row justify-between'>
            <span className='justify-start text-primary text-medium font-normal'>Total trades</span>
            <span className='justify-end text-primary text-medium font-semibold'>4</span>
          </div>
          <div className='flex flex-row justify-between'>
            <span className='justify-start text-primary text-medium font-normal'>Volume</span>
            <span className='justify-end text-primary text-medium font-semibold'>255</span>
          </div>
        </div>
        <div className='flex flex-col justify-around p-2'>
          <div className='flex flex-row justify-between'>
            <span className='justify-start text-primary text-medium font-normal'>Profit Factor</span>
            <span className='justify-end text-primary text-medium font-semibold'>2.55</span>
          </div>
          <div className='flex flex-row justify-between'>
            <span className='justify-start text-primary text-medium font-normal'>Winners</span>
            <span className='justify-end text-primary text-medium font-bold'>4</span>
          </div>
          <div className='flex flex-row justify-between'>
            <span className='justify-start text-primary text-medium font-normal'>Losers</span>
            <span className='justify-end text-primary text-medium font-semibold'>1</span>
          </div>
        </div>
        </React.Fragment>
  )
}
