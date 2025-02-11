import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const SidebarContainer = styled.div`
  width: 250px;
  height: 87vh;
  padding: 15px;
  background-color: ${theme.colors.white};
  border-right: 1px solid ${theme.colors.inputborder};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;

  &.open {
    transform: translateX(0);
  }

  @media (min-width: 990px) {
    transform: translateX(0);
    position: relative;
  }

  @media ${theme.media.lg} {
    height: 100vh;
  }
`;

export const SidebarOverlay = styled.div`
  display: none;

  @media (min-width: 990px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    z-index: 999;
  }
`;

export const HamburgerButton = styled.button`
  position: absolute;
  top: 95px;
  left: 1rem;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.inputborder};
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  z-index: 979;

  @media (min-width: 990px) {
    display: none;
  }
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

  @media ${theme.media.lg} {
    flex-direction: column;
    align-items: center;
  }
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
  position: fixed;
  bottom: 40px;

  @media ${theme.media.lg} {
    flex-direction: column;
    bottom: 70px;
  }
`;

export const Tag = styled.button`
  background-color: ${theme.colors.navy};
  color: ${theme.colors.white};
  border: none;
  padding: 10px;
  border-radius: 20px;
  font-size: 12px;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;
