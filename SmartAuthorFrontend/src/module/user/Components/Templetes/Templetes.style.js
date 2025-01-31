import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const TempletesWapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`;

export const TempletesHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    /* align-items: flex-start; */
    width: 100%;
`;

export const TempletesTitle = styled.p`
    color: ${theme.colors.black};
    font-size: ${theme.font.size.xlarge};
    font-weight: bold;
    margin: 0;
    padding-left: 20px;
`;
