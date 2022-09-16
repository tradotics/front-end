import React from 'react'
import Losercard from './Losercard'
import Profitcard from './Profitcard'
import Totalpnl from './Totalpnl'
import Winnercard from './Winnercard'

export default function Pnlcard() {
  return (
    <div className='w-full flex flex-row items-center'>
      <div className="w-[35%] border-r-2 border-primary pl-2">
        <Totalpnl />
      </div>
      <div className="w-[20%] border-r-2 border-primary pl-2">
        <Profitcard/>
      </div>
      <div className="w-[25%] border-r-2 border-primary pl-2">
        <Winnercard/>
      </div>
      <div className="w-[20%] pl-2">
        <Losercard/>
      </div>
    </div>
  )
}
