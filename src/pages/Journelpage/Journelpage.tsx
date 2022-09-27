import React from 'react'
import Navbarlg from '../../components/Navbar/Navbarlg'
import Sidebarlg from '../../components/Sidebar/Sidebarlg'

export default function Journelpage() {
  return (
    <div className='w-full h-full flex flex-row'>
        <div className="w-full">
            <Navbarlg/>
        </div>
        <div className='flex flex-row bg-red-300'>
            <Sidebarlg/>
            <div className='bg-blue-400'>
                hello
            </div>
        </div>

    </div>
  )
}
