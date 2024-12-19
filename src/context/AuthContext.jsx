import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    // 초기 상태를 설정할 때 localStorage에서 토큰 확인
    const [auth, setAuth] = useState({
        token: localStorage.getItem('adminToken'),
        isLoggedIn: !!localStorage.getItem('adminToken'), // 토큰이 있으면 true
    });

    const login = (token) => {
        setAuth({ token, isLoggedIn: true });
        localStorage.setItem('adminToken', token);
    };

    const logout = () => {
        setAuth({ token: null, isLoggedIn: false });
        localStorage.removeItem('adminToken');
    };

    return (
        <AuthContext.Provider value={{ auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
