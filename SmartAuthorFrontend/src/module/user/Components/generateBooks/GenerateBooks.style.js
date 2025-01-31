import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const GenerateBooksWapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const GenerateBooksHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    /* align-items: flex-start; */
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
`;

export const GenerateBook = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export const GenerateIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px dashed ${theme.colors.inputborder};
    border-radius: 20px;

    width: 100px;
    height: 100px;
    margin: 10px;


    .add-icon{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${theme.font.size.xxlarge};
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
    color: ${theme.colors.black};
    font-size: ${theme.font.size.xlarge};
    font-weight: bold;
    margin: 0;
`;

export const GenerateIconDescription = styled.p`
    color: ${theme.colors.black};
    font-size: ${theme.font.size.small};
    font-weight: bold;
    margin: 0;
`;

