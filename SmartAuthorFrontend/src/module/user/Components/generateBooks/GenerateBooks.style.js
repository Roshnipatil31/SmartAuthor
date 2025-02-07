import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const GenerateBooksWapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-overlays {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    /* height: 100vh; */
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;

    @media (max-width: 576px) {
      height: 200vh;
      align-items: flex-start;
    }
  }
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    min-width: 400px;
    position: relative;

    @media (max-width: 576px) {
      min-width: 300px;
    }
  }

  .modal-contents {
    background: white;
    padding: 20px;
    border-radius: 10px;
    min-width: 400px;
    position: relative;

    @media (max-width: 576px) {
      min-width: 300px;
      height: 105vh;
    }
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: ${theme.font.size.xlarge};
    background: ${theme.colors.transparnt};
    color: ${theme.colors.inputborder};
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
`;

export const GenerateBooksHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const GenerateBooksTitle = styled.p`
  color: ${theme.colors.black};
  font-size: ${theme.font.size.xxxlarge};
  font-weight: bold;
  margin: 0;
  padding-left: 20px;

  @media ${theme.media.sm} {
    font-size: ${theme.font.size.xxlarge};
    text-align: justify;
    padding: 0;
  }
`;

export const GeneratebooksContent = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media ${theme.media.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

export const GenerateBook = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

export const GenerateIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed ${theme.colors.inputborder};
  color: ${theme.colors.iconColor};
  border-radius: 20px;
  cursor: pointer;
  width: 100px;
  height: 95px;
  margin: 10px;

  .add-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${theme.font.size.xxlarge};
  }

  @media ${theme.media.md} {
    width: 110px;
    height: 105px;
  }

  @media ${theme.media.sm} {
    width: 120px;
    height: 115px;
  }

  @media ${theme.media.xs} {
    width: 130px;
    height: 125px;
  }
`;

export const GenerateParagraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const GenerateIconTitle = styled.p`
  color: ${theme.colors.blue2};
  font-size: ${theme.font.size.small};
  font-weight: bold;
  font-family: ${theme.font.family};
  margin: 0 0 10px 0;
  width: 120px;
  text-align: center;

  @media ${theme.media.sm} {
    font-size: ${theme.font.size.medium};
    width: 200px;
  }
`;

export const GenerateIconDescription = styled.p`
  color: ${theme.colors.gray};
  font-size: ${theme.font.size.small};
  text-align: center;
  margin: 0;

  @media ${theme.media.sm} {
    font-size: ${theme.font.size.medium};
    width: 200px;
  }
`;
