import { createContext, useState } from "react";

const GlobalContext = createContext({});

export const GlobalVarProvider = ({ children }) => {
    const [idItem, setIdItem] = useState({});
    

    return (
        <GlobalContext.Provider value={{ idItem, setIdItem }}>
            {children}
        </GlobalContext.Provider>

        
    )
}

export default GlobalContext;