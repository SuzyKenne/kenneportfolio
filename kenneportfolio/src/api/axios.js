import axios from "axios"

const client = axios.create({
    baseURL : "https://kenneportfolio-backend.onrender.com"
    // baseURL : "http://localhost:4000"
});

export default client;