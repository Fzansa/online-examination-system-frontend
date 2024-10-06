import React, { useState } from "react";
import './overview.css'

const Overview = () => {
    const [quizCount,setQuizCount]=useState(12);
    const [questionCount,setQuestionCount]=useState(120);
    const [studentCount,setStudentCount]=useState(20);
  return (
    <div className="dashboard-overview">
      <h3>Dashboard Overview</h3>
      <div className="stats">
        <div>Total Quizzes: {quizCount}</div>
        <div>Total Questions: {questionCount}</div>
        <div>Total Students: {studentCount}</div>
      </div>
    </div>
  );
};

export default Overview;
