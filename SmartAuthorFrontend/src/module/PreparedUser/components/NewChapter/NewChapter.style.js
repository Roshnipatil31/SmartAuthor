import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const NewChapterWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
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