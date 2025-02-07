import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const Container = styled.div`
  padding: 20px;

  h2 {
    color: ${theme.colors.navy};
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NewBookButton = styled.button`
  background-color: ${theme.colors.navy};
  color: ${theme.colors.white};
  border: none;
  padding: 10px 15px;
  font-family: ${theme.font.family};
  font-size: ${theme.font.size.medium};
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: ${theme.colors.blue};
  }
`;
