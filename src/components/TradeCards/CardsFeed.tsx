import React from 'react'
import Scorecard from '../Journel/Scorecard'
import GrossPnl from './GrossPnl'
import HighestLossTrade from './HighestLossTrade'
import HighestProfitTrade from './HighestProfitTrade'
import Winrate from './Winrate'

export default function CardsFeed() {
  return (
    <div className='w-full h-[8.5rem] grid grid-cols-12 grid-rows-1 gap-3'>
        <div className='col-span-2 row-span-1 rounded-md bg-background px-4 py-2'><HighestProfitTrade/></div>
        <div className='col-span-2 row-span-1 rounded-md bg-background p-3'><HighestLossTrade/></div>
        <div className='col-span-2 row-span-1 rounded-md bg-background p-3'><GrossPnl/></div>
        <div className='col-span-3 row-span-1 rounded-md bg-background p-5'><Winrate/></div>
        <div className='col-span-3 row-span-1 rounded-md bg-background p-5'><Scorecard/></div>
    </div>
  )
}
