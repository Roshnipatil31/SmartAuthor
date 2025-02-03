// import React from "react";
// import {
//   AboutCard,
//   ProfileImage,
//   AuthorInfo,
//   AuthorTitle,
//   AuthorDescription,
// } from "./AboutAuthorComponent.styles";
// import dp from "../../../../assets/Author.png";

// const AboutAuthorComponent = () => {
//   return (
//     <AboutCard>
//       <ProfileImage src={dp} alt="Sneha Gadkar" />
//       <AuthorInfo>
//         <AuthorTitle>ABOUT SNEHA GADKAR</AuthorTitle>
//         <AuthorDescription>
//           Sneha is a versatile UI/UX Designer and passionate dance artist who
//           brings creativity and empathy to each project she undertakes. With a
//           background in crafting intuitive, user-centered designs, Sneha has a
//           unique approach to bridging functionality with aesthetic appeal. She's
//           currently focused on building accessible, life-enhancing solutions.
//         </AuthorDescription>
//         <AuthorDescription>
//           Her passion for inclusivity and exploration extends beyond design into
//           her personal pursuits, making her work a reflection of her values and
//           creativity.
//         </AuthorDescription>
//         <AuthorDescription>Currently Working in Digi9.</AuthorDescription>
//       </AuthorInfo>
//     </AboutCard>
//   );
// };

// export default AboutAuthorComponent;




import React from "react";
import {
  AboutWrapper,
  ProfileImage,
  AuthorInfo,
  AuthorTitle,
  AuthorDescription,
} from "./AboutAuthorComponent.styles";
import dp from "../../../../assets/Author.png";

const AboutAuthorComponent = () => {
  return (
    <AboutWrapper>
      <ProfileImage src={dp} alt="Sneha Gadkar" />
      <AuthorInfo>
        <AuthorTitle>ABOUT <br /> SNEHA GADKAR</AuthorTitle>
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
      </AuthorInfo>
    </AboutWrapper>
  );
};

export default AboutAuthorComponent;
