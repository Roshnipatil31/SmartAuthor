import React from "react";
import {
  AboutWrapper,
  ProfileImage,
  AuthorInfo,
  AuthorTitle,
  AuthorDescription,
  ImageText,
} from "./AboutAuthorComponent.styles";
import dp from "../../../../assets/Author.png";

const AboutAuthorComponent = () => {
  return (
    <AboutWrapper>
      <AuthorInfo>
        <AuthorTitle> <span>ABOUT</span>  <br /> <span>SNEHA GADKAR</span> </AuthorTitle>
        <ImageText >
          <div>
      <ProfileImage src={dp} alt="Sneha Gadkar" />

          </div>
          <div>
          <AuthorDescription>
          Sneha is a versatile UI/UX Designer and passionate dance artist who
          brings creativity and empathy to each project she undertakes. With a
          background in crafting intuitive, user-centered designs, Sneha has a
          unique approach to bridging functionality with aesthetic appeal. She's
          currently focused on building accessible, life-enhancing solutions.
        </AuthorDescription>
        <AuthorDescription>
          Her passion for inclusivity and exploration extends beyond design into
          her personal pursuits, making her work a reflection of her values and
          creativity.
        </AuthorDescription>
        <AuthorDescription>Currently Working in Digi9.</AuthorDescription>
          </div>
        </ImageText>

       
      </AuthorInfo>
    </AboutWrapper>
  );
};

export default AboutAuthorComponent;
