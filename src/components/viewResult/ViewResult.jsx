import React from "react";

const ViewResult = () => {
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

  let results = [
    {
      id: "result1",
      quizId: "quiz1",
      quizTitle: "JavaScript Basics",
      studentId: "student1",
      studentName: "John Doe",
      score: 35,
      totalMarks: 40,
      submittedAt: "2024-10-06T10:30:00Z",
      answers: [
        {
          questionId: "q1",
          questionText: "What is a closure in JavaScript?",
          selectedOptionId: "opt2",
          correctOptionId: "opt2",
          marksObtained: 10,
        },
        {
          questionId: "q2",
          questionText:
            "Which of the following is NOT a primitive type in JavaScript?",
          selectedOptionId: "opt3",
          correctOptionId: "opt4",
          marksObtained: 0,
        },
        {
          questionId: "q3",
          questionText:
            "Explain the difference between `let` and `var` in JavaScript.",
          submittedAnswer: "let is block scoped, var is function scoped.",
          marksObtained: 25,
        },
      ],
    },
    {
      id: "result2",
      quizId: "quiz2",
      quizTitle: "HTML & CSS Fundamentals",
      studentId: "student2",
      studentName: "Jane Smith",
      score: 25,
      totalMarks: 30,
      submittedAt: "2024-10-06T11:00:00Z",
      answers: [
        {
          questionId: "q1",
          questionText: "What does HTML stand for?",
          selectedOptionId: "opt1",
          correctOptionId: "opt1",
          marksObtained: 10,
        },
        {
          questionId: "q2",
          questionText:
            "Which HTML tag is used to define an internal style sheet?",
          selectedOptionId: "opt2",
          correctOptionId: "opt2",
          marksObtained: 10,
        },
        {
          questionId: "q3",
          questionText: "Describe the box model in CSS.",
          submittedAnswer:
            "The box model consists of margins, borders, padding, and content.",
          marksObtained: 5,
        },
      ],
    },
    {
      id: "result3",
      quizId: "quiz3",
      quizTitle: "ReactJS Basics",
      studentId: "student3",
      studentName: "Sam Wilson",
      score: 30,
      totalMarks: 35,
      submittedAt: "2024-10-06T12:00:00Z",
      answers: [
        {
          questionId: "q1",
          questionText: "What is the primary purpose of React?",
          selectedOptionId: "opt2",
          correctOptionId: "opt2",
          marksObtained: 10,
        },
        {
          questionId: "q2",
          questionText: "Which of the following is NOT a React hook?",
          selectedOptionId: "opt3",
          correctOptionId: "opt3",
          marksObtained: 10,
        },
        {
          questionId: "q3",
          questionText:
            "Explain the virtual DOM in React and how it improves performance.",
          submittedAnswer:
            "Virtual DOM reduces the number of direct DOM manipulations, improving efficiency.",
          marksObtained: 10,
        },
      ],
    },
  ];

  const handleViewDetails = () => {
    console.log("handleViewDetails");
  };
  const handleQuizSelect = () => {
    console.log("handleQuizSelect");
  };
  return (
    <div className="view-results">
      <h3>View Results</h3>
      <select onChange={handleQuizSelect}>
        {quizzes.map((quiz) => (
          <option key={quiz.id} value={quiz.id}>
            {quiz.title}
          </option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Score</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr key={result.id}>
              <td>{result.studentName}</td>
              <td>{result.score}</td>
              <td>
                <button onClick={() => handleViewDetails(result.id)}>
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewResult;
