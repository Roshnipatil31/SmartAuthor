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
    font-size: ${theme.font.size.small};
  }

  input {
    font-size: ${theme.font.size.small};
    border: none;
    border-bottom: 1px solid ${theme.colors.navy};
    cursor: pointer;
  }
`;

export const SemiButton = styled.button`
  background: ${theme.colors.navy};
  color: ${theme.colors.white};
  border-radius: 20px;
  font-size: ${theme.font.size.small};
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  border: 1px solid ${theme.colors.white};
  margin-top: 15px;
`;
