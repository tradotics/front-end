import React from 'react'
import Calender from '../Calender/Calender'
import Insights from '../Insights/Insights'
import PerformanceChart from '../Performance/PerformanceChart'
import Sidebarlg from '../Sidebar/Sidebarlg'
import Sidebarmd from '../Sidebar/Sidebarmd'
import Openpostition from '../Tradechart/Openpostition'
import Journellg from './Journellg'
import Journelmd from './Journelmd'
import Journelsm from './Journelsm'
import JournelTradeChart from './JournelTradeChart'

export default function MdJournelContent() {
  return (
    <div className='flex-row justify-between w-full 
    p-5 xl:p-5 lg:p-5 md:p-4 sm:p-1 xs:p-1 mt-8 relative 
    xs:hidden sm:hidden md:flex lg:flex xl:flex'>
      {/* xs:px-2 sm:px-2 md:px-10 lg:px-56 xl:px-56 2xl:px-64 */}
      {/* {w-[95%] md:w-[90%] lg:w-[90%] xl:w-[90%]} */}
      <div className='w-[50px] xl:w-[50px] lg:w-[50px] md:w-0 sm:w-0 xs:w-0 flex'>
        <Sidebarlg />
        <Sidebarmd />
      </div>
      <div className='xl:w-[calc(100vw-50px)] lg:w-[100%] md:w-[100%] flex flex-col items-center justify-center pt-8 p-5'>
        <Journellg />
        <Journelmd />
        <Journelsm />
        <div className='grid grid-rows-1 grid-cols-3 w-full gap-3 items-center pt-8 pb-2
                        xs:hidden sm:hidden md:hidden lg:grid xl:grid'>
          <JournelTradeChart/>
          <Insights />
        </div>
        <div className='grid grid-rows-1 grid-cols-2 w-full gap-3 items-center pt-8 pb-2
                        xs:grid sm:grid md:grid lg:hidden xl:hidden'>
          <Insights />
          <Calender />
        </div>
        <div className='grid grid-rows-1 grid-cols-1 w-full gap-3 items-center pt-8 pb-2
                        xs:grid sm:grid md:grid lg:hidden xl:hidden'>
          <JournelTradeChart/>
        </div>
        <div className='grid grid-rows-1 grid-cols-3 w-full gap-2 items-center pt-2 pb-8
                        xs:hidden sm:hidden md:hidden lg:grid xl:grid'>
          <PerformanceChart />
          <Openpostition />
        </div>
        <div className='grid grid-rows-1 grid-cols-1 w-full gap-2 items-center pt-2
                        xs:hidden sm:grid md:grid lg:hidden xl:hidden'>
          <PerformanceChart />
        </div>
      </div>
    </div>
  )
}
