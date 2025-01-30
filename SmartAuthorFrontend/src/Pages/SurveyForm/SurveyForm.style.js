import styled from "styled-components";
import theme from "../../theme/Themes";

// Wrapper for the entire form
export const SurveyFormWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

// Background Image
export const SurveyFormBgImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

// Main Container
export const SurveyFormContainer = styled.div`
  width: 50%;
  max-width: 600px;
  background: ${theme.colors.blur};
  border-radius: 15px;
  padding: 20px;
  border: 3px solid ${theme.colors.blue};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  color: white;
  text-align: center;
  position: relative;
`;

// Navbar
export const SurveyFormNavbar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

// Header
export const SurveyFormHeader = styled.h2`
  font-size: ${theme.font.size.xxlarge};
  font-family: ${theme.font.Headerfamily};
  color: ${theme.colors.white};
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;
`;

export const Share = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  .edit-icon {
    font-size: ${theme.font.size.xxlarge};
    color: ${theme.colors.white};
  }
`;

// Share Thoughts
export const ShareUrThoughts = styled.p`
  font-size: ${theme.font.size.large};
  font-weight: bold;
  color:${theme.colors.blur};
  text-shadow: -2px -2px 0 white, 2px -2px 0 white, -2px 2px 0 white,
    2px 2px 0 white;
  font-family: ${theme.font.interfamily};
  margin: 0;
`;

// Body
export const SurveyFormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background-color: ${theme.colors.lightblur};
`;

// Body Container
export const SurveyFormBodyContainer = styled.div`
  width: 100%;
`;

// Progress Bar Wrapper
export const ProgressBarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  position: relative;

  .close-icon {
    font-size: ${theme.font.size.large};
    color: white;
    cursor: pointer;
  }
`;

// Individual Progress Bar
export const ProgressBar = styled.div`
  width: 18%;
  height: 3px;
  background: ${theme.colors.inputborder};
  border-radius: 5px;

  &.active {
    background: ${theme.colors.white};
    box-shadow: 2px 3px 10px ${theme.colors.blue};
  }
`;

// Question Form
export const SurveyQuestionForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 100%;
`;

// Question Text
export const SurveyQuestion = styled.h3`
  font-size: ${theme.font.size.medium};
  font-weight: bold;
  color: ${theme.colors.white};
  text-shadow: 2px 2px 5px ${theme.colors.blue};
`;

// Input Field
export const SurveyInput = styled.textarea`
  width: 90%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.inputborder};
  background: ${theme.colors.transparnt};
  box-shadow: 2px 2px 2px 5px ${theme.colors.blue1};;
  color: ${theme.colors.white};
  font-size: ${theme.font.size.medium};
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

// Fun Fact Button
export const FunFactButton = styled.button`
  background: ${theme.colors.white};
  color: ${theme.colors.blue};
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius:20px;
  border-bottom-left-radius:2px;
  font-size: ${theme.font.size.medium};
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid ${theme.colors.blue};
  box-shadow: 1px 2px 10px ${theme.colors.blue};
  margin-top: 15px;
  transition: 0.3s;
`;

// Next/Submit Button
export const SubmitButton = styled.button`
  background: ${theme.colors.blue};
  color: ${theme.colors.white};
  border-radius: 20px;
  font-size: ${theme.font.size.small};
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid ${theme.colors.white};
  margin-top: 15px;
`;
