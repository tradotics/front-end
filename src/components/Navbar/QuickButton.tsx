import React from 'react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function QuickButton() {
    return (
        <div className="h-6.5 px-8 bg-quickbutton rounded text-xs font-bold flex items-center justify-evenly">
            <span >Quick Note</span>
            <AddCircleIcon className="ml-3" />
        </div>
    )
}
