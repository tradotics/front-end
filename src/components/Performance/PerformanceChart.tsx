import React from 'react'
import SpeedIcon from '@mui/icons-material/Speed';
import DayPerformance from './DayPerformance';

export default function PerformanceChart() {
  return (
    <div className="col-span-2">
        <div className="flex p-3" >
            <SpeedIcon sx={{ fontSize: 40  }} className="text-primary" />
            <h3 className='text-lg font-bold text-primary p-1'>Insights</h3>
        </div>
        <div className='grid grid-cols-3 grid-row-1 gap-3'>
        <DayPerformance/>
        <DayPerformance/>
        <DayPerformance/>
        </div>
        </div>
  )
}
