import React from 'react'
import Calender from '../Calender/Calender'
import Insights from '../Insights/Insights'
import PerformanceChart from '../Performance/PerformanceChart'
import Sidebarmd from '../Sidebar/Sidebarmd'
import Journelsm from './Journelsm'

function SmJournelContent() {
    return (
        <div className='flex flex-row justify-between w-full 
        p-5 xl:p-5 lg:p-5 md:p-4 sm:p-1 xs:p-1 relative pt-16
        xs:flex sm:flex md:hidden lg:hidden xl:hidden'>
            {/* xs:px-2 sm:px-2 md:px-10 lg:px-56 xl:px-56 2xl:px-64 */}
            {/* {w-[95%] md:w-[90%] lg:w-[90%] xl:w-[90%]} */}
            <div className='sm:w-0 xs:w-0 flex'>
                <Sidebarmd />
            </div>
            <div className='w-full flex flex-col items-center justify-center p-2'>
                <div className='w-full flex items-center justify-center'>
                    <Journelsm />
                </div>
                <div className='w-full flex items-center justify-center pt-8'>
                    <Calender />
                </div>
                <div className='w-full flex items-center justify-center pt-8'>
                    <Insights />
                </div>
                <div className='w-full flex items-center justify-center pt-8'>
                    <PerformanceChart />
                </div>
            </div>
        </div>
    )
}

export default SmJournelContent
