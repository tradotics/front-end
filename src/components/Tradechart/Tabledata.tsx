import React from 'react'
import Lossbutton from './Lossbutton'
import Winbutton from './Winbutton'
import ViewListIcon from '@mui/icons-material/ViewList';

export default function () {
  return (
    <tr className='w-full h-12 bg-rowColor rounded-lg text-sm my-2'>
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
