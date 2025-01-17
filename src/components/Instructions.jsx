import React from "react";
const Instructions = ({handleStart}) => {
  return (
    <div className="container mt-5">
      <div className="card shadow-lg">
        <div className="card-header bg-secondary text-white text-center">
          <h2>Quiz Instructions</h2>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              1. The quiz consists of multiple-choice questions.
            </li>
            <li className="list-group-item">
              2. Each question has a time limit of <strong>30 seconds</strong>.
            </li>
            <li className="list-group-item">
              3. Once you move to the next question, you cannot go back.
            </li>
            <li className="list-group-item">
              4. Make sure to read each question carefully before answering.
            </li>
            <li className="list-group-item">
              5. Each correct answer will earn you 1 points.
            </li>
            <li className="list-group-item">
              6. No negative marking for incorrect answers.
            </li>
            <li className="list-group-item">
              7. Ensure you have a stable internet connection.
            </li>
          </ul>
          <div className="text-center mt-4">
            <button
              className="btn btn-success btn-lg px-5"
              onClick={handleStart}
            >
            Ready to begin
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
