import React from 'react'
// import Barchart from './Barchart'
import Doughnutchart from './Doughnutchart'
import Feed from './Feed'
import Pnlcard from './Pnlcard'
import Scorecard from './Scorecard'

export default function Journellg() {
  return (
      <div className="w-full h-[650px] aspect-videp grid-rows-5 grid-cols-7 
      grid-flow-col md:gap-x-3 md:gap-y-3 lg:gap-x-5 lg:gap-y-5 pt-16
      xs:hidden sm:hidden md:hidden lg:grid xl:grid 2xl:grid">
          <div className="row-span-1 col-span-2 bg-background rounded-lg p-3 px-5 flex items-center">
            <Scorecard/>
          </div>
          <div className="row-span-2 col-span-2 bg-background rounded-lg flex items-center p-2">
            <Doughnutchart/>
          </div>
          <div className="row-span-2 col-span-2 bg-background rounded-lg flex items-center p-2">
            <Doughnutchart/>
          </div>
          <div className="row-span-1 col-span-5 bg-background rounded-lg p-2 flex items-center">
            <Pnlcard/>
          </div>
          <div className="row-span-4 col-span-5 bg-background rounded-lg p-2 flex items-center">
            <Feed/>
          </div>
      </div>
  )
}
