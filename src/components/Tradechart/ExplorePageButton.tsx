import React from 'react'
import KeyboardArrowRightTwoToneIcon from '@mui/icons-material/KeyboardArrowRightTwoTone';

export default function ExplorePageButton() {
    return (
        <div className="h-6.5 px-8 bg-quickbutton rounded text-xs font-bold flex items-center justify-evenly">
            <span>Quick Note</span>
            <KeyboardArrowRightTwoToneIcon className="ml-3" />
        </div>
    )
}
