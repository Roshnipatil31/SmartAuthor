import React, { useState } from "react";
import {
  Nav,
  Logo,
  NavMenu,
  NavItem,
  StyledNavLink,
  ProfileImage,
  NavContainer,
  Hamburger,
  MobileMenu,
} from "./Header.styles";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/logo.png";
import ProfilePic from "../../assets/profile.png";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Nav>
      <Link to="/dashboard" onClick={() => setActiveTab("Home")}>
        <Logo src={LogoImage} alt="Logo" />
      </Link>

      {/* Hamburger Menu Button (Visible only on sm: (max-width: 576px)) */}
      <Hamburger onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
        ☰
      </Hamburger>

      <NavContainer isOpen={isMobileMenuOpen}>
        <NavMenu>
          <NavItem>
            <StyledNavLink
              to="/dashboard"
              isActive={activeTab === "Home"}
              onClick={() => {
                setActiveTab("Home");
                setMobileMenuOpen(false);
              }}
            >
              Home
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink
              to="/my-books"
              isActive={activeTab === "My Books"}
              onClick={() => {
                setActiveTab("My Books");
                setMobileMenuOpen(false);
              }}
            >
              My Books
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink
              to="/library"
              isActive={activeTab === "Library"}
              onClick={() => {
                setActiveTab("Library");
                setMobileMenuOpen(false);
              }}
            >
              Library
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink
              to="/contact-us"
              isActive={activeTab === "Contact US"}
              onClick={() => {
                setActiveTab("Contact US");
                setMobileMenuOpen(false);
              }}
            >
              Contact US
            </StyledNavLink>
          </NavItem>
        </NavMenu>

        {/* Profile Image Clickable - Navigates to Profile Page */}
        <Link to="/profile">
          <ProfileImage src={ProfilePic} alt="Profile" />
        </Link>
      </NavContainer>

      {isMobileMenuOpen && (
        <MobileMenu>
          <NavItem>
            <StyledNavLink
              to="/dashboard"
              isActive={activeTab === "Home"}
              onClick={() => {
                setActiveTab("Home");
                setMobileMenuOpen(false);
              }}
            >
              Home
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink
              to="/my-books"
              isActive={activeTab === "My Books"}
              onClick={() => {
                setActiveTab("My Books");
                setMobileMenuOpen(false);
              }}
            >
              My Books
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink
              to="/library"
              isActive={activeTab === "Library"}
              onClick={() => {
                setActiveTab("Library");
                setMobileMenuOpen(false);
              }}
            >
              Library
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink
              to="/contact-us"
              isActive={activeTab === "Contact US"}
              onClick={() => {
                setActiveTab("Contact US");
                setMobileMenuOpen(false);
              }}
            >
              Contact US
            </StyledNavLink>
          </NavItem>
        </MobileMenu>
      )}
    </Nav>
  );
};

export default Header;
