import React from 'react'
import Doughnutchart from './Doughnutchart'
import Feed from './Feed'
import Losercard from './Losercard'
// import Pnlcard from './Pnlcard'
import Profitcard from './Profitcard'
import Scorecard from './Scorecard'
import Totalpnl from './Totalpnl'
import Winnercard from './Winnercard'

export default function Journelsm() {
    return (
        <div className="w-full h-[50rem] overflow-hidden grid-cols-2 grid-rows-12
      grid-flow-col gap-x-2 gap-y-2 pt-16
      xs:grid sm:grid md:hidden lg:hidden xl:hidden 2xl:hidden">
            <div className="row-span-1 col-start-1 col-span-2 bg-background rounded-md flex items-center p-2">
                <Scorecard />
            </div>
            <div className="w-[98%] col-start-1 col-span-1 bg-background rounded-md flex items-center justify-center p-2">
                <Totalpnl />
            </div>
            <div className="w-[98%] col-start-2 col-span-2 bg-background rounded-md flex items-center justify-center p-2">
                <Profitcard />
            </div>
            <div className="col-start-1 col-span-2 bg-background rounded-md flex items-center justify-center p-3">
                <div className="w-[50%] border-r-2 border-primary flex items-center justify-center">
                    <Winnercard />
                </div>
                <div className="w-[50%] pl-2 flex items-center justify-center">
                    <Losercard />
                </div>
            </div>
            <div className="w-[98%] col-start-1 col-span-1 bg-background rounded-md flex items-center p-2">
                <Doughnutchart/>
            </div>
            <div className="w-[98%] col-start-2 col-span-2 bg-background rounded-md flex items-center p-2">
                <Doughnutchart/>
            </div>
            <div className="box row-start-6 row-span-6 col-span-2 bg-background rounded-md flex items-center p-2">
                <Feed />
            </div>
        </div>
    )
}
