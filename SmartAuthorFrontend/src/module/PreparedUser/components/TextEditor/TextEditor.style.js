import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const TextEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .editable {
    height: 400px;
    background: ${theme.colors.white};
    outline: none;
    padding: 20px;
  }
`;

export const TextEditComponents = styled.div`
  text-align: left;
  background: ${theme.colors.white};
  display: flex;
  flex-direction: row;
`;

export const TextSize = styled.div`
  padding: 5px 20px;
  border-right: 1px solid ${theme.colors.inputborder};
  select {
    padding: 5px;
    border: none;
  }
`;

export const TextFamily = styled.div`
  padding: 5px 20px;
  border-right: 1px solid ${theme.colors.inputborder};
  select {
    padding: 5px;
    border: none;
  }
`;

export const TextFontSize = styled.div`
  padding: 5px 20px;
  border-right: 1px solid ${theme.colors.inputborder};
  span {
    padding: 5px;
    border: none;
    cursor: pointer;
  }
  .fontSize {
    border: 1px solid ${theme.colors.inputborder};
    border-radius: 5px;
  }
`;

export const TextIndex = styled.div`
  padding: 5px 20px;

  .SlateButton {
    background: ${(props) =>
      props.active ? theme.colors.blue : theme.colors.white};
    border: none;
    cursor: pointer;
    font-size: ${theme.font.size.large};
  }
`;
