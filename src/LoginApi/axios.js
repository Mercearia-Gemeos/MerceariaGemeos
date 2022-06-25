import axios from 'axios';
//Axios

export default axios.create({
    baseURL: 'https://gemeos-server.herokuapp.com/'
});