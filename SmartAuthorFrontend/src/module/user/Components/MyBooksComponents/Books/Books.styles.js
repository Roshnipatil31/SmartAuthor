import styled from "styled-components";
import theme from "../../../../../theme/Themes";

export const BooksContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  // justify-content: center;

  @media ${theme.media.lg} {
    gap: 10px;
  }

  @media ${theme.media.md} {
    gap: 8px;
    justify-content: flex-start;
     flex-direction: column;
    align-items: center;
  }

  @media ${theme.media.sm} {
    flex-direction: column;
    align-items: center;
  }
`;

export const BookImage = styled.img`
  width: 120px;
  height: auto;
  border-radius: 5px;
  border: 1px solid ${theme.colors.inputborder};
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media ${theme.media.xl} {
    width: 110px;
  }

  @media ${theme.media.lg} {
    width: 100px;
  }

  @media ${theme.media.md} {
    width: 90px;
  }

  @media ${theme.media.sm} {
    width: 80px;
  }

  @media ${theme.media.xs} {
    width: 70px;
  }
`;
