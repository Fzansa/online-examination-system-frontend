import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { base_url } from "../utils/constants";
import UserContext from "../utils/userContext";

const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { setLoggedInUser, login } = useContext(UserContext); // Access context directly
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(
        base_url + "/auth/register",
        {
          name,
          email,
          password,
        },
        { withCredentials: true }
      );
      if (response.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };
  // Prevent access to login page if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="formArea">
      <div className="loginContainer">
        <div className="header">
          <h1>
            <span className="l">R</span>GISTER
          </h1>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="uname">Name</label>
          <input
            type="text"
            className="inp"
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="uname">Email</label>
          <input
            type="email"
            className="inp"
            name="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="psw">Password</label>
          <input
            type="password"
            className="inp"
            name="psw"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Register</button>
        </form>
        <div className="signup">
          <b>Already have a account?</b>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
