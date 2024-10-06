import "./admin.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/userContext"; // Adjust the path as necessary
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Overview from "../components/overview/Overview";
import ManageQuiz from "../components/manageQuiz/ManageQuiz";
import ManageQuestion from "../components/manageQuestion/ManageQuestion";
import ViewResult from "../components/viewResult/ViewResult";
import QuizForm from "../components/quizForm/QuizForm";

const Admin = () => {
  const navigate = useNavigate();
  const { loggedInUser, logout } = useUserContext();
  const [loading, setLoading] = useState(true); // Add loading state
  const [message, setMessage] = useState(null);

  useEffect(() => {
    // When loggedInUser is fetched, remove loading state
    if (loggedInUser !== null) {
      setLoading(false);
      if (loggedInUser?.role !== "admin") {
        setMessage("Unauthorized Access:You are not an admin");
      }
    }
    if (loggedInUser === null) {
      navigate("/login");
    }
  }, [navigate, loggedInUser]);

  if (loading) {
    // Show a loading spinner or message while checking user info
    return <div>Loading...</div>;
  }

  return (
    <div>
      {message !== null ? (
        <>
          <h2 style={{ color: "red" }}>{message}</h2>
          <button onClick={() => navigate("/")}>Go to Dashboard</button>
        </>
      ) : (
        <>
          <div className="adminLayout">
            <div className="adminLeftSide">
              <Sidebar />
            </div>
            <div className="adminRightSide">
              <Header />
              <Overview />
              <ManageQuiz />
              <ManageQuestion />
              <ViewResult />
              <QuizForm />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;
