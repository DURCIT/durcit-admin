import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({ token: null, isLoggedIn: false });

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
