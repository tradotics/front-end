import React from 'react'

export default function Labels() {
    return (
            <div className='flex flex-col justify-center pt-5'>
                <div className='flex flex-row pb-1'>
                    <div className='h-4 w-4' style={{ backgroundColor: '#53C0A3' }}></div>
                    <div className='flex flex-col justify-center pl-3'>
                        <span className='font-bold text-sm text-white'>10</span>
                        <span className='font-light text-sm' style={{ color: '#53C0A3' }}>Wins</span>
                    </div>
                </div>
                <div className='flex flex-row pb-1'>
                    <div className='h-4 w-4' style={{ backgroundColor: '#ED767A' }}></div>
                    <div className='flex flex-col pl-2'>
                        <span className='font-bold text-sm text-white'>10</span>
                        <span className='font-light text-sm' style={{ color: '#ED767A' }}>Losses</span>
                    </div>
                </div>
            </div>
    )
}
