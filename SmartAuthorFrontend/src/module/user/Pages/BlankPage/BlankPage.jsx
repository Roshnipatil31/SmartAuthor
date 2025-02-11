import React from "react";
import Step from "../../Components/blankPageComponents/StepComponent/StepComponent";
import { BlankPageWrapper } from "./BlankPage.style";
import EditListChapters from "../../Components/blankPageComponents/EditListChapters/EditListChapters";
import NewChapter from "../../Components/blankPageComponents/NewChapter/NewChapter";

const BlankPage = () => {
  return (
    <BlankPageWrapper>
      <Step currentStep={1} />
      <div className="editListChapters">
        <EditListChapters />
        <NewChapter />
      </div>
    </BlankPageWrapper>
  );
};

export default BlankPage;
