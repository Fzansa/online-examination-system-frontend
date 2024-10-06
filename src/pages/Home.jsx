import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../utils/userContext"; // Adjust the path as necessary

const Home = () => {
  const navigate = useNavigate();
  const { loggedInUser,logout } = useUserContext(); // Use custom hook to access context
 console.log('loggioi',logout,loggedInUser)
  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    } 
    if (loggedInUser?.role !== "user") {
      navigate("/admin");
    }
  }, [navigate, loggedInUser]); // Include loggedInUser as a dependency

  return <div>Home
    <button onClick={()=>{logout()}} >logout</button>
  </div>;
};

export default Home;
