import axios from "axios";


const ApiLogin = axios.create({
    baseURL: import.meta.env.VITE_LOGIN_TOKEN
});

ApiLogin.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);



export default ApiLogin