import styled from "styled-components";
import theme from "../../theme/Themes"; // Import theme.js directly

export const FooterContainer = styled.footer`
  background: ${theme.colors.previewBg}; 
  padding: 15px 40px;
  text-align: center;
  font-family: ${theme.font.family};
  color: ${theme.colors.header};

  @media ${theme.media.md} {
    padding: 15px 20px;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
//   max-width: 1200px;
  margin: 0 auto;

  @media ${theme.media.sm} {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
  }
`;

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;

  a {
    text-decoration: none;
    font-size: ${theme.font.size.medium};
    color: ${theme.colors.header};
    font-weight: 500;
  }

  a:hover {
    text-decoration: underline;
    color: ${theme.colors.blue};
  }

  @media ${theme.media.sm} {
    align-items: center;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 20px;
  margin-top: 20px;

  a {
    color: ${theme.colors.header};
    font-size: ${theme.font.size.large};
    transition: color 0.3s ease-in-out;
  }

  a:hover {
    color: ${theme.colors.blue};
  }

  @media ${theme.media.sm} {
    gap: 10px;
  }
`;

export const FooterRight = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-grow: 1;
  margin-top: 20px;


  @media ${theme.media.sm} {
    justify-content: center;
  }
`;

export const Copyright = styled.p`
  font-size: ${theme.font.size.small};
  color: ${theme.colors.blur};
  margin: 0;

  @media ${theme.media.sm} {
    font-size: ${theme.font.size.xsmall};
    text-align: center;
  }
`;
