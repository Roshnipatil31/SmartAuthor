
import styled from 'styled-components';
import theme from '../../../../../theme/Themes';

export const SingleBookContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${theme.colors.white};
`;

export const Page = styled.div`
  margin-bottom: 20px;
`;

export const PageHeader = styled.h3`
  font-size: ${theme.font.size.large};
  color: ${theme.colors.header};
`;

export const Content = styled.div`
  margin-top: 20px;
  font-size: ${theme.font.size.medium};
  color: ${theme.colors.gray};
`;

export const PageNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

export const NavigationButton = styled.button`
  padding: 10px 20px;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${theme.colors.blue2};
  }

  &:disabled {
    background-color: ${theme.colors.gray2};
    cursor: not-allowed;
  }
`;
