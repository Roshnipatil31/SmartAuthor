import styled from "styled-components";
import theme from "../../../../../theme/Themes";

export const TextEditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  .editable {
    height: 75vh;
    background: ${theme.colors.white};
    outline: none;
    padding: 0 20px;
    overflow-y: scroll;
    scrollbar-width: none;
    position: relative;
    z-index: 0;
    /* width: 80%; */

    @media ${theme.media.lg} {
      height: 78vh;
    }
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
  text-align: center;
  width: 20%;
  select {
    padding: 5px;
    border: none;
    font-size: ${theme.font.size.small};
  }

  @media ${theme.media.lg} {
    width: 15%;
    select {
      font-size: ${theme.font.size.xsmall};
      width: 70px;
    }
  }
`;

export const TextFamily = styled.div`
  padding: 5px 20px;
  border-right: 1px solid ${theme.colors.inputborder};
  text-align: center;
  width: 20%;
  select {
    padding: 5px;
    border: none;
    font-size: ${theme.font.size.small};
    width: 100px;
  }

  @media ${theme.media.lg} {
    width: 15%;
    select {
      font-size: ${theme.font.size.xsmall};
      width: 70px;
    }
  }
`;

export const TextFontSize = styled.div`
  padding: 5px 20px;
  border-right: 1px solid ${theme.colors.inputborder};
  text-align: center;
  width: 20%;
  span {
    padding: 5px;
    border: none;
    cursor: pointer;
  }
  .fontSize {
    border: 1px solid ${theme.colors.inputborder};
    border-radius: 5px;
    font-size: ${theme.font.size.medium};
    width: 30px;
    text-align: center;
    outline: none;

    -moz-appearance: textfield; /* Firefox */
  -webkit-appearance: none;   /* Chrome, Safari */
  appearance: none;           /* Standard */

  }

  .fontSize::-webkit-outer-spin-button,
.fontSize::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

  .fontdes {
    font-size: ${theme.font.size.medium};
  }

  @media ${theme.media.lg} {
    width: 30%;
    padding: 5px;
    .fontdes {
      font-size: ${theme.font.size.small};
    }
  }
`;

export const TextIndex = styled.div`
  padding: 5px 20px;
  text-align: center;
  width: 40%;

  .SlateButton {
    background: ${(props) =>
      props.active ? theme.colors.blue : theme.colors.white};
    border: none;
    cursor: pointer;
    font-size: ${theme.font.size.medium};

    @media ${theme.media.lg} {
      font-size: ${theme.font.size.small};
    }
  }

  @media ${theme.media.lg} {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;


