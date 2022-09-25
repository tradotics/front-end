import React from 'react'
import TipsAndUpdatesSharpIcon from '@mui/icons-material/TipsAndUpdatesSharp';
export default function Feed() {
    return (
        <div className='flex flex-row items-center justify-center bg-background mb-1 p-3 rounded-lg'>
            <div><TipsAndUpdatesSharpIcon fontSize='small' sx={{ color: '#3498DB' }} /></div>
            <div className='pl-3'><p className='text-[12px] font-sm text-white'> Even though 'Gap Up' setup produces 20 wins setup produces 20 wins out of 32 trades (62.5% winrate)
                its profit factor is 0.6 .</p></div>
        </div>
    )
}
