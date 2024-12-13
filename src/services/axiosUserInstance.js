import axios from 'axios';

const axiosUserInstance = axios.create({
    // baseURL: 'http://localhost:3000/api/users', // Replace with your backend URL
    baseURL: 'https://job-scheduling-backend.onrender.com/api/users', // Replace with your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosUserInstance;
