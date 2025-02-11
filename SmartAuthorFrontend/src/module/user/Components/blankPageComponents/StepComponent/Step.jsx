import React, { useState } from "react";
import ProgressBar from "./StepComponent";

const Step = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div>
      <ProgressBar currentStep={currentStep} />
      <button onClick={() => setCurrentStep((prev) => Math.max(0, prev - 1))}>
        Previous
      </button>
      <button onClick={() => setCurrentStep((prev) => Math.min(steps.length - 1, prev + 1))}>
        Next
      </button>
    </div>
  );
};

export default Step;
