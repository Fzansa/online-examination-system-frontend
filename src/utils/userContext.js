import React, { createContext, useContext, useState, useEffect } from 'react';

// Create the context
export const UserContext = createContext();

// Create a custom hook to use the User Context
export const useUserContext = () => {
    return useContext(UserContext);
};

// Create the provider component
export const UserProvider = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            try {
                const decodedUser = JSON.parse(atob(token?.split('.')[1]));
                setLoggedInUser(decodedUser);
            } catch (error) {
                console.error("Failed to decode token:", error);
            }
        }
    }, []); // Only runs once when the provider mounts

    const login = (token) => {
        try {
            if (token) {
                localStorage.setItem("token", token);
                const decodedUser = JSON.parse(atob(token?.split('.')[1]));
                setLoggedInUser(decodedUser);
            }
        } catch (error) {
            console.log(error)
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setLoggedInUser(null);
    };

    return (
        <UserContext.Provider value={{ loggedInUser, login, logout,setLoggedInUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
