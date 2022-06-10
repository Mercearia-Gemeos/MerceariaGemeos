import { useContext } from "react";
//Hooks

import GlobalContext from "../context/GlobalContext";
//Context

const useGlobal = () => {
    return useContext(GlobalContext);
}

export default useGlobal;