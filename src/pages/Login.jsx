import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "../utils/constants";
import userContext from "../utils/userContext"; // Adjusted import

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { setLoggedInUser, login } = useContext(userContext); // Access context directly

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        base_url + "/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.data.success) {
        const token = response.data.token;
        console.log('Received token:', token); // Log token for debugging
        if (token) {
          localStorage.setItem("token", token); // Store token
          const decodedUser = JSON.parse(atob(token.split(".")[1]));
          console.log('Decoded user:', decodedUser); // Log decoded user
          setLoggedInUser(decodedUser); // Update context with logged-in user
          
          // Navigate based on user role
          if (decodedUser.role !== "user") {
            navigate("/admin");
          } else {
            navigate("/");
          }
        }
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  // Prevent access to login page if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log('Token on refresh:', token); // Log token on refresh
    if (token) {
      navigate("/"); 
    }
  }, [navigate, login]); // Ensure login is included in dependencies

  return (
    <div className="formArea">
      <div className="loginContainer">
        <div className="header">
          <h1>
            <span className="l">L</span>OGIN
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="inp"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="inp"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <div className="signup">
          <b>Don't have an account?</b>
          <Link to="/register">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
