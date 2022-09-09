import React from 'react'
import { logo } from '../../assets/Logo'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Filterbutton from './Filterbutton';

export default function Navbarlg() {
    return (

        <div className="h-12.5 bg-background 
        flex-row items-center justify-around 
        text-primary 
        sm:hidden md:hidden lg:hidden xl:flex 2xl:flex">
            <div className="w-5/12 flex justify-around items-center">
                <div className="flex justify-center">
                    <span className="relative top-1 z-50">{logo}</span>
                    <span className="flex items-center font-bold text-lg">Dashboard</span>
                </div>
                <div className="flex items-center justify-around space-x-2 ">
                    <Filterbutton>Symbol</Filterbutton>
                    <Filterbutton>Setup</Filterbutton>
                    <Filterbutton>Side</Filterbutton>
                    <Filterbutton>Day</Filterbutton>
                    <Filterbutton>More</Filterbutton>
                </div>
                
            </div>
            <div className="w-3/12 flex items-center justify-around">
                <div className="flex space-x-2 ">
                    <div className="h-6.5 px-8 bg-gradient-to-b from-blue1 to-blue2 rounded text-xs font-bold flex items-center justify-center">
                        Selected</div>
                    <div className="h-6.5 px-8 bg-gradient-to-b from-blue1 to-blue2 rounded text-xs font-bold flex items-center justify-center">
                        Clear Filter</div>
                </div>
            </div>
            <div className="w-2/12 flex items-center justify-evenly">
                <div className="flex space-x-3 ">
                    <div className="h-6.5 px-8 bg-gradient-to-b from-blue1 to-blue2 rounded text-xs font-bold flex items-center justify-center">
                    01 Jan 22 - 11 Aug 22 </div>
                </div>
            </div>
            <div className="w-2/12 flex items-center justify-evenly">
                <div className="flex space-x-3 ">
                    <div className="h-6.5 px-8 bg-quickbutton rounded text-xs font-bold flex items-center justify-evenly">
                        <span >Quick Note</span>
                        <AddCircleIcon className="ml-3"/>
                        </div>
                </div>
            </div>
        </div>
    )
}
