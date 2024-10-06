import React from "react";

const ManageQuiz = () => {
    let quizzes = [
        {
          "id": "quiz1",
          "title": "JavaScript Basics",
          "description": "A quiz covering the basics of JavaScript.",
          "duration": 30,
          "totalMarks": 40,
          "questions": [
            {
              "id": "q1",
              "text": "What is a closure in JavaScript?",
              "type": "multiple-choice",
              "options": [
                { "id": "opt1", "text": "A function with its own scope." },
                { "id": "opt2", "text": "A function bundled together with its lexical environment." },
                { "id": "opt3", "text": "A block of code that runs automatically." },
                { "id": "opt4", "text": "None of the above." }
              ],
              "correctOptionId": "opt2",
              "marks": 10
            },
            {
              "id": "q2",
              "text": "Which of the following is NOT a primitive type in JavaScript?",
              "type": "multiple-choice",
              "options": [
                { "id": "opt1", "text": "String" },
                { "id": "opt2", "text": "Number" },
                { "id": "opt3", "text": "Boolean" },
                { "id": "opt4", "text": "Object" }
              ],
              "correctOptionId": "opt4",
              "marks": 10
            },
            {
              "id": "q3",
              "text": "Explain the difference between `let` and `var` in JavaScript.",
              "type": "short-answer",
              "marks": 20
            }
          ]
        },
        {
          "id": "quiz2",
          "title": "HTML & CSS Fundamentals",
          "description": "A quiz covering the fundamentals of HTML and CSS.",
          "duration": 20,
          "totalMarks": 30,
          "questions": [
            {
              "id": "q1",
              "text": "What does HTML stand for?",
              "type": "multiple-choice",
              "options": [
                { "id": "opt1", "text": "HyperText Markup Language" },
                { "id": "opt2", "text": "Home Tool Markup Language" },
                { "id": "opt3", "text": "Hyperlinks and Text Markup Language" },
                { "id": "opt4", "text": "None of the above." }
              ],
              "correctOptionId": "opt1",
              "marks": 10
            },
            {
              "id": "q2",
              "text": "Which HTML tag is used to define an internal style sheet?",
              "type": "multiple-choice",
              "options": [
                { "id": "opt1", "text": "<script>" },
                { "id": "opt2", "text": "<style>" },
                { "id": "opt3", "text": "<css>" },
                { "id": "opt4", "text": "<link>" }
              ],
              "correctOptionId": "opt2",
              "marks": 10
            },
            {
              "id": "q3",
              "text": "Describe the box model in CSS.",
              "type": "short-answer",
              "marks": 10
            }
          ]
        },
        {
          "id": "quiz3",
          "title": "ReactJS Basics",
          "description": "A quiz to test your understanding of React fundamentals.",
          "duration": 25,
          "totalMarks": 35,
          "questions": [
            {
              "id": "q1",
              "text": "What is the primary purpose of React?",
              "type": "multiple-choice",
              "options": [
                { "id": "opt1", "text": "To handle routing in a web application." },
                { "id": "opt2", "text": "To manage and render UI components efficiently." },
                { "id": "opt3", "text": "To manage server-side operations." },
                { "id": "opt4", "text": "To interact with databases." }
              ],
              "correctOptionId": "opt2",
              "marks": 10
            },
            {
              "id": "q2",
              "text": "Which of the following is NOT a React hook?",
              "type": "multiple-choice",
              "options": [
                { "id": "opt1", "text": "useState" },
                { "id": "opt2", "text": "useEffect" },
                { "id": "opt3", "text": "useRouter" },
                { "id": "opt4", "text": "useContext" }
              ],
              "correctOptionId": "opt3",
              "marks": 10
            },
            {
              "id": "q3",
              "text": "Explain the virtual DOM in React and how it improves performance.",
              "type": "short-answer",
              "marks": 15
            }
          ]
        }
      ]
      

      const handleCreateQuiz = ()=>{
        console.log('created quizzes')
      }

      const handleEdictQuiz = ()=>{
        console.log('edit quizzes');
      }

      const handleDeleteQuiz = ()=>{
        console.log('edit quizzes');
      }
      
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
          { quizzes && quizzes.map((quiz) => (
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
