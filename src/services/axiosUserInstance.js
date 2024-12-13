// import axios from 'axios';
// import.meta.env.VITE_API_BASE_URL


// const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';

// const axiosUserInstance = axios.create({
//     // baseURL: 'http://localhost:3000/api/users', // Replace with your backend URL
//     baseURL: `${API_BASE_URL}/api/meetings`, // Replace with your backend URL
//     headers: {
//         'Content-Type': 'application/json',
//     },
// });

// export default axiosUserInstance;


import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';

const axiosUserInstance = axios.create({
    baseURL: `${API_BASE_URL}/api/users`,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosUserInstance;