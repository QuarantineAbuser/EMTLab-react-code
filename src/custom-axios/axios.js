import axios from "axios";

const instance = axios.create({
    baseUrl: 'http://localhost:9091/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;