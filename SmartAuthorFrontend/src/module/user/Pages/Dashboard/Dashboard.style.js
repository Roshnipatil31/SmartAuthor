import styled from "styled-components";
import theme from "../../theme/Themes";

export const DashboardWapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;

export const DashboardGif = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 200px;
    height: 100vh;
    background-color: ${theme.colors.navy};
`;

export const BookGif = styled.img`
    width: 100%;
    height: 100%;
`;

export const DashboardContent = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 80%;
`;  