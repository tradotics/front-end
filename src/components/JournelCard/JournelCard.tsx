import React,{useContext} from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import JournelData from './JournelData';
import JournelAreachart from './JournelAreachart';
import { ExpandedChartContext } from '../../contexts/ExpandedChartcontext';

export default function JournelCard() {

  const { showexpchart,setShowexpchart } = useContext(ExpandedChartContext)
  return (
    <div className='flex flex-col bg-background w-[36rem] h-[12rem] lg:w-[36rem] lg:h-[12rem] 
                    md:w-[30rem] md:h-[10rem] sm:w-[100%] xs:w-[100%] rounded-lg p-4'>
      <div className='flex flex-row gap-5'>
        <span className='text-primary font-semibold fontSizeSmall' onClick={()=>{setShowexpchart(!showexpchart)}}><KeyboardArrowRightIcon /></span>
        <span className='text-primary font-bold'>Wed,Aug 11,2022 </span>
        <span className='text-success2 font-semibold text-lg'>Net P&L 4036.00 $</span>
      </div>
      <div className='grid grid-cols-3 gap-5 h-[90%] w-[90%]'>
        <div className='flex h-[80%] w-[90%] m-auto'><JournelAreachart /></div>
          <JournelData/>
        </div>
    </div>
  )
}
