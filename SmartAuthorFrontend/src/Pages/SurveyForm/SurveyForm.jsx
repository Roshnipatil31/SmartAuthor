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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SurveyForm = () => {
  const navigate = useNavigate();
  const questions = [
    "How can we improve feature A?",
    "What do you like about feature B?",
    "Any suggestions for feature C?",
    "How would you rate feature D?",
    "What improvements do you want for feature E?",
  ];

    const notifySuccess = (message) => {
      console.log("Toast Success:", message); // Debugging log
      toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    };

  const totalSteps = questions.length;
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState(Array(totalSteps).fill(""));

  const handleNext = () => {
    if (!answers[currentStep].trim()) {
      toast.error("Please fill in your answer before proceeding!", {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {

      notifySuccess("submit successfully!");

      setTimeout(() => {
        navigate("/dashboard");
      },3000); // Wait for toast to display before navigating
    }
  };

  const handleInputChange = (e) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = e.target.value;
    setAnswers(newAnswers);
  };

  return (
    <SurveyFormWapper>
      <ToastContainer />
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
