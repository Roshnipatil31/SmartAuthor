// import styled from "styled-components";
// import theme from "../../../../theme/Themes";
// import AuthorBackground from "../../../../assets/AuthorBackground.jpg";

// export const AboutContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 50px;
//   background: url(${AuthorBackground}) no-repeat center center;
//   background-size: cover;
//   min-height: 100vh;
  
//   @media ${theme.media.md} {
//     padding: 30px;
//   }
// `;


import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px;
//   min-height: 100vh;
  position: relative;

  @media ${theme.media.md} {
    padding: 30px;
  }
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
//   background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);
  z-index: 1;
`;
