import { useContext } from "react";
import StoreContext from "../context/StoreContext";
//Context

const useStore = () => {
    return useContext(StoreContext);
}

export default useStore;