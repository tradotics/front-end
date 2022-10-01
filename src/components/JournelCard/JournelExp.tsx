import React,{useContext} from 'react'
import JournelAreachart from './JournelAreachart'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import JournelData from './JournelData';
import Openpostition from '../Tradechart/Openpostition';
import JournelExpTable from './JournelExpTable';
import { ExpandedChartContext } from '../../contexts/ExpandedChartcontext';

export default function JournelExp() {
  const { showexpchart,setShowexpchart } = useContext(ExpandedChartContext)
  return (
    <div className='flex flex-col bg-background50 col-span-2 row-span-2 p-3'>
      <div className='flex flex-row gap-8'>
        <span className='text-primary font-semibold fontSizeSmall' onClick={()=>{setShowexpchart(!showexpchart)}}><KeyboardArrowDownIcon /></span>
        <span className='text-primary font-bold'>Wed,Aug 11,2022 </span>
        <span className='text-success2 font-semibold text-lg'>Net P&L 4036.00 $</span>
      </div>

      <div className='flex flex-row'>
        <div className='flex flex-col p-3 px-3'>
          <JournelAreachart/>
          <JournelData/>
        </div>
        <div className='flex flex-col p-3 w-full'>
          <JournelExpTable/>
        </div>
      </div>
    </div>
  )
}
