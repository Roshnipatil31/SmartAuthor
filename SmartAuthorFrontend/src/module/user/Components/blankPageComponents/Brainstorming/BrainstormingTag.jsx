import React, { useState } from "react";
import {
  Container,
  QuestionTitle,
  OptionsContainer,
  Option,
  ButtonContainer,
  Button,
  Questionfooter,
} from "./BrainstormingTag.style";

const BrainstormingTag = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(1);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (questionIndex < 7) {
      setQuestionIndex(questionIndex + 1);
      setSelectedOption(null);
    }
  };

  const handlePrev = () => {
    if (questionIndex > 1) {
      setQuestionIndex(questionIndex - 1);
      setSelectedOption(null);
    }
  };

  return (
    <Container>
        {/* <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div> */}

        
      <QuestionTitle>1. How are you feeling about starting this new writing journey?</QuestionTitle>
      
      <OptionsContainer>
        {["Excited", "Nervous", "Overwhelmed", "Curious", "Confident"].map(
          (text, index) => (
            <Option
              key={index}
              selected={selectedOption === text}
              onClick={() => handleOptionClick(text)}
            >
              <span>{String.fromCharCode(65 + index)}</span> {text}
            </Option>
          )
        )}

      <ButtonContainer>
        <button className="prevbut"
        disabled={questionIndex === 1} onClick={handlePrev}>
          Prev Question
        </button>
        <button className="nextbut"
        onClick={handleNext}>Next Question</button>
      </ButtonContainer>
      </OptionsContainer>

      <Questionfooter>
        Remaining Question {questionIndex} / 7
        <button className="submitbut" disabled={questionIndex < 7}>
        Submit</button>
      </Questionfooter>
    </Container>
  );
};

export default BrainstormingTag;
