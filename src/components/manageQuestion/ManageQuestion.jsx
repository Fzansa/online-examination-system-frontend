import { set } from "mongoose";
import React, { useEffect, useState } from "react";

const ManageQuestion = () => {
  const [quizId, setQuizId] = useState(null);
  const [questions, setQuestion] = useState(null);
  let quizzes = [
    {
      id: "quiz1",
      title: "JavaScript Basics",
      description: "A quiz covering the basics of JavaScript.",
      duration: 30,
      totalMarks: 40,
      questions: [
        {
          id: "q1",
          text: "What is a closure in JavaScript?",
          type: "multiple-choice",
          options: [
            { id: "opt1", text: "A function with its own scope." },
            {
              id: "opt2",
              text: "A function bundled together with its lexical environment.",
            },
            { id: "opt3", text: "A block of code that runs automatically." },
            { id: "opt4", text: "None of the above." },
          ],
          correctOptionId: "opt2",
          marks: 10,
        },
        {
          id: "q2",
          text: "Which of the following is NOT a primitive type in JavaScript?",
          type: "multiple-choice",
          options: [
            { id: "opt1", text: "String" },
            { id: "opt2", text: "Number" },
            { id: "opt3", text: "Boolean" },
            { id: "opt4", text: "Object" },
          ],
          correctOptionId: "opt4",
          marks: 10,
        },
        {
          id: "q3",
          text: "Explain the difference between `let` and `var` in JavaScript.",
          type: "short-answer",
          marks: 20,
        },
      ],
    },
    {
      id: "quiz2",
      title: "HTML & CSS Fundamentals",
      description: "A quiz covering the fundamentals of HTML and CSS.",
      duration: 20,
      totalMarks: 30,
      questions: [
        {
          id: "q1",
          text: "What does HTML stand for?",
          type: "multiple-choice",
          options: [
            { id: "opt1", text: "HyperText Markup Language" },
            { id: "opt2", text: "Home Tool Markup Language" },
            { id: "opt3", text: "Hyperlinks and Text Markup Language" },
            { id: "opt4", text: "None of the above." },
          ],
          correctOptionId: "opt1",
          marks: 10,
        },
        {
          id: "q2",
          text: "Which HTML tag is used to define an internal style sheet?",
          type: "multiple-choice",
          options: [
            { id: "opt1", text: "<script>" },
            { id: "opt2", text: "<style>" },
            { id: "opt3", text: "<css>" },
            { id: "opt4", text: "<link>" },
          ],
          correctOptionId: "opt2",
          marks: 10,
        },
        {
          id: "q3",
          text: "Describe the box model in CSS.",
          type: "short-answer",
          marks: 10,
        },
      ],
    },
    {
      id: "quiz3",
      title: "ReactJS Basics",
      description: "A quiz to test your understanding of React fundamentals.",
      duration: 25,
      totalMarks: 35,
      questions: [
        {
          id: "q1",
          text: "What is the primary purpose of React?",
          type: "multiple-choice",
          options: [
            { id: "opt1", text: "To handle routing in a web application." },
            {
              id: "opt2",
              text: "To manage and render UI components efficiently.",
            },
            { id: "opt3", text: "To manage server-side operations." },
            { id: "opt4", text: "To interact with databases." },
          ],
          correctOptionId: "opt2",
          marks: 10,
        },
        {
          id: "q2",
          text: "Which of the following is NOT a React hook?",
          type: "multiple-choice",
          options: [
            { id: "opt1", text: "useState" },
            { id: "opt2", text: "useEffect" },
            { id: "opt3", text: "useRouter" },
            { id: "opt4", text: "useContext" },
          ],
          correctOptionId: "opt3",
          marks: 10,
        },
        {
          id: "q3",
          text: "Explain the virtual DOM in React and how it improves performance.",
          type: "short-answer",
          marks: 15,
        },
      ],
    },
  ];

  const handleQuizSelect = async (e) => {
    let id = e.target.value;
    setQuestion(quizzes.filter((item) => item.id === id));
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

  return (
    <div className="manage-questions">
      <h3>Manage Questions</h3>
      <select onChange={handleQuizSelect}>
        {quizzes.map((quiz) => (
          <option key={quiz.id} value={quiz.id}>
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
          {questions ?
            questions[0]?.questions.map((question) => (
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
            )):quizzes[0]?.questions.map((question) => (
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
