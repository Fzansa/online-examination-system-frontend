import React from "react";

const Options = ({ question, questionIndex, handleAddOption, handleInputChange }) => {
  return (
    <div>
      <h4>Options</h4>
      {question.options.map((option, optionIndex) => (
        <div key={optionIndex}>
          <label>Option {optionIndex + 1} Text:</label>
          <input
            type="text"
            name="text"  // This just needs to be "text" since we handle index in handleInputChange
            value={option.text || ""}
            onChange={(e) => handleInputChange(e, questionIndex, optionIndex)} // Pass questionIndex and optionIndex
            required
          />
        </div>
      ))}
      <button type="button" onClick={() => handleAddOption(questionIndex)}>
        Add Option
      </button>
      <div>
        <label>Correct Option ID:</label>
        <input
          type="text"
          name="correctOptionId"
          value={question.correctOptionId}
          onChange={(e) => handleInputChange(e, questionIndex)}  // This updates the correct option
          required
        />
      </div>
    </div>
  );
};

export default Options;
