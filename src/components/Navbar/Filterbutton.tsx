import React from 'react'

export default function Filterbutton(props :any) {
    return (
        <div className="h-6.5 w-20 
                    bg-gradient-to-b from-blue1 to-blue2 rounded 
                    text-xs font-bold flex items-center 
                    justify-center cursor-pointer">
            {props.children}
        </div>
    )
}
