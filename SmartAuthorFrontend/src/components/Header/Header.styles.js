import styled from "styled-components";
import { NavLink } from "react-router-dom";
import theme from "../../theme/Themes";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: ${theme.colors.white}; 
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 55px;
  margin-right: 20px;

  @media ${theme.media.md} {
    gap: 30px;
  }
`;

export const NavItem = styled.div``;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: ${theme.font.size.medium};
  font-family: ${theme.font.family};
  color: ${(props) => (props.isActive ? theme.colors.navy : theme.colors.black)};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  position: relative;
  padding-bottom: 2px;  /* Reduced spacing between text and underline */
  cursor: pointer;

  &.active {
    color: ${theme.colors.navy};
    font-weight: bold;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;  /* Adjust this value to move underline closer */
    width: ${(props) => (props.isActive ? "100%" : "0%")};
    height: 2px;
    background-color: ${theme.colors.navy};
  }
`;

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
