import React from 'react'
import Doughnutchart from './Doughnutchart'
import Feed from './Feed'
import Pnlcard from './Pnlcard'
import Scorecard from './Scorecard'

export default function Journelmd() {
  return (
      <div className="w-full h-[32rem] grid-rows-5 grid-cols-7 
      grid-flow-col gap-x-2 gap-y-2 pt-8
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
          <div className="row-span-4 col-span-5 bg-background rounded-md p-2 flex items-center">
            <Feed/> 
          </div>
      </div>
  )
}
