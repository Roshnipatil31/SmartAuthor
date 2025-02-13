import styled from "styled-components";
import theme from "../../../../../theme/Themes";

export const EditListChaptersWapper = styled.div`
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1111;
  }

  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 50%;
    height: 80vh;
    position: relative;

    @media (max-width: 576px) {
      min-width: 300px;
      height: 105vh;
    }

    .circle1 {
      width: 40%;
      height: 60%;
      border-radius: 50%;
      background: #26507333;
      position: fixed;
      z-index: 1;
      right: 0;
      top: 15%;
      left: 65%;
    }
    .circle2 {
      width: 10%;
      height: 15%;
      background: rgba(204, 209, 213, 0.27);
      border-radius: 50%;
      position: fixed;
      z-index: 3;
      top: 75%;
      left: 35%;
    }

    .circle3 {
      width: 40%;
      height: 80%;
      background: #26507333;
      border-radius: 50%;
      position: fixed;
      z-index: 1;
      right: 60%;
      top: 75%;
    }
  }

  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: ${theme.font.size.xlarge};
    background: ${theme.colors.transparnt};
    color: ${theme.colors.inputborder};
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
`;

export const SidebarContainer = styled.div`
 width: 250px;
  height: 87vh;
  padding: 15px;
  /* margin: 0px 0px 10px 10px; */
  background-color: ${theme.colors.white};
  /* border-right: 1px solid ${theme.colors.inputborder}; */
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
    width: 250px;
    height: 100vh;
  }

  
`;

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  z-index: 999;
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
    align-items: anchor-center;
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
  gap: 20px;
  /* justify-content: space-between; */
  cursor: pointer;
  margin-bottom: 20px;
`;

export const Item = styled.div`
  font-size: ${theme.font.size.small};
  margin: 20px 0 20px 20px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 5px;
`;

export const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  position: absolute;
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
  cursor: pointer;
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  margin-right: 5px;
`;
