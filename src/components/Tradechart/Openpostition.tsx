import React from 'react'
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import OpenTableData from './OpenTableData';

export default function Openpostition() {
  return (
    <div className='col-span-1 rounded-md'>
      <div className="flex p-3" >
            <LockOpenTwoToneIcon sx={{ fontSize: 40  }} className="text-primary" />
            <h3 className='text-lg font-bold text-primary p-2'>Closed Postions</h3>
        </div>
      <table className='w-full bg-tableColor text-secondary border-separate border-spacing-x-0 
                      border-spacing-y-2 px-1 pb-5 rounded-lg'>
        <tr className='w-full h-10 text-sm font-light rounded-md'>
          <th className='text-center'>Entry Date</th>
          <th className='text-left'>Symbol</th>
          <th className='text-left'>Side</th>
          <th className='text-left'>Volume</th>
        </tr>
        <OpenTableData/>
        <OpenTableData/>
        <OpenTableData/>
        <OpenTableData/>
      </table>
    </div>
  )
}
