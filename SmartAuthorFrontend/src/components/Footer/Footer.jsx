import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import { FaFacebook, FaInstagram, FaLinkedin  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FooterContainer, FooterContent, FooterLeft, SocialIcons, FooterRight, Copyright } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
        <hr className="footer-hr" />
      <FooterContent>
        <FooterLeft>
          <Link to="/faq">FAQ</Link>
          <Link to="/search-guide">Search Guide</Link>
        </FooterLeft>

        <SocialIcons>
          <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
          </Link>
          <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter />
          </Link>
          <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </Link>
          <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin  />
          </Link>
        </SocialIcons>

        <FooterRight>
          <Copyright>
            Copyright © YYYY - YYYY Company name. All rights reserved
          </Copyright>
        </FooterRight>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
