import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const SidebarContainer = styled.div`
  width: 250px;
  height: 85vh;
  padding: 15px;
  margin: 0px 0px 10px 10px;
  background-color: ${theme.colors.white};
  border-right: 1px solid ${theme.colors.inputborder};
  /* position: relative; */
`;

export const UserName = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  justify-content: space-around;
`;

export const StyledButton = styled.button`
  padding: 5px 10px;
  border: 1px dashed ${theme.colors.inputborder};
  background: transparent;
  cursor: pointer;
  font-size: ${theme.font.size.small};
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EditCoverButton = styled.button`
  width: 100%;
  padding: 8px;
  border: 1px dashed ${theme.colors.blue};
  background: ${theme.colors.transparnt};
  color: ${theme.colors.blue};
  font-size: ${theme.font.size.small};
  cursor: pointer;
  border-radius: 5px;
`;

export const Section = styled.div`
  margin-top: 10px;
  padding-left: 10px;
`;

export const SectionTitle = styled.div`
  font-size: ${theme.font.size.small};
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const Item = styled.div`
  font-size: ${theme.font.size.small};
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  position: absolute;
  bottom: 0px;
`;

export const Tag = styled.button`
  background-color:${theme.colors.navy};
  color: ${theme.colors.white};
  border: none;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 10px;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;
