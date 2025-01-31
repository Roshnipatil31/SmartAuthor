import styled from "styled-components";
import theme from "../../../../../theme/Themes";

export const BooksContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const BookImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 5px;
  border: 1px solid ${theme.colors.inputborder};

  &:hover {
    transform: scale(1.05);
    transition: 0.3s ease-in-out;
  }
`;
