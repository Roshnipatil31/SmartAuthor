import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const DashboardWapper = styled.div`
  display: flex;
  flex-direction: row;
  /* height: 100vh; */
  /* width: 100vw; */
`;

export const DashboardGif = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  /* width: 300px; */
  /* height: 100vh; */
  background-color: ${theme.colors.navy};
`;

export const BookGif = styled.img`
  width: 100%;
  height: 100%;
`;

export const DashboardContent = styled.div`
  display: flex;
  flex-direction: column;
justify-content: flex-end;
  width: 75%;
`;
