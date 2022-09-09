import React from 'react'

export default function Sidebarbutton(props : any) {
  return (
    <div className='h-12.5 w-12.5 flex items-center justify-center '>
        {props.children}
    </div>
  )
}
