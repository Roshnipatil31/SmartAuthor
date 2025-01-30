import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
  background-color: white;
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
  margin-right: 20px; /* Adds space between menu and profile image */
`;

export const NavItem = styled.div``;

export const NavLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: ${(props) => (props.isActive ? "#265073" : "black")};
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  position: relative;
  padding-bottom: 5px;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: ${(props) => (props.isActive ? "100%" : "0%")};
    height: 2px;
    background-color: #2c3e50;
  }
`;

export const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  margin-left: 20px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
