import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const BlankPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  background: ${theme.colors.BackgroundGradient};

  .editListChapters{
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 95%;
    margin: 0 auto;
    height: 100vh;
    background: ${theme.colors.transparnt};

    @media ${theme.media.lg} {
      margin: 0px;
    }
  }
`;
