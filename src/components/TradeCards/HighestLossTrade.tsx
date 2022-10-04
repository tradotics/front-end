import React, { useState } from 'react'

export default function HighestLossTrade() {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const width = 60;
    return (
        <div className="flex flex-col w-full h-full justify-center" onMouseEnter={() => { setShowDetails(!showDetails) }} onMouseLeave={() => { setShowDetails(!showDetails) }}>
            <div className="w-[70%] flex items-start justify-center text-primary"><h2 className="text-lg font-medium">Highest Losing Trade</h2></div>
            <div className="flex justify-end items-center mb-2"><p className="text-xl text-failure2 font-normal">$6013.50</p></div>
            {showDetails &&
                <React.Fragment>
                    <div className="flex justify-end items-end mb-2"><p className="text-xs text-primary font-medium">TATA MOTORS</p></div>
                    <div className="flex justify-end items-end mb-2"><p className="text-xs text-primary font-light">Date: 03-August 2022</p></div>
                </React.Fragment>
            }
        </div>
    )
}
