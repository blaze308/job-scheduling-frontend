import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:3000/api/meetings', // Change the baseURL to match your backend
    baseURL: 'https://job-scheduling-backend.onrender.com/api/meetings', // Change the baseURL to match your backend
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
