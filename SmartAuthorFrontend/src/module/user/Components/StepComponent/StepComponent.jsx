import React from "react";
import styled from "styled-components";

const steps = ["Fill Information", "Write", "Add Cover Page", "Publish"];

const ProgressBar = ({ currentStep }) => {
  return (
    <ProgressContainer>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepWrapper>
            <Circle active={index <= currentStep} />
            {index < steps.length - 1 && <Line active={index < currentStep} />}
          </StepWrapper>
          <Label>{step}</Label>
        </Step>
      ))}
    </ProgressContainer>
  );
};

// Styled Components
const ProgressContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

const Step = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

const StepWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#4a90e2" : "#ddd")};
  transition: background-color 0.3s;
`;

const Label = styled.span`
  margin-top: 8px;
  font-size: 14px;
  color: #333;
  text-align: center;
`;

const Line = styled.div`
  width: 100px;
  height: 2px;
  background-color: #ddd;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-100%);
`;

export default ProgressBar;
