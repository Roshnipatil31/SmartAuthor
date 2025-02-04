import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const SemiPreparedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: 10px;
  border-radius: 40px;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    background: ${theme.colors.white};
    justify-content: space-between;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  label {
    font-size: ${theme.font.size.medium};
    font-family: ${theme.font.Geologica};
    font-weight: bold;
    margin-bottom: 10px ;
  }

  input {
    font-size: ${theme.font.size.xsmall};
    border: none;
    border-bottom: 1px solid ${theme.colors.inputColor};
    font-family: ${theme.font.Geologica};
    color: ${theme.colors.inputColor};
    font-weight: bold;
    outline: none;
  }
  input::placeholder {
    color: ${theme.colors.inputColor};
  }

  textarea{
    font-size: ${theme.font.size.xsmall};
    border: 1px solid ${theme.colors.textareaborder};
    font-family: ${theme.font.Geologica};
    color: ${theme.colors.textareaColor};
    background: ${theme.colors.textareabg};
    border-radius: 10px;
    outline: none;
  }
`;

export const SemiButton = styled.button`
  background: ${theme.colors.buttonGradient};
  color: ${theme.colors.white};
  border-radius: 20px;
  font-size: ${theme.font.size.small};
  padding: 5px 20px;
  width: 30%;
  margin-left: auto;
  font-weight: bold;
  border: 1px solid ${theme.colors.white};
  margin-top: 15px;
  font-family: ${theme.font.Geologica};
`;
