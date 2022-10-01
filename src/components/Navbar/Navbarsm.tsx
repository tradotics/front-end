import React ,{useContext} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { SidebarContext } from '../../contexts/Sidebarcontext';

export default function Navbarsm() {
  const { showsidebar,setShowsidebar } = useContext(SidebarContext)
  return (
    <div className="fixed top-0 left-0 w-full h-12.5 px-3 bg-background 
        flex-row items-center justify-between 
        text-primary z-50
        xs:flex sm:flex md:flex lg:hidden xl:hidden">
        <div>
            <div className="h-11 w-11 bg-btnbackground rounded flex items-center justify-center"
                            onClick={()=>{setShowsidebar(!showsidebar)}}>
              <MenuIcon fontSize="large"/> </div>      
        </div>
        <div className='relative'>
          <img src="images/logo.png" alt="logo is not found" className='h-20 w-20'/>
        </div>
        <div>
          <div className="h-11 w-11 bg-btnbackground rounded flex items-center justify-center"><FilterAltIcon fontSize="large"/></div>
        </div>
    </div>
  )
}
