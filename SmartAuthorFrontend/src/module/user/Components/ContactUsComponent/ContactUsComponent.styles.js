import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const ContactFormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  background: ${theme.colors.white};
  border-radius: 10px;
  // box-shadow: 0px 4px 6px ${theme.colors.lightblur};
  overflow: hidden;
  padding: 20px;
  margin-top: 20px;

  @media ${theme.media.md} {
    flex-direction: column;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;

  @media ${theme.media.md} {
    width: 100%;
  }
`;

export const StyledImage = styled.img`
  // width: 100%;
  // height: auto;
  border-radius: 10px;
`;

export const FormWrapper = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  // padding: 20px;
  height: 100vh;
  gap: 60px;
  width: 10px;

  @media ${theme.media.md} {
    width: 100%;
  }
`;

export const FormTitle = styled.h2`
  // font-family: ${theme.font.Headerfamily};
  font-size: ${theme.font.size.xxxlarge};
  color: ${theme.colors.header};
  margin-bottom: 20px;
`;

export const InputField = styled.input`
  // width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid ${theme.colors.inputborder};
  border-radius: 5px;
  font-size: ${theme.font.size.medium};
  font-family: ${theme.font.family};

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue};
  }
`;

export const TextArea = styled.textarea`
  // width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid ${theme.colors.inputborder};
  border-radius: 5px;
  font-size: ${theme.font.size.medium};
  font-family: ${theme.font.family};

  &:focus {
    outline: none;
    border-color: ${theme.colors.blue};
  }
`;

export const SubmitButton = styled.button`
  background-color: ${theme.colors.navy};
  color: ${theme.colors.white};
  padding: 10px;
  font-size: ${theme.font.size.medium};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  font-family: ${theme.font.family};

  &:hover {
    background-color: ${theme.colors.blue2};
  }
`;
