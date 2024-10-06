import React from "react";
import Options from "../optionForm/OptionForm"; // Import Options component

const Questions = ({ quiz, setQuiz }) => {
  const handleInputChange = (e, questionIndex = null, optionIndex = null) => {
    const { name, value } = e.target;
  
    // If we're updating a quiz-level field (like title or description)
    if (questionIndex === null) {
      setQuiz({ ...quiz, [name]: value });
    } else {
      // Clone the questions array
      const updatedQuestions = [...quiz.questions];
  
      // If no optionIndex is provided, we're updating the question itself
      if (optionIndex === null) {
        updatedQuestions[questionIndex] = {
          ...updatedQuestions[questionIndex],
          [name]: value,
        };
      } else {
        // We're updating an option within the question
        const updatedOptions = [...updatedQuestions[questionIndex].options];
  
        // Now we update the specific option
        updatedOptions[optionIndex] = {
          ...updatedOptions[optionIndex],
          text: value,  // Directly update the option text
        };
  
        // Update the question with the new options array
        updatedQuestions[questionIndex].options = updatedOptions;
      }
  
      // Finally, update the quiz state with the modified questions
      setQuiz({ ...quiz, questions: updatedQuestions });
    }
  };
  

  const handleAddOption = (questionIndex) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[questionIndex].options.push({ text: "" });
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  return (
    <div>
      <h3>Questions</h3>
      {quiz.questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <div>
            <label>Question Text:</label>
            <input
              type="text"
              name="text"
              value={question.text}
              onChange={(e) => handleInputChange(e, questionIndex)}
              required
            />
          </div>
          <div>
            <label>Type:</label>
            <select
              name="type"
              value={question.type}
              onChange={(e) => handleInputChange(e, questionIndex)}
            >
              <option value="multiple-choice">Multiple Choice</option>
              <option value="short-answer">Short Answer</option>
            </select>
          </div>
          <div>
            <label>Marks:</label>
            <input
              type="number"
              name="marks"
              value={question.marks}
              onChange={(e) => handleInputChange(e, questionIndex)}
              required
            />
          </div>

          {/* Options Component */}
          {question.type === "multiple-choice" && (
            <Options
              question={question}
              questionIndex={questionIndex}
              handleAddOption={handleAddOption}
              handleInputChange={handleInputChange}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Questions;
