import React, { useState } from "react";
import Questions from "../questionForm/QuestionForm"; // Import Questions component
import axios from "axios";
import { base_url } from "../../utils/constants";

const QuizForm = () => {
  const [errorMesaage, setErrorMessage] = useState(null);
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
        marks: "",
      },
    ],
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
          marks: "",
        },
      ],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(base_url + "/admin/addQuizz", {
        ...quiz,
      });
      if (response.status === 201) {
        setQuiz({
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
              marks: "",
            },
          ],
        });
        setErrorMessage(null);
      }
    } catch (error) {
      if (error?.response?.data?.message?.includes('E11000')) {
        // This code refers to duplicate key error in MongoDB
        setErrorMessage(
          "A quiz with this title already exists. Please choose a different title."
        );
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
      console.error("Error logging in:", error.response.data.message);
    }
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
        {errorMesaage && (
          <p style={{ color: "red", fontSize: "14px", fontWeight: "bold" }}>
            {errorMesaage}
          </p>
        )}
        <button type="submit">Submit Quiz</button>
      </form>
    </div>
  );
};

export default QuizForm;
