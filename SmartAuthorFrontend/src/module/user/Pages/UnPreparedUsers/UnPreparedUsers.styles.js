import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const SemiPreparedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin-right: 10px;
  border-radius: 40px;
  margin: auto;
  height: auto;

  form {
    display: flex;
    flex-direction: column;
    // gap: 20px;
    // padding: 20px;
    // background: ${theme.colors.white};
    // justify-content: space-between;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  // gap: 5px;

  label {
    font-size: ${theme.font.size.medium};
    font-family: ${theme.font.Geologica};

    font-weight: bold;
    margin-bottom: 10px;
  }

  input {
    font-size: ${theme.font.size.xsmall};
    font-family: ${theme.font.Geologica};

    border: none;
    border-bottom: 1px solid ${theme.colors.inputColor};
    color: ${theme.colors.inputColor};
    font-weight: bold;
    outline: none;
    padding: 5px;
  }

  input::placeholder {
    color: ${theme.colors.inputColor};
  }

  span {
    color: red;
    font-size: ${theme.font.size.xsmall};
    font-family: ${theme.font.Geologica};

    margin-top: 5px;
  }

  /* Styles for genre selection */
  .genre-container {
    display: flex;
    flex-wrap: wrap;
    // gap: 10px;

    .genre {
      padding: 5px 10px;
      border-radius: 20px;
      background: ${theme.colors.blue3};
      color: ${theme.colors.navy};
      border: 1px solid ${theme.colors.navy};
      cursor: pointer;
      font-size: ${theme.font.size.small};
      font-family: ${theme.font.Geologica};
    }

    .add-genre {
      display: flex;
      align-items: center;
      border: 1px solid ${theme.colors.inputborder};
      border-radius: 20px;
      padding: 5px 10px;
      background: ${theme.colors.transparent};
      width: 42%;

      input {
        border: none;
        outline: none;
        background: transparent;
        width: 100%;
        color: ${theme.colors.inputColor};
        font-size: ${theme.font.size.small};
        font-family: ${theme.font.Geologica};
      }

      button {
        border: none;
        background: ${theme.colors.gray2};
        color: ${theme.colors.white};
        border-radius: 50%;
        padding: 5px 10px;
        cursor: pointer;
      }
    }
  }
`;

export const SemiButton = styled.button`
  background: ${theme.colors.buttonGradient};
  color: ${theme.colors.white};
  border-radius: 20px;
  font-size: ${theme.font.size.small};
  font-family: ${theme.font.Geologica};

  padding: 10px 20px;
  width: 30%;
  margin-left: auto;
  font-weight: bold;
  border: 1px solid ${theme.colors.white};
  margin-top: 15px;
  cursor: pointer;
`;
