import styled from 'styled-components';
import theme from '../../../../../theme/Themes';

export const SingleBookContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.white};
  width: 100%;
  margin: auto;
  padding: 20px;
`;

// Scrollable Section for Book Details & Pages
export const ScrollableSection = styled.div`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
  padding: 20px;
  margin: -20px;
  background: ${theme.colors.BackgroundGradient};
`;

// Book Details
export const BookTitle = styled.h2`
  font-size: ${theme.font.size.xlarge};
  color: ${theme.colors.white};
  margin-bottom: 8px;
  text-align: left;
`;

export const SubTitle = styled.h3`
  font-size: ${theme.font.size.large};
  color: ${theme.colors.white};
  margin-bottom: 12px;
  text-align: left;
`;

export const AboutAuthor = styled.p`
  font-size: ${theme.font.size.medium};
  color: ${theme.colors.white};
  margin-bottom: 15px;
  text-align: left;
  line-height: 1.5;
`;

export const DownloadButton = styled.button`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.black};
  padding: 12px 24px;
  border: none;
  border-radius: 20px;
  font-size: ${theme.font.size.medium};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-align: center;
  font-weight: bold;
  margin-bottom: 15px;

  &:hover {
    background-color: ${theme.colors.primaryDark};
    transform: scale(1.05);
  }
`;

// Pages Display
export const PageContainer = styled.div`
  display: grid;
  /* grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); */
  gap: 20px;
  /* justify-content: center; */
  /* width: 100%; */
  padding: 20px;
  gap:10px;
  color: ${theme.colors.text};
`;

export const Page = styled.div`
  background-color: ${theme.colors.white};
  width: 200px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  padding: 12px;
  text-align: center;
`;

export const PageHeader = styled.h3`
  font-size: ${theme.font.size.large};
  color: ${theme.colors.header};
  margin-bottom: 10px;
`;

export const Content = styled.div`
  font-size: ${theme.font.size.medium};
  color: ${theme.colors.gray};
  text-align: center;
  line-height: 1.4;
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
  padding: 12px 24px;
  background-color: ${theme.colors.blue};
  color: ${theme.colors.white};
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: ${theme.font.size.medium};
  font-weight: bold;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${theme.colors.blue2};
    transform: scale(1.05);
  }

  &:disabled {
    background-color: ${theme.colors.gray2};
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
