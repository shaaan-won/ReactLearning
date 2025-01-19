import axios from "axios";

const ApiClient = axios.create({ 
    baseURL: import.meta.env.VITE_BASE_URL_API,
});

export default ApiClient