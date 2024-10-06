import React, { useState } from "react";
import Questions from "../questionForm/QuestionForm"; // Import Questions component

const QuizForm = () => {
  const [quiz, setQuiz] = useState({
    title: "",
    description: "",
    duration: "",
    totalMarks: "",
    questions: [
      {
        text: "",
        type: "multiple-choice",
        options: [],
        correctOptionId: "",
        marks: ""
      }
    ]
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleAddQuestion = () => {
    setQuiz({
      ...quiz,
      questions: [
        ...quiz.questions,
        {
          text: "",
          type: "multiple-choice",
          options: [],
          correctOptionId: "",
          marks: ""
        }
      ]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Quiz Data:", quiz); // Log the final quiz object
  };

  return (
    <div className="quiz-form">
      <h2>Create a Quiz</h2>
      <form onSubmit={handleSubmit}>
        {/* Quiz Details */}
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={quiz.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={quiz.description}
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div>
          <label>Duration (in minutes):</label>
          <input
            type="number"
            name="duration"
            value={quiz.duration}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Total Marks:</label>
          <input
            type="number"
            name="totalMarks"
            value={quiz.totalMarks}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Questions Component */}
        <Questions quiz={quiz} setQuiz={setQuiz} />

        <button type="button" onClick={handleAddQuestion}>
          Add Question
        </button>
        <button type="submit">Submit Quiz</button>
      </form>

      {/* Display the added questions */}
      <h4>Questions List</h4>
      {quiz.questions.length > 0 && (
        <ul>
          {quiz.questions.map((question, index) => (
            <li key={index}>{question.text}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default QuizForm;
