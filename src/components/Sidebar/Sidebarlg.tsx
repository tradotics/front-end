import React, {Fragment} from 'react'
import Sidebarbutton from './Sidebarbutton'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import BarChartIcon from '@mui/icons-material/BarChart';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';

export default function Sidebarlg() {
  return (
    <Fragment>
    <div className="w-12.5 h-[calc(100vh-60px)] grid pt-2 bg-background content-between
    sm:hidden md:hidden lg:hidden xl:grid 2xl:grid">
      <div>
        <Sidebarbutton title='Dashboard' subtitle='Overview of your trades'><HomeSharpIcon sx={{ fontSize: 45, opacity: 0.5 }} className='text-primary'/></Sidebarbutton>
        <Sidebarbutton title='Detailed Report' subtitle='Thorough trade analysis' ><BarChartIcon sx={{ fontSize: 45, opacity: 0.5, }} className='text-primary'/></Sidebarbutton>
        <Sidebarbutton title='Compare' subtitle='Compare 2 custom filter with each other'><SsidChartOutlinedIcon sx={{ fontSize: 45, opacity: 0.5 }} className='text-primary'/></Sidebarbutton>
        <Sidebarbutton title='' subtitle='Day View Day View Day View'><ViewColumnOutlinedIcon sx={{ fontSize: 45, opacity: 0.5 }} className='text-primary'/></Sidebarbutton>
      </div>
      <div>
          <Sidebarbutton title='Dashboard' subtitle='Overview of your trades'><AddBoxIcon sx={{ fontSize: 45, opacity: 0.5 }} className='text-primary' /></Sidebarbutton>
          <Sidebarbutton title='Detailed Report' subtitle='Thorough trade analysis' ><SettingsApplicationsIcon sx={{ fontSize: 45, opacity: 0.5, }} className='text-primary' /></Sidebarbutton>        </div>
      </div>
    </Fragment>
  )
}
