import React, { createContext, useContext, useState, useEffect } from 'react';
import { base_url } from './constants';
import axios from 'axios';

// Create the context
export const UserContext = createContext();

// Create a custom hook to use the User Context
export const useUserContext = () => {
    return useContext(UserContext);
};

export const useFetchQuiz = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    async function fetchQuiz() {
        try {
            let response = await axios.get(`${base_url}/user/getQuizz`);
            setData(response?.data);
            console.log("Fetched quiz data:", response.data);
        } catch (error) {
            console.error("Error fetching quiz:", error);
            setError(error);
        }
    }

    useEffect(() => {
        fetchQuiz();
    }, []);

    return { data, error };
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
    }, []);

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
        <UserContext.Provider value={{ loggedInUser, login, logout, setLoggedInUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
