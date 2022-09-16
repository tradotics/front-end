import React from 'react'
import Areachart from './Areachart'
// import Barchart from './Barchart'

export default function Feed() {
  return (
    <div className='flex flex-col w-full h-full p-2'>
        <div className='flex flex-row items-start gap-2 w-[30%] border-b-2 border-quickbutton'>
            <div className='flex items-start hover:border-b-2 hover:border-purple'>
                <span className='text-sm font-bold text-primary rounded-md p-1 hover:bg-quickbutton'>Cumulatice P&L</span></div>
            <div className='flex items-start hover:border-b-2 hover:border-purple'>
                <span className='text-sm font-bold text-primary rounded-md p-1 hover:bg-quickbutton'>Daily P&L</span></div>
        </div>
        <div className='flex items-center'>
            {/* <Barchart/> */}
            <Areachart/>
        </div>
    </div>
  )
}
