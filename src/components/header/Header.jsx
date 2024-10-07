import React from "react";
import { useUserContext } from "../../utils/userContext";
import "./header.css";

const Header = () => {
  const { logout, loggedInUser } = useUserContext();
  return (
    <div className="header">
      <div className="userTitle">
        <h1>Welcome, {loggedInUser?.name}</h1>
      </div>
      <div className="logOutBtn">
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
