import { createContext, useContext, useMemo, useState } from 'react';
import { api } from '../services/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => JSON.parse(localStorage.getItem('auth') || 'null'));

  const login = async (payload) => {
    const { data } = await api.post('/auth/login', payload);
    setAuth(data);
    localStorage.setItem('auth', JSON.stringify(data));
  };

  const register = async (payload) => {
    const { data } = await api.post('/auth/register', payload);
    setAuth(data);
    localStorage.setItem('auth', JSON.stringify(data));
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('auth');
  };

  const value = useMemo(() => ({ auth, login, register, logout }), [auth]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
