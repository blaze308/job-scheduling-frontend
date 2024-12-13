import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://job-scheduling-backend.onrender.com';

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:3000/api/meetings', // Change the baseURL to match your backend
    baseURL: `${API_BASE_URL}/api/meetings`, // Change the baseURL to match your backend
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
