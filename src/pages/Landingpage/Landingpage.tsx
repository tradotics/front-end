import React from 'react'
import { design } from '../../assets/Design'
import MdJournelContent from '../../components/Journel/MdJournelContent'
import SmJournelContent from '../../components/Journel/SmJournelContent'
import Navbarlg from '../../components/Navbar/Navbarlg'
import Navbarsm from '../../components/Navbar/Navbarsm'


export default function Landingpage() {
  return (
    <div className='h-full flex flex-col items-center' >
      <Navbarlg />
      <Navbarsm />
      {design} 
      <MdJournelContent/> 
      <SmJournelContent/>
    </div>
  )
}
