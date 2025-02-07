import styled from "styled-components";
import theme from "../../../../theme/Themes";
import AuthorBackground from "../../../../assets/AuthorBackground.jpg"; // Import background for title

export const AboutWrapper = styled.div`
  background: ${theme.colors.white};
  // padding: 30px;
  margin-top: 0px;
  // border-radius: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid ${theme.colors.lightblur};
  position: relative;
  z-index: 2;
  margin-bottom: 20px;

  @media ${theme.media.md} {
    flex-direction: column;
    text-align: center;
  }
`;

export const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  // border-radius: 10px;
  // object-fit: cover;
  margin-right: 30px;
  margin-left: 50px;
  // border: 5px solid ${theme.colors.blue};
  z-index: 1;
  margin-top: -40px;

  @media ${theme.media.md} {
    width: 180px;
    height: 180px;
    margin-bottom: 20px;
  margin-top: 0px;
  }
`;

export const ImageText = styled.div`
  display: flex;
  @media ${theme.media.md} {
    display: flex;
    flex-direction: column; 
  }
`;

export const AuthorInfo = styled.div`
  // padding: 20px;
  margin-bottom: 120px;

`;

export const AuthorTitle = styled.h2`
  font-size: ${theme.font.size.xxlarge};
  // font-family: ${theme.font.Headerfamily};
  font-weight: bold;
  color: ${theme.colors.white};
  margin-bottom: 10px;
  line-height: 1.2;
  padding: 20px;
  background: url(${AuthorBackground}) no-repeat center center;
  background-size: cover;
  text-align: center;

  @media ${theme.media.md} {
    font-size: ${theme.font.size.xlarge};
  }
`;

export const AuthorDescription = styled.p`
  font-size: ${theme.font.size.large};
  line-height: 1.6;
  // color: ${theme.colors.gray};
  font-family: ${theme.font.black};
  margin-bottom: 10px;
  width: 90%;

  @media ${theme.media.md} {
    font-size: ${theme.font.size.small};
  }
`;
