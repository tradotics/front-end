import React from 'react'

export default function Winrate() {
    return (
        <div className="flex flex-col w-full h-full">
            <div className="w-[60%] flex items-start justify-center text-primary"><h2 className="text-md font-medium">Win ratio</h2></div>
            <div className="flex flex-col justify-end items-end"><span className="flex justify-center mb-2"><h2 className="text-xl text-failure2 font-normal">$6013.50</h2></span></div>
            <div className="flex justify-end items-end mb-2"><p className="text-xs text-primary font-medium">TATA MOTORS</p></div>
            <div className="flex justify-end items-end mb-2"><p className="text-xs text-primary font-light">Date: 03-August 2022</p></div>
        </div>
    )
}
