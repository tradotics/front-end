import React from 'react'

export default function Progressbar() {
    const width = 85
  return (
    <div className="flex">
      <div className='w-full bg-primary rounded-sm xl:h-3.5 lg:h-3'>
          <div className="bg-gradient-to-t from-green1 to-green2 rounded-sm xl:h-3.5 lg:h-3" style={{width: `${width}%`}}></div>
      </div>
    </div>
  )
}
