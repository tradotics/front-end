import React, { useState } from 'react';

type SidebarContextType = {
    showsidebar: boolean | false,
    setShowsidebar: React.Dispatch<React.SetStateAction<boolean | false>>
}
const iSidebarContextState = ({
    showsidebar: false,
    setShowsidebar: () => {},
});

export const SidebarContext = React.createContext<SidebarContextType>(iSidebarContextState);

export function Sidebar({children}:any){
    const [showsidebar,setShowsidebar] = useState<boolean | false>(false)

    return (
        <SidebarContext.Provider value={{showsidebar,setShowsidebar}}>
            {children}
        </SidebarContext.Provider>
    )
}