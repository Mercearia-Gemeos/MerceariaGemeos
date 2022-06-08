import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
//Context

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;