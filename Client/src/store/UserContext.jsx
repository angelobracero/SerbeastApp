import React, { createContext, useState, useContext, useEffect } from "react";
import { jwtDecode } from "jwt-decode"; // Correct import for jwt-decode

// Create a context
const UserContext = createContext();

// Context provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Store user info here
  const [loading, setLoading] = useState(true); // Track loading state

  // Function to initialize user state from token
  const initializeUserFromToken = (token) => {
    try {
      const decodedUser = jwtDecode(token);
      const { id, email, firstname, middleinitial, lastname, role } =
        decodedUser;

      // Set user in state
      setUser({
        id,
        email,
        firstname,
        middleinitial,
        lastname,
        role,
        token,
      });
    } catch (error) {
      // Handle decoding error
      console.error("Failed to decode token", error);
      setUser(null);
    } finally {
      setLoading(false); // End the loading state after processing the token
    }
  };

  // Check for token in localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      initializeUserFromToken(token);
    } else {
      setLoading(false); // No token found, stop loading
    }
  }, []);

  const loginUser = (userData) => {
    setUser(userData); // Set the user info when logged in
    localStorage.setItem("token", userData.token); // Store token in localStorage
  };

  const logoutUser = () => {
    setUser(null); // Clear the user info on logout
    localStorage.removeItem("token"); // Remove token from localStorage
  };

  if (loading) {
    return <div>Loading...</div>; // You can show a loading spinner or message while loading
  }

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => useContext(UserContext);
