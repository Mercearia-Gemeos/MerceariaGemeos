import axios from 'axios';
//Axios

import useAuth from "./useAuth";
//Hooks

const useRefreshToken = () => {

    const { setAuth } = useAuth();

    const refresh  = async () => {
        const response = await axios.get('https://gemeos-server.herokuapp.com/:4000/admin/refresh', {
            withCredentials: true,
        });
        setAuth(prev => {
            return {  ...prev,  token: response.data.token}
        });
        return response.data.token;
    }
    
    return refresh;
};

export default useRefreshToken;
