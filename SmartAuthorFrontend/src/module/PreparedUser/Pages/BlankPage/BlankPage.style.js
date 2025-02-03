import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const BlankPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  .editListChapters{
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    height: 100%;
    background: ${theme.colors.BackgroundGradient};
  }
`;
