import styled from "styled-components";
import theme from "../../../../theme/Themes"; // Importing the theme file

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Dark overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background: ${theme.colors.white};
  padding: 30px;
  border-radius: 12px;
  max-width: 850px;
  width: 90%;
  box-shadow: 0 4px 10px ${theme.colors.lightblur};
  position: relative;
  animation: fadeIn 0.3s ease-in-out;

  @media ${theme.media.md} {
    max-width: 100%;
    padding: 20px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${theme.colors.gray};
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 20px;
//   align-items: flex-start;
//   justify-content: space-between;

  @media ${theme.media.md} {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

/* Left Side - Preview */
export const PreviewSection = styled.div`
  display: flex;
  flex-direction: column;
//   align-items: center;
//   text-align: center;
`;


export const BookCover = styled.div`
  img {
    width: 200px;
    height: 260px;
    border-radius: 8px;
  }
`;

export const BookInfo = styled.div`
  margin-top: 10px;
//   text-align: center;

  h2 {
    font-size: ${theme.font.size.xlarge};
    font-weight: bold;
    color: ${theme.colors.header};
  }
  p {
    margin: 5px 0;
    color: ${theme.colors.gray};
    font-size: ${theme.font.size.medium};
  }
`;

/* Right Side - Chapters and Buttons */
export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

export const ChapterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  max-width: 400px;

  @media ${theme.media.md} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ChapterCard = styled.div`
  background: ${theme.colors.white};
  padding: 12px;
  border-radius: 8px;
  width: 100px;
  box-shadow: 0 2px 6px ${theme.colors.lightblur};
//   text-align: center;

  h3 {
    font-size: ${theme.font.size.medium};
    font-weight: bold;
    color: ${theme.colors.header};
  }
  p {
    font-size: ${theme.font.size.small};
    color: ${theme.colors.gray2};
  }

  &.more-chapters {
    font-weight: bold;
  }

  @media ${theme.media.sm} {
    width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  justify-content: center;  
`;

export const ExportButton = styled.button`
  background: ${theme.colors.navy};
  color: ${theme.colors.white};
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: ${theme.font.size.small};
  width: 240px;
`;

export const EditButton = styled.button`
  background: ${theme.colors.transparnt};
  color: ${theme.colors.navy};
  padding: 10px 15px;
  border: 1px solid ${theme.colors.navy};
  border-radius: 10px;
  cursor: pointer;
  font-size: ${theme.font.size.small};
  width: 140px;

`;

export const PreviewTitle = styled.h1`
  text-align: left;
  padding-left: 20px;
  color: ${theme.colors.navy}; /* ⬅️ Applied navy color */
  font-size: ${theme.font.size.xxlarge};
  font-family: ${theme.font.family};
  margin-bottom: 20px;
`;

