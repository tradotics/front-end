import React from 'react'
import DetailedTableData from './DetailedTableData'
import ExplorePageButton from './ExplorePageButton'

export default function DetailedTable() {
    return (
        <div className='w-full col-span-2 flex flex-col items-center justify-center rounded-md'>
            <table className='w-[70%] sm:w-[98%] xs:w-[98%] text-secondary border-separate border-spacing-x-0 
                          border-spacing-y-2 px-1 pb-1 rounded-lg'>
                <div className='w-full overflow-y-scroll max-h-[500px]
                            scrollbar-thin scrollbar-thumb-[#3E3F3F] scrollbar-track-[#6E6E6E] '></div>
                <tr className='h-10 text-xs font-light rounded-md sticky z-50 top-0 bg-background'>
                    <th className='text-center'>Symbol</th>
                    <th className='text-left'>Time</th>
                    <th className='text-left'>Type</th>
                    <th className='text-left'>Price</th>
                    <th className='text-left'>Volume</th>
                    <th className='text-left'>Position</th>
                    <th className='text-left'>Cost</th>
                    <th className='text-left'>P&L</th>
                    <th className='text-left'></th>
                </tr>
                <DetailedTableData />
                <DetailedTableData />
                <DetailedTableData />
                <DetailedTableData />
                <DetailedTableData />
            </table>
            <div className="w-[70%] flex justify-around pb-3 sticky z-50">
                <span className="text-sm text-primary font-semibold">Showing 1 to 4 out of 4 entries</span>
                <ExplorePageButton />
            </div>
        </div>
    )
}
