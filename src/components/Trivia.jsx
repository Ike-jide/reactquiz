import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import good from "../assets/good-music.wav"
import loser from "../assets/loser.mp3"
import winner  from "../assets/winner.mp3"



export default function Trivia({
    data,
    setQuestionNumber,
    setTimeOut,
    questionNumber}){
        const [question,setQuestion]= useState(null);
        const [selectedAnswer,setSelectedAnswer]= useState(null);
        const [className,setClassName]= useState('answer');
        const [letsPlay] = useSound(good);
        const [correctAnswer] = useSound(winner);
        const [wrongAnswer] = useSound(loser);

        useEffect(()=>{
            letsPlay();
        }, [letsPlay]);
        console.log(letsPlay)
        useEffect(()=>{
            setQuestion(data[questionNumber - 1]);

        },
        [data,questionNumber]
        );
        const delay = (duration, callback)=> {
            setTimeOut(() => {
                callback()
            },duration)
        }
        const handleClick = (a)=>{
            setSelectedAnswer(a) 
            setClassName("answer active");
            delay(3000, ()=>{setClassName(a.correct ? "answer correct" : "answer wrong")})
            delay(5000, ()=>{
            if (a.correct){
                correctAnswer();
                delay(1000, ()=>{
                    setQuestionNumber((prev)=> prev + 1);
                    setSelectedAnswer(null)
                })
               
            } else{
                wrongAnswer()
                delay(1000, ()=>{
                    setTimeOut(true)
                })
               
            }
        });
        };

 
    return(
        <div className="trivia">
      <div className="question">
        {question?.question}
      </div>
      <div className="answers">
        {question?.answers.map((a)=>(
       < div className={selectedAnswer === a ? className : "answer"} onClick={()=>handleClick(a)}>
        {a.text}
      </div>
       )  )}
      
      
      </div>
        </div>
    )
}