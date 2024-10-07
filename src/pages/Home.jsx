import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/userContext"; // Adjust the path as necessary
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/header/Header";
import QuizArea from '../components/quizArea/QuizArea'

const Home = () => {
  const navigate = useNavigate();
  const { loggedInUser, logout } = useUserContext();
  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [navigate, loggedInUser]); // Include loggedInUser as a dependency

  return (
    <>
      <div className="adminLayout">
        <div className="adminLeftSide">
          <Sidebar />
        </div>
        <div className="adminRightSide">
          <Header />
          <QuizArea />
        </div>
      </div>
    </>
  );
};

export default Home;
