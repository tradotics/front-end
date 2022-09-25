import React ,{useState} from 'react'
import Areachart from './Areachart'
import Barchart from './Barchart'

export default function Feed() {
  const [showDailychart, setShowdailychart] = useState<Boolean>(false)
  return (
    <div className='flex flex-col w-full h-full'>
        <div className='flex flex-row items-start gap-2 w-[50%] border-b-2 border-quickbutton'>
            <div className='flex items-start hover:border-b-2 '>
                <span className='text-sm font-bold text-primary rounded-md p-1 hover:bg-quickbutton hover:text-decoration-line'>
                  Cumulatice P&L</span></div>
            <div className='flex items-start hover:border-b-2 hover:text-decoration-line'
                onMouseEnter={()=>{setShowdailychart(!showDailychart)}} onMouseLeave={()=>{setShowdailychart(!showDailychart)}}>
                <span className='text-sm font-bold text-primary rounded-md p-1 hover:bg-quickbutton hover:text-decoration-line'>
                  Daily P&L</span></div>
        </div>
        <div className='flex items-center justify-center pt-2 w-[95%] h-[90%]'>
          { showDailychart ? <Areachart/> : <Barchart/> }
        </div>
    </div>
  )
}
