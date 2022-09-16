import React from 'react'
import Doughnutchart from './Doughnutchart'
import Pnlcard from './Pnlcard'
import Scorecard from './Scorecard'

export default function Journelmd() {
  return (
      <div className="w-full h-[500px] grid-rows-5 grid-cols-7 
      grid-flow-col gap-x-6 gap-y-6 pt-16
      xs:hidden sm:hidden md:grid lg:hidden xl:hidden 2xl:hidden">
          <div className="row-span-1 col-span-2 bg-background rounded-md p-3 px-5 flex items-center">
            <Scorecard/>
          </div>
          <div className="row-span-2 col-span-2 bg-background rounded-md flex items-center p-2">
            <Doughnutchart/>
          </div>
          <div className="row-span-2 col-span-2 bg-background rounded-md flex items-center p-2">
            <Doughnutchart/>
          </div>
          <div className="row-span-1 col-span-5 bg-background rounded-md p-2 flex items-center">
            <Pnlcard/>
          </div>
          <div className="row-span-4 col-span-5 bg-background rounded-md p-2 flex items-center">05</div>
      </div>
  )
}