
import React, { createContext, useState, useContext, useEffect } from 'react';
import { getUserType, getStoredToken, clearAllTokens } from '../services/api';

const UserAuthContext = createContext();

export const useUserAuth = () => {
  const context = useContext(UserAuthContext);
  if (!context) {
    throw new Error('useUserAuth must be used within a UserAuthProvider');
  }
  return context;
};

export const UserAuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null); // 'user', 'admin', or null
  const [isLoading, setIsLoading] = useState(true);

  // Check authentication status on app load
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = () => {
    try {
      setIsLoading(true);
      const token = getStoredToken();
      const currentUserType = getUserType();
      const userData = localStorage.getItem('userData');

      console.log('Checking auth status:', { token: !!token, currentUserType, userData: !!userData });

      if (token && currentUserType) {
        setIsAuthenticated(true);
        setUserType(currentUserType);
        
        if (currentUserType === 'user' && userData) {
          try {
            const parsedUserData = JSON.parse(userData);
            setUser(parsedUserData);
            console.log('User authenticated:', parsedUserData);
          } catch (error) {
            console.error('Error parsing user data:', error);
            // Clear invalid data
            localStorage.removeItem('userData');
            logout();
            return;
          }
        } else if (currentUserType === 'admin') {
          setUser({ role: 'admin', name: 'Administrator' });
          console.log('Admin authenticated');
        }
      } else {
        console.log('No valid authentication found');
        setIsAuthenticated(false);
        setUser(null);
        setUserType(null);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
      logout();
    } finally {
      setIsLoading(false);
    }
  };

  const login = (userData, token, type = 'user') => {
    console.log('Login called:', { userData, token: !!token, type });
    
    setIsAuthenticated(true);
    setUser(userData);
    setUserType(type);
    
    if (type === 'user') {
      localStorage.setItem('userData', JSON.stringify(userData));
    }
    
    // Force re-check to ensure consistency
    setTimeout(() => {
      checkAuthStatus();
    }, 100);
  };

  const logout = () => {
    console.log('Logout called');
    
    setIsAuthenticated(false);
    setUser(null);
    setUserType(null);
    clearAllTokens();
    localStorage.removeItem('userData');
  };

  const isUser = () => userType === 'user';
  const isAdmin = () => userType === 'admin';

  const value = {
    isAuthenticated,
    user,
    userType,
    isLoading,
    login,
    logout,
    isUser,
    isAdmin,
    checkAuthStatus
  };

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
};