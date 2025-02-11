import styled from 'styled-components';
import theme from '../../../../../theme/Themes';

export const SingleBookContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // padding: 20px;
  background-color: ${theme.colors.white};
  width: 100%;
  margin: auto;
`;

// Merged Scrollable Section for Book Details & Pages
export const ScrollableSection = styled.div`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  padding: 20px;
  margin: -20px;
  background: ${theme.colors.BackgroundGradient};
  // text-align: center;
`;

// Book Details
export const BookTitle = styled.h2`
  font-size: ${theme.font.size.xlarge};
  color: ${theme.colors.white};
  margin-bottom: 5px;
  text-align: start;
`;

export const SubTitle = styled.h3`
  font-size: ${theme.font.size.large};
  color: ${theme.colors.white};
  margin-bottom: 10px;
  text-align: start;

`;

export const AboutAuthor = styled.p`
  font-size: ${theme.font.size.medium};
  color: ${theme.colors.white};
  margin-bottom: 10px;
  text-align: start;

`;

export const DownloadButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.black};
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: ${theme.font.size.medium};
  cursor: pointer;
  transition: 0.3s;
  // margin-bottom: 20px;
  text-align: center;


  &:hover {
    background-color: ${theme.colors.primaryDark};
  }
`;

// Pages Display
export const PageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  justify-content: center;
  color: ${theme.colors.text};
  width: 100%;
  padding: 20px;
`;

export const Page = styled.div`
  background-color: ${theme.colors.white};
  width: 180px;
  height: 260px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  text-align: center;
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

// Page Navigation
export const PageNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  width: 100%;
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
