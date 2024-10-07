import React, { useEffect, useState } from "react";
import { useFetchQuiz } from "../../utils/userContext";

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
          <div className="quizzBox" key={quiz.id}>
            <h5>{quiz.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizArea;
