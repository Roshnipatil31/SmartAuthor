// import React from "react";
// import AboutAuthorComponent from "../../Components/AboutAuthorComponent/AboutAuthorComponent";
// import { AboutContainer } from "./AboutAuthor.styles";

// const AboutAuthor = () => {
//   return (
//     <AboutContainer>
//       <AboutAuthorComponent />
//     </AboutContainer>
//   );
// };

// export default AboutAuthor;


import React from "react";
import AboutAuthorComponent from "../../Components/AboutAuthorComponent/AboutAuthorComponent";
import { AboutContainer, BackgroundOverlay } from "./AboutAuthor.styles";

const AboutAuthor = () => {
  return (
    <AboutContainer>
      <BackgroundOverlay />
      <AboutAuthorComponent />
    </AboutContainer>
  );
};

export default AboutAuthor;
