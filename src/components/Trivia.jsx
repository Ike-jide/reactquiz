import React, { useEffect } from "react";


export default function Trivia({data,
    setQuestionNumber,
    setTimeOut,
    questionNumber}){
        useEffect(()=>{
            setQuestion(data[questionNumber - 1]);

        },
        [data,questionNumber]
        )
    return(
        <div className="trivia">
      <div className="question">
        food whats the best
      </div>
      <div className="answers">
      <div className="answer correct">
        the goat
      </div>
      <div className="answer">
        the goat
      </div>
      <div className="answer">
        the goat
      </div>
      <div className="answer">
        the goat
      </div>
      </div>
        </div>
    )
}