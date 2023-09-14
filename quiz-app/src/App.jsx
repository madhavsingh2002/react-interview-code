import React, { useState } from 'react';
import './App.css'
// Let's build this small quiz app....
// Step-1: create question...
function Question({question,onSelect}){
  return(
    <div>
      <h3>{question.text} </h3>
      <ul>
        {
          question.answers.map((answer,index)=>(
            <li key={index}>
              
              <label > <input type="radio" name="answer" value={answer} onChange={()=>onSelect(answer)}  /></label> {answer} </li>
          ))
        }
      </ul>
    </div>
  )
}

function Result({score,total}){
  const percentage =((score/total)*100).toFixed(2);
  return(
    <div>
      <h2>Quiz Result</h2>
      <p>You got {score} out of {total} question correct. </p>
      <p>percentage:{percentage}% </p>
    </div>
  )
}

function QuizApp() {
  const questions = [
    {
      text: 'What is the capital of France?',
      answers: ['Paris', 'London', 'Berlin', 'Madrid'],
      correctAnswer: 'Paris',
    },
    {
      text: 'Which planet is known as the Red Planet?',
      answers: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswer: 'Mars',
    },
    {
      text: 'How many continents are there on Earth?',
      answers: ['4', '6', '7', '5'],
      correctAnswer: '7',
    },
  ];

  const [currentQuestionIndex,setCurrentQuestionIndex]=useState(0)
  const [userAnswers,setUserAnswers]=useState([])
  const [quizCompleted,setQuizCompleted]=useState(false)

  const handleAnswerSelect =(answer)=>{
    setUserAnswers([...userAnswers,answer]);
    if(currentQuestionIndex==questions.length-1){
      setQuizCompleted(true)
    }
    else{
      setCurrentQuestionIndex(currentQuestionIndex+1)
    }
  }
const calculateScore=()=>{
  let score =0;
  for (let i=0; i<questions.length;i++){
    if(userAnswers[i]===questions[i].correctAnswer){
      score++;
    }
  }
  return score;
}

  return (
    <div className='App'>
{
  quizCompleted ? (
    <Result score={calculateScore()} total={questions.length}/>
  ):(
    <Question question={questions[currentQuestionIndex]} onSelect={handleAnswerSelect}/>
  )
}
    </div>
  );
}

export default QuizApp;
// Thanks for watching...