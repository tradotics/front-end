import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';

export default function DetailedTableData() {
    return (
        <tr className='w-full h-12 bg-rowColor rounded-lg text-sm my-2'>
            <td className='text-center'>Aug 08 2022</td>
            <td className='text-left'>09:44:35</td>
            <td className='text-left'>Buy</td>
            <td className='text-left'>$1067.20</td>
            <td className='text-left'>540</td>
            <td className='text-left'>Gap Up</td>
            <td className='text-left'>$1067.20</td>
            <td className='text-left'>----</td>
            <td className='text-left'><DeleteIcon/></td>
        </tr>
    )
}
