import React from "react";


const TeamForms = ({teamName,handleSubmit,setTeamName}) => {
  

  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="card shadow-lg p-4 rounded" style={{ maxWidth: "400px", width: "100%" }}>
        <h2 className="text-center mb-4 text-success">SAC</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="teamName" className="form-label">
              Enter Team Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="teamName"
              placeholder="Your Team Name"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-warning w-100">
            Start Quiz
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeamForms;
