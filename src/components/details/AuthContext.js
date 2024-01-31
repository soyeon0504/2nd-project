import React, { createContext, useContext, useState, useEffect } from "react";
import { getUserInfo } from "../../api/details/details_api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const user = await getUserInfo(); // 백엔드에서 현재 사용자 정보를 가져옴
        setCurrentUser(user.data); // 반환된 사용자 정보를 설정
      } catch (error) {
        console.error("Error fetching current user:", error);
        setCurrentUser(null);
      }
    };

    fetchCurrentUser();
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
