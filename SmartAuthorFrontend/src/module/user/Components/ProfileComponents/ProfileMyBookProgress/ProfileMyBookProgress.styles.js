import styled from "styled-components";
import theme from "../../../../../theme/Themes";

export const BookProgressCard = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0px 4px 6px ${theme.colors.lightblur};
  gap: 20px;

  @media ${theme.media.md} {
    flex-direction: column;
    text-align: center;
  }
`;

export const BookImage = styled.img`
  width: 80px;
  height: auto;
  border-radius: 5px;
`;

export const BookInfo = styled.div`
  flex: 1;

  h3 {
    font-size: ${theme.font.size.large};
    // font-family: ${theme.font.Headerfamily};
    color: ${theme.colors.black};
  }

  p {
    font-size: ${theme.font.size.medium};
    color: ${theme.colors.black};
  }
`;

export const StarRating = styled.div`
  font-size: ${theme.font.size.large};
`;

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .progress-bar {
    width: 100%;
    height: 8px;
    background: ${theme.colors.inputborder};
    border-radius: 5px;
    overflow: hidden;
  }

  .filled {
    height: 100%;
    background: ${theme.colors.Green};
  }
`;

export const ContinueButton = styled.button`
  background-color: ${theme.colors.navy};
  color: ${theme.colors.white};
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.blue};
  }
`;
