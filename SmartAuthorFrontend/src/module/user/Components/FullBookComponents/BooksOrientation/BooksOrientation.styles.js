import styled from 'styled-components';
import theme from '../../../../../theme/Themes';
import { Button } from '../../../Pages/FullBook/FullBook.styles';  // Add this import

export const OrientationContainer = styled.div`
  padding: 15px;
  font-family: ${theme.font.family};
`;

export const Title = styled.h2`
  font-size: ${theme.font.size.xlarge};
  color: ${theme.colors.header};
`;

export const SubTitle = styled.h4`
  font-size: ${theme.font.size.medium};
  color: ${theme.colors.gray};
  margin-bottom: 15px;
`;

export const Select = styled.select`
  padding: 8px;
  margin: 5px;
  border-radius: 4px;
  border: 1px solid ${theme.colors.inputborder};
  background-color: ${theme.colors.inputbg};
  color: ${theme.colors.inputColor};
`;

export const DeviceContainer = styled.div`
  margin-bottom: 20px;
`;

export const ViewPageContainer = styled.div`
  margin-top: 20px;
`;

export const ViewPageOption = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 1px solid ${theme.colors.inputborder};
  margin-right: 10px;
  cursor: pointer;
  background-color: ${theme.colors.inputbg};
  
  &:hover {
    background-color: ${theme.colors.blue1};
  }
`;

export const ChapterList = styled.div`
  margin-top: 20px;
`;

export const Chapter = styled.div`
  cursor: pointer;
  padding: 8px;
  background-color: ${theme.colors.white};
  margin-bottom: 10px;
  border-radius: 4px;

  &:hover {
    background-color: ${theme.colors.blue1};
  }
`;

export const EditButton = styled(Button)`
  background-color: ${theme.colors.Green};
  margin-top: 20px;
  
  &:hover {
    background-color: ${theme.colors.Green};
  }
`;