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

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  min-width: 400px;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: red;
  color: white;
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
`;

export const GeneratebooksContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;

    @media (max-width: 1200px) {
        gap: 15px;
    }
    
    @media (max-width: 990px) {
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
    border-radius: 20px;
    cursor: pointer;
    width: 100px;
    height: 100px;
    margin: 10px;

    .add-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${theme.font.size.xxlarge};
    }

    @media (max-width: 768px) {
        width: 80px;
        height: 80px;
    }

    @media (max-width: 576px) {
        width: 70px;
        height: 70px;
    }

    @media (max-width: 480px) {
        width: 60px;
        height: 60px;
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

    @media (max-width: 576px) {
        font-size: ${theme.font.size.xsmall};
        width: 100px;
    }
`;

export const GenerateIconDescription = styled.p`
    color: ${theme.colors.gray};
    font-size: ${theme.font.size.small};
    text-align: center;
    margin: 0;

    @media (max-width: 576px) {
        font-size: ${theme.font.size.xsmall};
    }
`;
