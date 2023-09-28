import React, { useState } from "react";
import "../FlashCards.css";
import { isVisible } from "@testing-library/user-event/dist/utils";


function FlashCards() {
    const questions = [
        {
          id: 3457,
          question: "What language is React based on?",
          answer: "JavaScript"
        },
        {
          id: 7336,
          question: "What are the building blocks of React apps?",
          answer: "Components"
        },
        {
          id: 8832,
          question: "What's the name of the syntax we use to describe a UI in React?",
          answer: "JSX"
        },
        {
          id: 1297,
          question: "How to pass data from parent to child components?",
          answer: "Props"
        },
        {
          id: 9103,
          question: "How to give components memory?",
          answer: "useState hook"
        },
        {
          id: 2002,
          question:
            "What do we call an input element that is completely synchronised with state?",
          answer: "Controlled element"
        }
      ];
      
      
      const [selectedId, setSelectedId] = useState(null);
      

function handleClick(id){
    console.log("Button pressed");
    setSelectedId(id)
    
    
    
}

    return (
      <div style = {{display: "flex"}}>
    
    
      {questions.map((questions) => (
        <div key={questions.id} className={`card-button ${questions.id === selectedId ? "card-active" : ""}`} onClick={() => handleClick(questions.id)}>

          <p>{questions.id === selectedId ? questions.answer : questions.question}</p>
          
          </div>
        
      ))}
    
        
    </div>
    
    )
  

}
export default FlashCards;