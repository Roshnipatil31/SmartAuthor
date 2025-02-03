import React, { useState } from "react";
import {
  SurveyFormWapper,
  SurveyFormBgImage,
  SurveyFormContainer,
  SurveyFormNavbar,
  SurveyFormHeader,
  ShareUrThoughts,
  SurveyFormBody,
  SurveyFormBodyContainer,
  ProgressBarContent,
  ProgressBar,
  SurveyQuestionForm,
  SurveyQuestion,
  SurveyInput,
  FunFactButton,
  SubmitButton,
  Share,
  ButtonGroup
} from "./SurveyForm.style";
import bgimage from "../../assets/BgAuthImage.png";
import { IoClose } from "react-icons/io5";
import { FiEdit3 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SurveyForm = () => {
    const navigate = useNavigate();
  const questions = [
    "How can we improve feature A?",
    "What do you like about feature B?",
    "Any suggestions for feature C?",
    "How would you rate feature D?",
    "What improvements do you want for feature E?",
  ];

  const totalSteps = questions.length; // Total number of questions/progress bars
  const [currentStep, setCurrentStep] = useState(0); // Track progress
  const [answers, setAnswers] = useState(Array(totalSteps).fill("")); // Store answers

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log("Submit", answers); // Handle submit logic here
    }
    navigate("/dashboard");
  };

  const handleInputChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = e.target.value;
    setAnswers(newAnswers);
  };

  return (
    <SurveyFormWapper>
      <SurveyFormBgImage src={bgimage} alt="bgimage" />
      <SurveyFormContainer>
        <SurveyFormNavbar>
          <Share>
            <FiEdit3 className="edit-icon" />
            <SurveyFormHeader> Smartauthor </SurveyFormHeader>
          </Share>
          <ShareUrThoughts>Share Your Thoughts with Us! </ShareUrThoughts>
        </SurveyFormNavbar>
        <SurveyFormBody>
          <SurveyFormBodyContainer>
            {/* Progress Bar */}
            <ProgressBarContent>
              {questions.map((_, index) => (
                <ProgressBar
                  key={index}
                  className={index <= currentStep ? "active" : ""}
                />
              ))}
              <IoClose className="close-icon" />
            </ProgressBarContent>

            {/* Question Form */}
            <SurveyQuestionForm>
              <SurveyQuestion>{questions[currentStep]}</SurveyQuestion>
              <SurveyInput
                type="text"
                placeholder="Type your answer here"
                value={answers[currentStep]}
                onChange={handleInputChange}
              />
            </SurveyQuestionForm>

            <ButtonGroup>
              <FunFactButton>Fun Facts</FunFactButton>
              <SubmitButton onClick={handleNext}>
                {currentStep === totalSteps - 1 ? "Submit" : "Next"}
              </SubmitButton>
            </ButtonGroup>
          </SurveyFormBodyContainer>
        </SurveyFormBody>
      </SurveyFormContainer>
    </SurveyFormWapper>
  );
};

export default SurveyForm;
