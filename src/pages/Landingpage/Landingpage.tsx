import React from 'react'
import Insights from '../../components/Insights/Insights'
import Journellg from '../../components/Journel/Journellg'
import Journelmd from '../../components/Journel/Journelmd'
import Navbarlg from '../../components/Navbar/Navbarlg'
import Navbarsm from '../../components/Navbar/Navbarsm'
import Sidebarlg from '../../components/Sidebar/Sidebarlg'
import Sidebarmd from '../../components/Sidebar/Sidebarmd'


export default function Landingpage() {
  return (
    <div className='h-full flex flex-col items-center' >
      <Navbarlg />
      <Navbarsm />
      <div className='flex flex-col w-[95%] md:w-[90%] lg:w-[75%] xl:w-[70%] items-center pt-16'>
        {/* xs:px-2 sm:px-2 md:px-10 lg:px-56 xl:px-56 2xl:px-64 */}
          <Sidebarlg />
          <Sidebarmd />
          <Journellg />
          <Journelmd />
          <div className='grid grid-rows-1 grid-cols-2 w-full gap-2 items-center'>
            <Insights />
            <Insights />
          </div>
        </div>

    </div>
  )
}
