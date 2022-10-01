import React, { useState } from 'react';

type ExpandedChartContextType = {
    showexpchart: boolean | false,
    setShowexpchart: React.Dispatch<React.SetStateAction<boolean | false>>
}
const iExpandedChartContextState = ({
    showexpchart: false,
    setShowexpchart: () => {},
});

export const ExpandedChartContext = React.createContext<ExpandedChartContextType>(iExpandedChartContextState);

export function ExpandedChart({children}:any){
    const [showexpchart,setShowexpchart] = useState<boolean | false>(false)

    return (
        <ExpandedChartContext.Provider value={{showexpchart,setShowexpchart}}>
            {children}
        </ExpandedChartContext.Provider>
    )
}