// import styled from "styled-components";
// import theme from "../../../../theme/Themes";

// export const AboutCard = styled.div`
//   background: ${theme.colors.white};
//   padding: 30px;
//   border-radius: 12px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   text-align: center;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   max-width: 700px;
//   backdrop-filter: blur(10px);
//   border: 1px solid ${theme.colors.lightblur};

//   @media ${theme.media.md} {
//     padding: 20px;
//   }
// `;

// export const ProfileImage = styled.img`
//   width: 170px;
//   height: 170px;
//   border-radius: 50%;
//   object-fit: cover;
//   margin-bottom: 20px;
//   border: 5px solid ${theme.colors.blue};

//   @media ${theme.media.md} {
//     width: 140px;
//     height: 140px;
//   }
// `;

// export const AuthorInfo = styled.div`
//   padding: 20px;
// `;

// export const AuthorTitle = styled.h2`
//   font-size: ${theme.font.size.xxlarge};
//   font-family: ${theme.font.Headerfamily};
//   font-weight: bold;
//   color: ${theme.colors.header};
//   margin-bottom: 10px;

//   @media ${theme.media.md} {
//     font-size: ${theme.font.size.xlarge};
//   }
// `;

// export const AuthorDescription = styled.p`
//   font-size: ${theme.font.size.medium};
//   line-height: 1.6;
//   color: ${theme.colors.gray};
//   font-family: ${theme.font.family};
//   margin-bottom: 10px;

//   @media ${theme.media.md} {
//     font-size: ${theme.font.size.small};
//   }
// `;







// import styled from "styled-components";
// import theme from "../../../../theme/Themes";

// export const AboutWrapper = styled.div`
//   background: ${theme.colors.white};
//   padding: 30px;
//   border-radius: 12px;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   text-align: left;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   max-width: 1000px;
//   backdrop-filter: blur(10px);
//   border: 1px solid ${theme.colors.lightblur};
//   position: relative;
//   z-index: 2;

//   @media ${theme.media.md} {
//     flex-direction: column;
//     text-align: center;
//   }
// `;

// export const ProfileImage = styled.img`
//   width: 250px;
//   height: 250px;
//   border-radius: 10px;
//   object-fit: cover;
//   margin-right: 30px;
//   border: 5px solid ${theme.colors.blue};

//   @media ${theme.media.md} {
//     width: 180px;
//     height: 180px;
//     margin-bottom: 20px;
//   }
// `;

// export const AuthorInfo = styled.div`
//   padding: 20px;
// `;

// export const AuthorTitle = styled.h2`
//   font-size: ${theme.font.size.xxlarge};
//   font-family: ${theme.font.Headerfamily};
//   font-weight: bold;
//   color: ${theme.colors.header};
//   margin-bottom: 10px;
//   line-height: 1.2;

//   @media ${theme.media.md} {
//     font-size: ${theme.font.size.xlarge};
//   }
// `;

// export const AuthorDescription = styled.p`
//   font-size: ${theme.font.size.medium};
//   line-height: 1.6;
//   color: ${theme.colors.gray};
//   font-family: ${theme.font.family};
//   margin-bottom: 10px;

//   @media ${theme.media.md} {
//     font-size: ${theme.font.size.small};
//   }
// `;













import styled from "styled-components";
import theme from "../../../../theme/Themes";
import AuthorBackground from "../../../../assets/AuthorBackground.jpg";  // Import background for title

export const AboutWrapper = styled.div`
  background: ${theme.colors.white};
  padding: 30px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.lightblur};
  position: relative;
  z-index: 2;

  @media ${theme.media.md} {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
  margin-right: 30px;
  border: 5px solid ${theme.colors.blue};

  @media ${theme.media.md} {
    width: 180px;
    height: 180px;
    margin-bottom: 20px;
  }
`;

export const AuthorInfo = styled.div`
  padding: 20px;
`;

export const AuthorTitle = styled.h2`
  font-size: ${theme.font.size.xxlarge};
  font-family: ${theme.font.Headerfamily};
  font-weight: bold;
  color: ${theme.colors.white};
  margin-bottom: 10px;
  line-height: 1.2;
  padding: 20px;
  background: url(${AuthorBackground}) no-repeat center center;
  background-size: cover;

  @media ${theme.media.md} {
    font-size: ${theme.font.size.xlarge};
  }
`;

export const AuthorDescription = styled.p`
  font-size: ${theme.font.size.medium};
  line-height: 1.6;
  color: ${theme.colors.gray};
  font-family: ${theme.font.family};
  margin-bottom: 10px;

  @media ${theme.media.md} {
    font-size: ${theme.font.size.small};
  }
`;
