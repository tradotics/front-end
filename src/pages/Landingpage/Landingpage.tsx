import React from 'react'
import { design } from '../../assets/Design'
import Calender from '../../components/Calender/Calender'
import Insights from '../../components/Insights/Insights'
import Journellg from '../../components/Journel/Journellg'
import Journelmd from '../../components/Journel/Journelmd'
import Navbarlg from '../../components/Navbar/Navbarlg'
import Navbarsm from '../../components/Navbar/Navbarsm'
import PerformanceChart from '../../components/Performance/PerformanceChart'
import Sidebarlg from '../../components/Sidebar/Sidebarlg'
import Sidebarmd from '../../components/Sidebar/Sidebarmd'
import Openpostition from '../../components/Tradechart/Openpostition'
import Tradechart from '../../components/Tradechart/Tradechart'


export default function Landingpage() {
  return (
    <div className='h-full flex flex-col items-center' >
      <Navbarlg />
      <Navbarsm />
      <div className='flex flex-row justify-between w-full pt-16 p-5'>
        {/* xs:px-2 sm:px-2 md:px-10 lg:px-56 xl:px-56 2xl:px-64 */}
        {/* {w-[95%] md:w-[90%] lg:w-[90%] xl:w-[90%]} */}
        <div className='w-[50px] flex'>
          <Sidebarlg />
          <Sidebarmd />
        </div>
        <div className='xl:w-[calc(100vw-50px)] lg:w-[100%] md:w-[100%] flex flex-col items-center justify-center pt-8 p-5'>
          <Journellg />
          <Journelmd />
          <div className='grid grid-rows-1 grid-cols-3 w-full gap-3 items-center pt-8 pb-2
                          xs:hidden sm:hidden md:hidden lg:grid xl:grid'>
            <Tradechart />
            <Insights />
          </div>
          <div className='grid grid-rows-1 grid-cols-2 w-full gap-3 items-center pt-8 pb-2
                          xs:grid sm:grid md:grid lg:hidden xl:hidden'>
            <Insights />
            <Calender />
          </div>
          <div className='grid grid-rows-1 grid-cols-3 w-full gap-2 items-center pt-2 pb-8
                          xs:hidden sm:hidden md:hidden lg:grid xl:grid'>
            <PerformanceChart />
            <Openpostition />
          </div>
          <div className='grid grid-rows-1 grid-cols-1 w-full gap-2 items-center pt-2 pb-8
                          xs:hidden sm:grid md:grid lg:hidden xl:hidden'>
            <PerformanceChart />
          </div>
        </div>
      </div>

    </div>
  )
}
