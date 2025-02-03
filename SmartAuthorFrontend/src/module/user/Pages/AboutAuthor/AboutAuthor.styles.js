import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media ${theme.media.md} {
    padding: 30px;
  }
`;
