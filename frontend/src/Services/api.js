import axios from 'axios';

const api =  axios.create({
    base:'http://localhost:3333/',
})

export default api;