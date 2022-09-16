import React from 'react'
import Progressbar from './Progressbar'

export default function Scorecard() {
  return (
    <div className="flex flex-row w-full">
      <div className="w-[30%] flex items-center justify-center text-primary">
        <h2 className="text-md font-bold">Tradotics Score</h2>
      </div>
      <div className="w-[70%] flex flex-col justify-start">
            <span className="flex justify-center mb-2"><h2 className="text-2xl text-green2 font-bold">6.8<span className="text-sm text-primary font-bold">/10</span></h2></span>
          <Progressbar/>
      </div>
    </div>
  )
}
