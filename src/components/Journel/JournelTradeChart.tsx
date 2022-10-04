import React from 'react'
import JournelTradeData from './JournelTradeData'

export default function JournelTradeChart() {
    return (
        <div className='w-full col-span-2 rounded-md  bg-background50'>
            <div className='w-full overflow-y-scroll max-h-[34rem]
                        scrollbar-thin scrollbar-thumb-[#3E3F3F] scrollbar-track-[#6E6E6E] '>
            <table className='w-full text-secondary border-separate border-spacing-x-0 
                        border-spacing-y-2 px-1 pb-1 rounded-lg'>
                <tr className='h-10 text-xs font-light rounded-md sticky z-40 top-0 bg-background'>
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
                <JournelTradeData/>
                <JournelTradeData/>
                <JournelTradeData/>
                <JournelTradeData/>
                <JournelTradeData/>
                <JournelTradeData/>
                <JournelTradeData/>
                <JournelTradeData/>
                <JournelTradeData/>
                <JournelTradeData/>
                <JournelTradeData/>
                <JournelTradeData/>
                <JournelTradeData/>
                <JournelTradeData/>
            </table>
            <div className="w-full flex justify-center pb-3 sticky z-50"><span className="text-sm text-primary font-semibold">Showing 10 results</span></div>
            </div>
        </div>
    )
}
