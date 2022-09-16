import React from 'react'
import Feed from './Feed'
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';

export default function Insights() {
  return (
    <div className="pt-10 flex flex-col">
        <div className="flex p-3" >
            <SpaOutlinedIcon sx={{ fontSize: 40  }} className="text-primary" />
            <h3 className='text-lg font-bold text-primary p-2'>Insights</h3>
        </div>
        <Feed/>
        <Feed/>
        <Feed/>
        <Feed/>
        <Feed/>
        <Feed/>
        <Feed/>
        <Feed/>
    </div>
  )
}
