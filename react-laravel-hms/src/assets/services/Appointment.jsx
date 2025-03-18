import axios from "axios";

const Appointment = axios.create({ 
    baseURL: import.meta.env.VITE_BASE_URL_API,
});

export default Appointment