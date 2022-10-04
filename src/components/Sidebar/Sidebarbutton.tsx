import React, {useState} from 'react'

export default function Sidebarbutton(props : any) {
  const [showMenu,setShowmenu] = useState<boolean>(false)
  return (
    <div className='h-12.5 w-64 flex flex-row items-center pl-2 rounded-md icon-hover:scale-105'>
      <div className='icon flex justify-center items-center' onMouseEnter={()=>{setShowmenu(!showMenu)}} onMouseLeave={()=>{setShowmenu(!showMenu)}}>
        {props.children}
      </div>
      {
        showMenu &&
      <div className='flex flex-col items-right justify-center p-3 bg-background'>
        <span><h6 className='text-md text-white'>{props.title}</h6></span>
        <span><p className='text-sm text-primary'>{props.subtitle}</p></span>
      </div>
      }
    </div>
  )
}
