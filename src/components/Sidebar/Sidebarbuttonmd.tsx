import React from 'react'

export default function Sidebarbuttonmd(props : any) {
  return (
    <div className='h-12.5 flex flex-row items-center relative pl-2 rounded-md icon-hover:scale-105'>
      <div className='icon flex justify-center items-center'>
        {props.children}
      </div>
      <div className='h-12.5 flex flex-col items-right justify-center p-5 bg-background '>
        <span><h6 className='text-md font-normal text-primary'>{props.title}</h6></span>
      </div>
    </div>
  )
}