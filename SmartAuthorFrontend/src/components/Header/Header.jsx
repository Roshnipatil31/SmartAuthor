import React, { useState } from "react";
import { Nav, Logo, NavMenu, NavItem, NavLink, ProfileImage, NavContainer } from "./Header.styles";
import LogoImage from "../../assets/logo.png";  // Adjust path based on your folder structure
import ProfilePic from "../../assets/profile.png"; // Adjust accordingly

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <Nav>
      <Logo src={LogoImage} alt="Logo" />
      <NavContainer>
        <NavMenu>
          <NavItem>
            <NavLink href="#" isActive={activeTab === "Home"} onClick={() => setActiveTab("Home")}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" isActive={activeTab === "My Books"} onClick={() => setActiveTab("My Books")}>
              My Books
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" isActive={activeTab === "Library"} onClick={() => setActiveTab("Library")}>
              Library
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" isActive={activeTab === "Contact US"} onClick={() => setActiveTab("Contact US")}>
              Contact US
            </NavLink>
          </NavItem>
        </NavMenu>
        <ProfileImage src={ProfilePic} alt="Profile" />
      </NavContainer>
    </Nav>
  );
};

export default Header;
