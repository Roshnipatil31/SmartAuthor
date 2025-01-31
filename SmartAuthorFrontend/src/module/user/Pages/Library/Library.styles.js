import styled from "styled-components";
import theme from "../../../../theme/Themes"; // Adjust the path as needed

export const Container = styled.div`
  padding: 20px;
`;

export const Title = styled.h2`
  color: ${theme.colors.header};
  font-size: ${theme.font.size.large};
  font-family: ${theme.font.Headerfamily};
  margin-bottom: 15px;

  @media ${theme.media.md} {
    font-size: ${theme.font.size.medium};
  }
`;
