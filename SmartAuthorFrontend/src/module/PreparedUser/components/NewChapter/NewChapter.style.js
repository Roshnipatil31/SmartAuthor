import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const NewChapterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-right: 10px;
    border-radius: 40px;
`;

export const NewChapterContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 20px;
    background: ${theme.colors.white};
    justify-content: space-between;
`;

export const NewChapterEditBook = styled.p`
    font-size: ${theme.font.size.small};
    margin: 0;
    padding: 5px 30px;
    border-radius: 20px;
    border: 1px solid ${theme.colors.navy};
    cursor: pointer;
`;

export const NewChapterButtons = styled.div`
    display: flex;
    gap: 10px;
`;

export const ExportButton = styled.button`
    padding: 5px 20px;
    background: ${theme.colors.navy};
    color: ${theme.colors.white};
    border: none;
    border-radius: 20px;
    font-size: ${theme.font.size.small};
`;

export const PreviewButton = styled.button`
    padding: 5px 20px;
    background: ${theme.colors.navy};
    color: ${theme.colors.white};
    border: none;
    border-radius: 20px;
    font-size: ${theme.font.size.small};
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 20px 0;
  /* justify-content: space-between; */
  width: 40%;
  position: absolute;
  z-index: 1;
  bottom: -40px;
  justify-content: center;
  align-items: anchor-center;

  @media ${theme.media.lg} {
    bottom: 40px;
  }

  .AddChapter {
    background: ${theme.colors.navy};
    color: ${theme.colors.white};
    font-family: ${theme.font.Geologica};
    font-size: 16px;
    border: none;
    padding: 10px 15px;
    border-radius: 20px;
    cursor: pointer;
    margin: 10px;
    font-weight: 500;
  }

  .next{
    background: ${theme.colors.transparnt};
    border: none;
    color: ${theme.colors.black};  
    font-family: ${theme.font.Geologica};
    font-size: ${theme.font.size.medium};
    padding: 10px;
    cursor: pointer;
    margin: 10px ;
    font-weight: bold;
  }

  .Regenerate {
    background: ${theme.colors.buttonGradient};
    border: none;
    color: ${theme.colors.black};  
    font-family: ${theme.font.Geologica};
    font-size: ${theme.font.size.medium};
    padding: 5px 20px; 
    border-radius: 20px;
    cursor: pointer;
    margin-left: auto; ;
    font-weight: bold;
    height: 40px;
  }
`;