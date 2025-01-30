import React from "react";
import { SurveyFormWapper, SurveyFormBgImage } from "./SurveyForm.style";
import bgimage from "../../assets/BgAuthImage.png";

const SurveyForm = () => {
  return (
    <SurveyFormWapper>
      <SurveyFormBgImage src={bgimage} alt="bgimage" />
      <SurveyFormContainer>
        <SurveyFormNavbar>
          <FiEdit3 className="edit-icon" />
          <SurveyFormHeader> Smartauthor </SurveyFormHeader>
          <ShareUrThoughts>Share Your Thoughts with Us! </ShareUrThoughts>
        </SurveyFormNavbar>
        <SurveyFormBody><SurveyFormBodyContainer></SurveyFormBodyContainer></SurveyFormBody>
      </SurveyFormContainer>
    </SurveyFormWapper>
  );
};

export default SurveyForm;
