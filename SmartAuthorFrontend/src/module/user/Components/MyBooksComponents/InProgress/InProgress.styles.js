import styled from "styled-components";
import theme from "../../../../../theme/Themes";

export const InProgressContainer = styled.div`
  margin-top: 20px;
`;

export const BookCard = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.inputbg};
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px ${theme.colors.lightblur};
`;

export const BookCover = styled.img`
  width: 80px;
  height: auto;
  border-radius: 5px;
  border: 2px solid ${theme.colors.inputborder};
`;

export const BookDetails = styled.div`
  flex-grow: 1;
  padding: 0 15px;
  font-family: ${theme.font.family};

  h3 {
    margin: 0;
    font-size: ${theme.font.size.large};
    color: ${theme.colors.black};
  }

  p {
    margin: 5px 0;
    font-size: ${theme.font.size.medium};
    color: ${theme.colors.header};
  }
`;

export const ProgressBar = styled.div`
  background: ${theme.colors.lightblur};
  width: 100%;
  height: 10px;
  border-radius: 5px;
  margin-top: 5px;

  div {
    height: 100%;
    background: ${theme.colors.Green};
    border-radius: 5px;
  }
`;

export const ContinueButton = styled.button`
  background-color: ${theme.colors.navy};
  color: ${theme.colors.white};
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: ${theme.font.size.medium};

  &:hover {
    background-color: ${theme.colors.blue};
  }
`;
