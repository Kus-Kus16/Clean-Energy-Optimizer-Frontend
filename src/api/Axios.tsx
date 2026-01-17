import axios from 'axios';

export const baseURL = import.meta.env.VITE_BACKEND_URL ?? "https://clean-energy-optimizer-backend.onrender.com" ;

const api = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;