import React,{ useContext } from 'react'
import { ExpandedChartContext } from '../../contexts/ExpandedChartcontext'
import JournelCard from './JournelCard'
import JournelExp from './JournelExp'

export default function Journels() {
  const { showexpchart,setShowexpchart } = useContext(ExpandedChartContext)
  return (
    <div className='grid grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 
    sm:grid-cols-1 xs:grid-cols-1
    gap-3 xl:gap-3 lg:gap-3 md:gap-2 items-center justify-center p-2'>
        { showexpchart && <JournelExp/> }
        <JournelCard/>
        <JournelCard/>
        <JournelCard/>
        <JournelCard/>
        <JournelCard/>
        <JournelCard/>
        <JournelCard/>
        <JournelCard/>
        <JournelCard/>
        <JournelCard/>

    </div>
  )
}
