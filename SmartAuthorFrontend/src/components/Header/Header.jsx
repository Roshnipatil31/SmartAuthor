import React, { useState } from "react";
import { Nav, Logo, NavMenu, NavItem, StyledNavLink, ProfileImage, NavContainer } from "./Header.styles";
import { Link } from "react-router-dom";  
import LogoImage from "../../assets/logo.png";
import ProfilePic from "../../assets/profile.png";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <Nav>
      <Logo src={LogoImage} alt="Logo" />
      <NavContainer>
        <NavMenu>
          <NavItem>
            <StyledNavLink to="/" isActive={activeTab === "Home"} onClick={() => setActiveTab("Home")}>
              Home
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/my-books" isActive={activeTab === "My Books"} onClick={() => setActiveTab("My Books")}>
              My Books
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/library" isActive={activeTab === "Library"} onClick={() => setActiveTab("Library")}>
              Library
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/contact-us" isActive={activeTab === "Contact US"} onClick={() => setActiveTab("Contact US")}>
              Contact US
            </StyledNavLink>
          </NavItem>
        </NavMenu>
        <ProfileImage src={ProfilePic} alt="Profile" />
      </NavContainer>
    </Nav>
  );
};

export default Header;
