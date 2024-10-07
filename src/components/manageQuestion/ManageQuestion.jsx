import { set } from "mongoose";
import React, { useEffect, useState } from "react";
import { useFetchQuiz } from "../../utils/userContext";

const ManageQuestion = () => {
  const [questions, setQuestion] = useState(null);
  const [quizzes, setQuizzes] = useState(null);
  const { data } = useFetchQuiz();

  const handleQuizSelect = async (e) => {
    let title = e.target.value;
    setQuestion(quizzes.filter((item) => item.title === title));
  };
  const handleCreateQuestion = () => {
    console.log("handle question creation");
  };
  const handleEditQuestion = () => {
    console.log("handleEditQuestion");
  };
  const handleDeleteQuestion = () => {
    console.log("handleDeleteQuestion");
  };

  useEffect(() => {
    setQuizzes(data?.quizzs);
  }, [data]);

  return (
    <div className="manage-questions">
      {console.log(quizzes)}
      <h3>Manage Questions</h3>
      <select onChange={handleQuizSelect}>
        {quizzes && quizzes?.map((quiz) => (
          <option key={quiz.id} value={quiz.title}>
            {quiz.title}
          </option>
        ))}
      </select>

      <button onClick={handleCreateQuestion}>Create New Question</button>

      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions
            ? questions[0]?.questions.map((question) => (
                <tr key={question.id}>
                  <td>{question.text}</td>
                  <td>{question.type}</td>
                  <td>
                    <button onClick={() => handleEditQuestion(question.id)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteQuestion(question.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            : quizzes && quizzes[0]?.questions.map((question) => (
                <tr key={question.id}>
                  <td>{question.text}</td>
                  <td>{question.type}</td>
                  <td>
                    <button onClick={() => handleEditQuestion(question.id)}>
                      Edit
                    </button>
                    <button onClick={() => handleDeleteQuestion(question.id)}>
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

export default ManageQuestion;
