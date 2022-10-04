import React from 'react'
import Pnlcard from '../../components/Journel/Pnlcard'
import Scorecard from '../../components/Journel/Scorecard'
import Navbarlg from '../../components/Navbar/Navbarlg'
import Navbarsm from '../../components/Navbar/Navbarsm'
import Sidebarlg from '../../components/Sidebar/Sidebarlg'
import Sidebarmd from '../../components/Sidebar/Sidebarmd'
import CardsFeed from '../../components/TradeCards/CardsFeed'
import Tradechart from '../../components/Tradechart/Tradechart'

export default function Tradespage() {
  return (
    <div className='h-full flex flex-col items-center' >
    <Navbarlg />
    <Navbarsm /> 
    <div className='flex flex-row justify-between w-full xs-1'>
      {/* xs:px-2 sm:px-2 md:px-10 lg:px-56 xl:px-56 2xl:px-64 */}
      {/* {w-[95%] md:w-[90%] lg:w-[90%] xl:w-[90%]} */}
      <div className='w-[50px] lg:w-0 md:w-0 sm:w-0 xs:w-0 flex'>
        <Sidebarlg />
        <Sidebarmd />
      </div>
      
      <div className='xl:w-[calc(100vw-50px)] lg:w-[calc(100vw-50px)] md:w-[100%] sm:w-[100%] xs:w-full
                      flex flex-col items-center justify-center p-32 lg:p-32 xl: sm:p-2 '>
        <div className="w-full flex pt-8">
          <CardsFeed/>
        </div>               
        <div className="w-full flex pt-8">
          <Tradechart/>
        </div>
      </div>
    </div>
  </div>
  )
}
