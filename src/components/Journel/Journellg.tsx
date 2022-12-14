import React from 'react'
import Calender from '../Calender/Calender'
// import Barchart from './Barchart'
import Doughnutchart from './Doughnutchart'
import Feed from './Feed'
import Pnlcard from './Pnlcard'
import Scorecard from './Scorecard'

export default function Journellg() {
  return (

    <React.Fragment>
      <div className="w-full xl:h-[500px] lg:h-[400px] grid-rows-5 grid-cols-12
      grid-flow-col md:gap-x-3 md:gap-y-3 lg:gap-x-3 lg:gap-y-3 pt-8
      xs:hidden sm:hidden md:hidden lg:grid xl:grid">

          <div className="row-span-1 col-span-2 bg-background50 rounded-lg p-3 px-5 flex items-center">
            <Scorecard/>
          </div>
          <div className="row-span-2 col-span-2 bg-background50 rounded-lg flex items-center p-2">
            <Doughnutchart/>
          </div>
          <div className="row-span-2 col-span-2 bg-background50 rounded-lg flex items-center p-2">
            <Doughnutchart/>
          </div>
          <div className="row-span-1 col-span-6 bg-background50 rounded-lg p-2 flex items-center">
            <Pnlcard/>
          </div>
          <div className="row-span-4 col-span-6 bg-background50 rounded-lg p-2 flex items-center">
            <Feed/>
          </div>
          <div className="row-span-5 col-span-5 bg-background50 rounded-lg p-2 flex items-center">
            <Calender/>
          </div>
      </div>
        </React.Fragment>
  )
}
