import React,{ Fragment, useContext} from 'react'
import Sidebarbuttonmd from './Sidebarbuttonmd'
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import BarChartIcon from '@mui/icons-material/BarChart';
import SsidChartOutlinedIcon from '@mui/icons-material/SsidChartOutlined';
import ViewColumnOutlinedIcon from '@mui/icons-material/ViewColumnOutlined';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import { SidebarContext } from '../../contexts/Sidebarcontext';

export default function Sidebarmd() {
  const {showsidebar} = useContext(SidebarContext)
  return (
    <Fragment>
    {
      showsidebar &&
    <div className="w-52 md:w-64 lg:w-64 h-screen grid pt-4 bg-background content-between
    xs:grid sm:grid md:grid lg:hidden xl:hidden fixed top-12.5 left-0">
      <div>
        <Sidebarbuttonmd title='Dashboard'>
          <HomeSharpIcon sx={{ fontSize: 45, opacity: 0.5 }} className='text-secondary' /></Sidebarbuttonmd>
        <Sidebarbuttonmd title='Detailed Report'>
          <BarChartIcon sx={{ fontSize: 45, opacity: 0.5, }} className='text-secondary'/></Sidebarbuttonmd>
        <Sidebarbuttonmd title='Compare'>
          <SsidChartOutlinedIcon sx={{ fontSize: 45, opacity: 0.5 }} className='text-secondary'/></Sidebarbuttonmd>
        <Sidebarbuttonmd title='Journel'>
          <ViewColumnOutlinedIcon sx={{ fontSize: 45, opacity: 0.5 }} className='text-secondary'/></Sidebarbuttonmd>
        <Sidebarbuttonmd title='Add Trades'>
          <AddBoxIcon sx={{ fontSize: 45, opacity: 0.5 }} className='text-secondary' /></Sidebarbuttonmd>
        <Sidebarbuttonmd title='Settings' >
          <SettingsApplicationsIcon sx={{ fontSize: 45, opacity: 0.5, }} className='text-secondary' /></Sidebarbuttonmd>        </div>
      </div>
    }
    </Fragment>
  )
}
