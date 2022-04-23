import axios from "axios";

const instance = axios.create({
    baseUrl: 'https://library-spring-195091.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;