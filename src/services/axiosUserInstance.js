import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://job-scheduling-backend.onrender.com';

const axiosUserInstance = axios.create({
    // baseURL: 'http://localhost:3000/api/users', // Replace with your backend URL
    baseURL: `${API_BASE_URL}/api/meetings`, // Replace with your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});
