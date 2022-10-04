import React from 'react'
import ViewListIcon from '@mui/icons-material/ViewList';
import Winbutton from '../Tradechart/Winbutton';
import Lossbutton from '../Tradechart/Lossbutton';

export default function JournelTradeData() {
  return (
    <tr className='w-full h-12 bg-rowColor text-sm my-2 hover:cursor-pointer' >
      <td className='text-center'><ViewListIcon/></td>
      <td className='text-center'><Winbutton/></td>
      <td className='text-left'>Aug 08 2022</td>
      <td className='text-left'>ASIANPAINTS</td>
      <td className='text-left text-success2'>$6013.50</td>
      <td className='text-left'>0.93%</td>
      <td className='text-left'><Lossbutton/></td>
      <td className='text-left'>40</td>
      <td className='text-left'>Gap Up</td>
      <td className='text-left'>00:14:26</td>
      <td className='text-left'>$1067.20</td>
      <td className='text-left'>00:14:26</td>
      <td className='text-left'>$1067.20</td>
    </tr>
  )
}
