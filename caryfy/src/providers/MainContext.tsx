// src/UserContext.tsx
import React, { createContext, useEffect, useState, ReactNode, FC } from 'react';


// Define the context type
interface UserContextType {
  userInfo: any | null;
  setUserInfo: any;
}

// Create a Context with a default value of undefined
export const UserContext = createContext<UserContextType | undefined>(undefined);

interface MainContextProps {
  children: ReactNode;
}

// Create a provider component
const MainContext: FC<MainContextProps> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<any | null>(null);

  useEffect(() => {
    // Fetch user data from localStorage
    const storedUser = localStorage.getItem('employeeInfo');
    if (storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default MainContext;
