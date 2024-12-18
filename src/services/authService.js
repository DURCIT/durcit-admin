import axios from 'axios';

export const loginAdmin = async ({ username, password }) => {
    /*const response = await axios.post('/api/login', { username, password });
    return response.data.token; // 백엔드에서 JWT 토큰 반환*/
    if (username === 'admin' && password === 'password') {
        return 'mock-token';
    } else {
        throw new Error('Invalid credentials');
    }
};
