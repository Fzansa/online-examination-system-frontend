import React, { useEffect, useState } from "react";
import { useFetchQuiz } from "../../utils/userContext";

const ManageQuiz = () => {
  const [quizzes, setQuizzes] = useState(null);
  const { data } = useFetchQuiz();

  const handleCreateQuiz = () => {
    console.log("created quizzes");
  };

  const handleEdictQuiz = () => {
    console.log("edit quizzes");
  };

  const handleDeleteQuiz = () => {
    console.log("edit quizzes");
  };

  useEffect(() => {
    setQuizzes(data?.quizzs);
  }, [data, quizzes]);

  return (
    <div className="manage-quizzes">
      <h3>Manage Quizzes</h3>
      <button onClick={handleCreateQuiz}>Create New Quiz</button>

      <table>
        <thead>
          <tr>
            <th>Quiz Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {quizzes &&
            quizzes.map((quiz) => (
              <tr key={quiz.id}>
                <td>{quiz.title}</td>
                <td>{quiz.description}</td>
                <td>
                  <button onClick={() => handleEdictQuiz(quiz.id)}>Edit</button>
                  <button onClick={() => handleDeleteQuiz(quiz.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageQuiz;
