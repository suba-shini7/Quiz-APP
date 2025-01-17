import { useState,useEffect } from "react";
import { data } from "../data";
import { useParams } from "react-router-dom";
const Quiz = () => {
  const [queindex, setQueIndex] = useState(0);
  const [result, setResult] = useState(0);
  const [score, setScore] = useState(false);
  const { id } = useParams();
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const currQues = shuffledQuestions[queindex];


  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };
  useEffect(() => {
    const shuffled = shuffleArray([...data]); // Shuffle a copy of the questions
    setShuffledQuestions(shuffled);
  }, []);
  const sendToGoogleSheet = async (id, result) => {
    const url = "https://script.google.com/macros/s/AKfycbyMVueHB-2NjqpuM-DarLv3bX3TFNG-KovHDvqspO-Os0A3lFbst29PyWBGbnjhODos/exec"; 
    const data = { teamName: id, score: result };

    try {
      const response = await fetch(url, {
        mode: "no-cors",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const res = await response.json();
      console.log("Data sent successfully:", res);
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };
  const optionValidation = (i) => {
    console.log(i);
    const currQues = shuffledQuestions[queindex];
    if (currQues.correct_answer === i) {
      setResult(result + 1);
    }
    const nextques = queindex + 1;
    if (nextques < shuffledQuestions.length) {
      setQueIndex(queindex + 1);
    } else {
      setScore(true);
      sendToGoogleSheet(id, result + 1)
    }
  };


  if (shuffledQuestions.length === 0) {
    return <div>Loading...</div>; // Handle case where questions are still being shuffled
  }

  return (
    <div className="container">
      {score ? (
        <div className="score">
          <img
    src="https://i.pinimg.com/originals/fd/b0/9c/fdb09cd5e747f5c8330f998f11efb0a1.gif"
    alt="Thank You GIF"
    className="img-fluid rounded shadow-lg"
    style={{ maxWidth: "150px" }}
  />
   <h1>
            ThankYou 
          </h1>
  <p>{id} For Participating</p>
        </div>
      ) : (
        <div className="ques">
          <p className="">{currQues.question}</p>
          <div className="opt">
            <ul>
              {currQues.answers.map((e, i) => {
                return <li onClick={() => optionValidation(i)}>{e}</li>;
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default Quiz;
