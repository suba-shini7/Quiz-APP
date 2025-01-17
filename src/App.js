import { Route, Routes } from 'react-router-dom';
import './App.css';
import { useState } from "react";
import TeamForms from './components/TeamForms';
import Quiz from './components/Quiz';
import Instructions from './components/Instructions';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [teamName, setTeamName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/instructions/${teamName}`);
  };
  const handleStart = (e) => {
    e.preventDefault();
    navigate(`/quiz/${teamName}`);
  };
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<TeamForms teamName={teamName} handleSubmit={handleSubmit} setTeamName={setTeamName}></TeamForms>}></Route>
      <Route path='/quiz/:id' element={<Quiz ></Quiz>}></Route>
      <Route path='/instructions/:id' element={<Instructions teamName={teamName} handleStart={handleStart}/>}></Route>

     </Routes>
    </div>
  );
}

export default App;
