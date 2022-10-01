import React from 'react'
import JournelExp from '../../components/JournelCard/JournelExp'
import Journels from '../../components/JournelCard/Journels'
import Navbarlg from '../../components/Navbar/Navbarlg'
import Navbarsm from '../../components/Navbar/Navbarsm'
import Sidebarlg from '../../components/Sidebar/Sidebarlg'
import Sidebarmd from '../../components/Sidebar/Sidebarmd'
import { ExpandedChart } from '../../contexts/ExpandedChartcontext'

export default function Journelpage() {
  return (

    <ExpandedChart>
    <div className='h-full flex flex-col items-center' >
      <Navbarlg />
      <Navbarsm /> 
      <div className='flex flex-row justify-between w-full xs-1'>
        {/* xs:px-2 sm:px-2 md:px-10 lg:px-56 xl:px-56 2xl:px-64 */}
        {/* {w-[95%] md:w-[90%] lg:w-[90%] xl:w-[90%]} */}
        <div className='w-[50px] lg:w-0 md:w-0sm:w-0 xs:w-0 flex'>
          <Sidebarlg />
          <Sidebarmd />
        </div>
        <div className='xl:w-[calc(100vw-50px)] lg:w-[calc(100vw-50px)] md:w-[100%] sm:w-[100%] xs:w-full
                        flex flex-col items-center justify-center pt-16'>
          <Journels/>
        </div>
      </div>
    </div>
    </ExpandedChart>
  )
}
