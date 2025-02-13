import styled from "styled-components";
import theme from "../../../../../theme/Themes";
import { Button } from "../../../Pages/FullBook/FullBook.styles";

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
  margin-top: -10px;
`;

export const DeviceContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: -20px;
   font-size: ${theme.font.size.small};
`;

export const Orientation = styled.div`
  gap: 10px;
   font-size: ${theme.font.size.small};
`;
export const ViewPageContainer = styled.div`
  margin-top: -10px;
`;

export const ViewPageOption = styled.div`
  display: inline-block;
  width: 60px;
  height: 60px;
  margin-right: 10px;
  cursor: pointer;
  text-align: center;
  line-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ selected }) => (selected ? theme.colors.blue1 : "transparent")};
  border-radius: 6px;
  
  &:hover {
    background-color: ${theme.colors.blue1};
  }

  svg {
    width: 35px;
    height: 35px;
  }
`;

export const ChapterList = styled.div`
  margin-top: 20px;
`;

export const Chapter = styled.div`
  cursor: pointer;
  padding: 8px;
  background-color: ${theme.colors.white};
  // margin-bottom: 10px;
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
  font-size: ${theme.font.size.small};

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
  margin-bottom: -15px;

  &:hover {
    color: ${theme.colors.navy};
  }
`;

export const SelectedIcon = styled.div`
  background-color: ${theme.colors.blue1};
  border-radius: 50%;
  padding: 5px;
`;