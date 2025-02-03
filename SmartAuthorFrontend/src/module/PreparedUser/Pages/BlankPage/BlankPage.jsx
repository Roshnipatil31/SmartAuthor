import React from "react";
import Step from "../../../user/Components/StepComponent/StepComponent";
import { BlankPageWrapper } from "./BlankPage.style";
import EditListChapters from "../../components/EditListChapters/EditListChapters";
import NewChapter from "../../components/NewChapter/NewChapter";

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
