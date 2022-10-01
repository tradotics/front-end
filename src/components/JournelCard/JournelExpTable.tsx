import React from 'react'
import JournelTableData from './JournelTableData'

export default function JournelExpTable() {
  return (
    <div className='col-span-2 rounded-md'>
      <div className='overflow-y-scroll max-h-[600px]
                        scrollbar-thin scrollbar-thumb-[#3E3F3F] scrollbar-track-[#6E6E6E] '>
        <table className='w-full bg-background50 text-secondary border-separate border-spacing-x-0 
                      border-spacing-y-3 px-1 pb-5 rounded-lg'>
          <tr className='w-full h-12 text-xs font-light rounded-lg bg-gradient-to-b from-journalTable0 to-journalTable1'>
            <th className='text-center'>Entry Time</th>
            <th className='text-left'>Exit Time</th>
            <th className='text-left'>Symbol</th>
            <th className='text-left'>Side</th>
            <th className='text-left'>Volume</th>
            <th className='text-left'>Net P&L</th>
            <th className='text-left'>ROI</th>
            <th className='text-left'>RR Ratio</th>
            </tr>
            <JournelTableData/>
            <JournelTableData/>
            <JournelTableData/>
            <JournelTableData/>
        </table>
      </div>
    </div>
  )
}
