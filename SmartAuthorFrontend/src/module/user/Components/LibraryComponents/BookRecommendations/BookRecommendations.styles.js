import styled from "styled-components";
import theme from "../../../../../theme/Themes"; // Adjust the path as needed

export const BookContainer = styled.div`
  display: flex;
  gap: 20px;

  @media ${theme.media.md} {
    flex-direction: column;
    align-items: center;
  }
`;

export const BookCard = styled.div`
  background: ${theme.colors.white};
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 4px 6px ${theme.colors.lightblur};
`;

export const BookImage = styled.img`
  width: 150px;
  height: 220px;
  border-radius: 5px;
`;

export const BookTitle = styled.h3`
  margin-top: 10px;
  font-size: ${theme.font.size.medium};
  color: ${theme.colors.header};
`;

export const BookAuthor = styled.p`
  font-size: ${theme.font.size.small};
  color: ${theme.colors.gray};
`;
