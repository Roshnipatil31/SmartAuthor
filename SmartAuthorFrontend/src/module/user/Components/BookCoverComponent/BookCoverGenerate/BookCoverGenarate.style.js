import styled from "styled-components";
import theme from "../../../../../theme/Themes";

export const BookCoverGenarateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  padding: 20px;
  height: 100vh;
  position: relative;
  /* background: ${theme.colors.white}; */
  border-radius: 12px;
  /* box-shadow: 0px 4px 6px ${theme.colors.lightblur}; */
`;

export const BookCoverGenarateButton = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  gap: 20px;

  .AiGenerate {
    font-size: ${theme.font.size.small};
    font-weight: bold;
    color: ${theme.colors.white};
    background: ${theme.colors.buttonGradient};
    padding: 10px;
    border: none;
    border-radius: 50px;
  }

  .nextBtn {
    font-size: ${theme.font.size.small};
    font-weight: bold;
    color: ${theme.colors.white};
    background: ${theme.colors.navy};
    padding: 10px;
    border: none;
    border-radius: 50px;
  }

  .expertDesign {
    font-size: ${theme.font.size.small};
    font-weight: bold;
    color: ${theme.colors.white};
    background: ${theme.colors.navy};
    padding: 10px;
    border: none;
    margin-left:30px;
    border-radius: 50px;
  }
`;
