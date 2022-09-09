import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import {logo} from '../../assets/Logo'

export default function Navbarsm() {
  return (
    <div className="h-12.5 px-3 bg-background 
        flex-row items-center justify-between 
        text-primary 
        sm:flex md:flex lg:flex xl:hidden 2xl:hidden">
        <div>
            <div className="h-11 w-11 bg-btnbackground rounded flex items-center justify-center"><MenuIcon fontSize="large"/> </div>      
        </div>
        <div>
          <span className="absolute">{logo}</span>
        </div>
        <div>
          <div className="h-11 w-11 bg-btnbackground rounded flex items-center justify-center"><FilterAltIcon fontSize="large"/></div>
        </div>
    </div>
  )
}
