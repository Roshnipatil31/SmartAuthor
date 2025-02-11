import styled from 'styled-components';
import theme from '../../../../theme/Themes';

export const FullBookContainer = styled.div`
  display: flex;
  background-color: ${theme.colors.white};
  min-height: 100vh;
`;

export const LeftSide = styled.div`
  width: 20%;
  padding: 10px;
  background-color: ${theme.colors.white};
  
  @media ${theme.media.md} {
    width: 30%;
  }
  
  @media ${theme.media.sm} {
    width: 40%;
  }
`;

export const RightSide = styled.div`
  width: 80%;
  padding: 20px;
//   background-color: ${theme.colors.gray2};
  
  @media ${theme.media.md} {
    width: 70%;
  }
  
  @media ${theme.media.sm} {
    width: 60%;
  }
`;

export const Button = styled.button`
  cursor: pointer;
  background: ${theme.colors.blue};
  color: ${theme.colors.white};
  padding: 10px;
  border: none;
  border-radius: 5px;
  
  &:hover {
    background: ${theme.colors.blue2};
  }
`;
