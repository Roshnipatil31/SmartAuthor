import styled from "styled-components";
import theme from "../../../../../theme/Themes"; // Adjust the path as needed

export const CategoryContainer = styled.div`
  display: flex;
  gap: 70px;
  margin-top: 10px;

  @media ${theme.media.md} {
    flex-direction: column;
    align-items: center;
  }
`;

export const CategoryCard = styled.div`
  text-align: center;
`;

export const CategoryImage = styled.img`
  width: 120px;
  height: 180px;
  border-radius: 5px;
`;

export const CategoryName = styled.p`
  margin-top: 5px;
  font-size: ${theme.font.size.small};
  font-weight: bold;
  color: ${theme.colors.header};
`;
