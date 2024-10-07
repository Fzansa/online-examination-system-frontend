import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchSingleQuiz } from "../utils/userContext";
import "./startQuiz.css";

const StartQuiz = () => {
  const { id } = useParams();
  const [quizz, setQuizz] = useState(null);
  const { data } = useFetchSingleQuiz(id);
  const [qNum, setQNum] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setQuizz(data?.quizz);
    console.log(answers)
  }, [data, quizz,answers]);

  const handleNextQuestion = () => {
    if (qNum < quizz?.questions?.length - 1) {
      setQNum(qNum + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (0 < qNum) {
      setQNum(qNum - 1);
    }
  };

// Store answer for each question
const handleAnswer = (opId) => {
    const currentQuestionId = quizz?.questions[qNum]?._id;

    // Check if the user has already answered this question
    const existingAnswerIndex = answers.findIndex(
      (a) => a.questionId === currentQuestionId
    );

    // If answer for this question exists, update it; otherwise, add a new answer
    const newAnswers = [...answers];
    if (existingAnswerIndex !== -1) {
      newAnswers[existingAnswerIndex] = {
        quizId: quizz?._id,
        questionId: currentQuestionId,
        optionId: opId,
      };
    } else {
      newAnswers.push({
        quizId: quizz?._id,
        questionId: currentQuestionId,
        optionId: opId,
      });
    }

    setAnswers(newAnswers);
  };


  return (
    <div className="quizzAreaContainer">
      <header>
        <div class="title">{quizz?.title}</div>
        <div class="timer">
          <div class="time_left_txt">Time Left: </div>
          <div class="timer_sec">{quizz?.duration}</div>
        </div>
      </header>
      <div class="quiz_box">
        <section>
          <div class="que_text">{quizz?.questions[qNum]?.text}</div>
          <div className="optionContainer">
            {quizz?.questions[qNum]?.options?.map((op, idx) => (
              <div
                class="option_list"
                key={op._id}
                onClick={() => handleAnswer(op._id)}
              >
                {op.text}
              </div>
            ))}
          </div>
        </section>

        <footer>
          <div class="total_que">
            {qNum + 1} of {quizz?.questions?.length} Questions
          </div>
          <button class="next_btn" onClick={handlePrevQuestion}>
            Previuos
          </button>
          <button class="next_btn" onClick={handleNextQuestion}>
            Next
          </button>
        </footer>
      </div>
    </div>
  );
};

export default StartQuiz;
