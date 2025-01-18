import axios from "axios";

const ApiClientPhoto = import.meta.env.VITE_API_PHOTO

const ApiClient = axios.create({ 
    baseURL: import.meta.env.VITE_BASE_URL_API,
});

// Add a request interceptor to add the token to the request header FROM LOCAL STORAGE SEARCH ON BROWSER
ApiClient.interceptors.request.use(
    (config) => {
        const token= localStorage.getItem("token")
        config.headers.Authorization =`Bearer ${token}`;
        return config;
    }

    , function (error) {
        return Promise.reject(error);
    }
);


export { ApiClientPhoto }
export default ApiClient