import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: ${theme.colors.BackgroundGradient};
  min-height: 100vh;
`;
