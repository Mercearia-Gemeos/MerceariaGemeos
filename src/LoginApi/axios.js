import axios from 'axios';
//Axios

export default axios.create({
    baseURL: 'http://https://gemeos-server.herokuapp.com/:4000'
});