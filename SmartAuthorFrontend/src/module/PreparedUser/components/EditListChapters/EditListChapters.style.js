import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const SidebarContainer = styled.div`
  width: 250px;
  height: 80vh;
  padding: 15px;
  background-color: ${theme.colors.white};
  border-right: 1px solid ${theme.colors.inputborder};
`;

export const UserName = styled.h3`
  font-size: 18px;
  margin-bottom: 15px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;

export const StyledButton = styled.button`
  padding: 5px 10px;
  border: 1px dashed ${theme.colors.inputborder};
  background: transparent;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
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
`;

export const Item = styled.div`
  font-size: ${theme.font.size.small};
  margin: 5px 0;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
`;

export const Tag = styled.div`
  background-color:${theme.colors.navy};
  color: ${theme.colors.white};
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;
