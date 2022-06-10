import { createContext, useState } from "react";

const StoreContext = createContext({});

export const StoreProvider = ({ children }) => {
    const [ItemCarrinho, setItemCarrinho] = useState({});
    const [authCli, setAuthCli] = useState({});

    return (
        <StoreContext.Provider value={{ ItemCarrinho, setItemCarrinho, authCli, setAuthCli }}>
            {children}
        </StoreContext.Provider>

        
    )
}

export default StoreContext;