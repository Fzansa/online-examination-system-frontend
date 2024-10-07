import React, { useEffect, useState } from "react";
import { useFetchQuiz } from "../../utils/userContext";
import { IoPlayCircleOutline } from "react-icons/io5";
import './quizArea.css'
import { Link } from "react-router-dom";

const QuizArea = () => {
  const [quizzes, setQuizzes] = useState(null);
  const { data } = useFetchQuiz();
  useEffect(() => {
    setQuizzes(data?.quizzs);
  }, [data]);

  return (
    <div>
      All Quizzs
      <div className="quizzContainer">
        {quizzes?.map((quiz) => (
          <Link to={`/start-quiz/${quiz._id}`} className="quizzBox" key={quiz._id}>
            <div className="quizzBoxInfo">
            <h5>{quiz.title}</h5>
            <span className="qDesc" >{quiz.description}</span>
            </div>
            <IoPlayCircleOutline className="qPlay" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuizArea;
