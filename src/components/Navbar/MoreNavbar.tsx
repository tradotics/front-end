import React from 'react'
import Filterbutton from './Filterbutton'

export default function MoreNavbar() {
    return (
        <React.Fragment>
        <div className="fixed top-0 left-0 w-full h-12.5 bg-background 
        flex flex-row items-center justify-between
        text-primary p-5 z-50 xs:hidden sm:hidden md:hidden lg:flex xl:flex">
            <div className="flex justify-around">
                <span className="relative top-3 z-1">
                    <img src="images/logo.png" alt="logo is not found" className='h-22 w-23 relative z-50'/>
                </span>
                <span className="flex items-center font-bold text-lg">Dashboard</span>
            </div>
            <div className="flex space-x-2">
                <Filterbutton>Symbol</Filterbutton>
                <Filterbutton>Setup</Filterbutton>
                <Filterbutton>Side</Filterbutton>
                <Filterbutton>Day</Filterbutton>
                <Filterbutton>More</Filterbutton>
                <div className="h-6.5 px-8 bg-gradient-to-b from-blue1 to-blue2 rounded text-xs font-bold flex items-center justify-center">
                    Selected</div>
                <div className="h-6.5 px-8 bg-gradient-to-b from-blue1 to-blue2 rounded text-xs font-bold flex items-center justify-center">
                    Clear Filter</div>
            </div>
        </div>
        </React.Fragment>
    )
}
