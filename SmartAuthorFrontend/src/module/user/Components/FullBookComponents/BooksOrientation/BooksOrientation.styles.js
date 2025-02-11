import styled from 'styled-components';
import theme from '../../../../../theme/Themes';
import { Button } from '../../../Pages/FullBook/FullBook.styles';

export const OrientationContainer = styled.div`
  padding: 15px;
  font-family: ${theme.font.family};
`;

export const Title = styled.h2`
  font-size: ${theme.font.size.xlarge};
  color: ${theme.colors.header};
`;

export const Select = styled.select`
  padding: 8px;
  margin: 5px;
  border-radius: 4px;
  width: 100px;
  border: 1px solid ${theme.colors.inputborder};
  background-color: ${theme.colors.dropdownBg};
  color: ${theme.colors.white};
`;

export const DeviceContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  // align-items: center;
  justify-content: space-between;


`;
export const Orientation = styled.div`   
// gap: 10px;

`;
export const ViewPageContainer = styled.div`
  margin-top: 20px;
`;

export const ViewPageOption = styled.div`
  display: inline-block;
  width: 60px; /* Adjusted width to accommodate icons */
  height: 60px; /* Adjusted height to accommodate icons */
  margin-right: 10px;
  cursor: pointer;
  text-align: center; /* Centering the icon inside the box */
  line-height: 60px; /* Vertically center the icon */
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background-color: ${theme.colors.blue1};
  }

  svg {
    width: 30px; /* Icon size */
    height: 30px; /* Icon size */
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
  background-color: ${theme.colors.white};
  color: ${theme.colors.navy};
  border: 1px dashed ${theme.colors.navy};
  margin-top: 20px;
  width: 236px;
  border-radius: 10px;

  &:hover {
    background-color: ${theme.colors.blue1};
  }
`;

export const ContentsHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  font-size: ${theme.font.size.large};
  color: ${theme.colors.text};
  margin-bottom: 10px;

  &:hover {
    color: ${theme.colors.navy};
  }
`;
