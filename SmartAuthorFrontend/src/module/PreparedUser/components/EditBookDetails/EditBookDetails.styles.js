import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// export const ModalContainer = styled.div`
//   background: ${theme.colors.previewBg};
//   padding: 30px;
//   border-radius: 12px;
//   max-width: 850px;
//   width: 90%;
//   box-shadow: 0 4px 10px ${theme.colors.lightblur};
//   position: relative;
//   animation: fadeIn 0.3s ease-in-out;

//   @media ${theme.media.md} {
//     max-width: 100%;
//     padding: 20px;
//   }
// `;


export const ModalContainer = styled.div`
  background: ${theme.colors.previewBg};
  padding: 30px;
  border-radius: 12px;
  max-width: 850px;
  width: 90%;
  box-shadow: 0 4px 10px ${theme.colors.lightblur};
  position: relative;
  animation: fadeIn 0.3s ease-in-out;
  max-height: 90vh; /* Makes modal scrollable */
  overflow-y: auto; /* Enables scrolling on smaller screens */

  @media ${theme.media.md} {
    max-width: 100%;
    padding: 20px;
  }

  @media ${theme.media.sm} {
    max-width: 100%;
    padding: 15px;
    overflow-y: auto; /* Enables scrolling on smaller screens */
  }

  @media ${theme.media.xs} {
    max-width: 100%;
    padding: 12px;
    overflow-y: auto; /* Enables scrolling on extra-small screens */
  }
`;



export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 24px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${theme.colors.gray};
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 20px;

  @media ${theme.media.md} {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

export const PreviewSection = styled.div`
  display: flex;
  flex-direction: column;

  @media ${theme.media.md} {
    // align-items: center;
    display: flex;
    flex-direction: row;
    gap: 50px;
  }
`;

// export const BookCover = styled.div`
//   img {
//     width: 230px;
//     height: 260px;
//     border-radius: 8px;
//   }
// `;

export const BookCover = styled.div`
  img {
    width: 280px;
    height: 320px;
    border-radius: 8px;
  }

  @media ${theme.media.md} {
    img {
      width: 230px;
    height: 260px;
    }
  }
  @media ${theme.media.sm} {
    img {
     width: 230px;
    height: 260px;
    }
  }

  @media ${theme.media.xs} {
    img {
     width: 230px;
    height: 260px;
    }
  }
`;


export const BookInfo = styled.div`
  margin-top: 10px;

  h2 {
    font-size: ${theme.font.size.xlarge};
    font-weight: bold;
    color: ${theme.colors.black};
  }
  p {
    margin: 5px 0;
    color: ${theme.colors.gray};
    font-size: ${theme.font.size.medium};
  }

    @media ${theme.media.md} {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

export const ChapterList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  max-width: 400px;

  @media ${theme.media.md} {
    // flex-direction: column;  
    // align-items: center;
    max-width: 100%;
  }
`;

// export const ChapterCard = styled.div`
//   background: ${theme.colors.white};
//   padding: 12px;
//   border-radius: 8px;
//   width: 100px;
//   box-shadow: 0 2px 6px ${theme.colors.lightblur};

//   h3 {
//     font-size: ${theme.font.size.medium};
//     font-weight: bold;
//     color: ${theme.colors.black};
//   }
//   p {
//     font-size: ${theme.font.size.small};
//     color: ${theme.colors.gray2};
//   }

//   @media ${theme.media.sm} {
//     width: 100%;
//   }
// `;



export const ChapterCard = styled.div`
  background: ${theme.colors.white};
  padding: 16px;
  border-radius: 8px;
  width: 150px; /* Increased card size */
  box-shadow: 0 2px 6px ${theme.colors.lightblur};

  h3 {
    font-size: ${theme.font.size.medium};
    font-weight: bold;
    color: ${theme.colors.black};
  }
  p {
    font-size: ${theme.font.size.small};
    color: ${theme.colors.gray2};
  }

  @media ${theme.media.md} {
    width: 150px; /* Larger cards for small screens */
  }

  @media ${theme.media.sm} {
    width: 180px; /* Larger cards for small screens */
  }

  @media ${theme.media.xs} {
    width: 200px; /* Larger cards for extra-small screens */
  }
`;


export const CardContainer = styled.div`
  position: relative;
  width: 115px;
  height: 110px;
  margin-left: -6px;
  margin-top: -10px;
`;

// export const Cardm = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 120%;
//   background-color: white;
//   border-radius: 8px;
//   display: flex;
//   align-items: center;
//   text-align: center;
//   font-weight: bold;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   opacity: 0.9;
//   transition: transform 0.3s ease, opacity 0.3s ease;

//   &:nth-child(2) {
//     z-index: 1;
//     left: -3px;
//   }

//   &:nth-child(3) {
//     z-index: 2;
//     left: -6px;
//   }

//   &:nth-child(4) {
//     z-index: 3;
//     left: -15px;
//   }
// `;





export const Cardm = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-left: -4px;
  width: 150%;
  height: 127%;
  margin-top: -5px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  align-items: center;
  // text-align: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
  transition: transform 0.3s ease, opacity 0.3s ease;

  &:nth-child(2) {
    z-index: 1;
    left: -3px;
  }

  &:nth-child(3) {
    z-index: 2;
    left: -6px;
  }

  &:nth-child(4) {
    z-index: 3;
    left: -15px;
  }

    @media ${theme.media.md} {
    height: 120%; 
  }


  @media ${theme.media.sm} {
    height: 120%; /* Adjust for small screens */
    width: 176%;
  }

  @media ${theme.media.xs} {
    height: 120%; /* Adjust for extra-small screens */
    width: 193%;

  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 80px;
  justify-content: center;
`;

export const ExportButton = styled.button`
  background: ${theme.colors.navy};
  color: ${theme.colors.white};
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: ${theme.font.size.small};
  width: 240px;
`;

export const EditButton = styled.button`
  background: ${theme.colors.transparent};
  color: ${theme.colors.navy};
  padding: 10px 15px;
  border: 1px solid ${theme.colors.navy};
  border-radius: 10px;
  cursor: pointer;
  font-size: ${theme.font.size.small};
  width: 140px;
`;

export const PreviewTitle = styled.h1`
  text-align: left;
  padding-left: 20px;
  color: ${theme.colors.navy};
  font-size: ${theme.font.size.xxlarge};
  font-family: ${theme.font.family};
  margin-bottom: 20px;
`;













// import styled from "styled-components";
// import theme from "../../../../theme/Themes";

// export const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.4);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 1000;
// `;

// export const ModalContainer = styled.div`
//   background: ${theme.colors.previewBg};
//   padding: 30px;
//   border-radius: 12px;
//   max-width: 850px;
//   width: 90%;
//   box-shadow: 0 4px 10px ${theme.colors.lightblur};
//   position: relative;
//   animation: fadeIn 0.3s ease-in-out;
//   max-height: 90vh;
//   overflow-y: auto; /* Makes modal scrollable */

//   @media ${theme.media.md} {
//     max-width: 100%;
//     padding: 20px;
//   }

//   @media ${theme.media.sm} {
//     max-width: 100%;
//     padding: 15px;
//     overflow-y: auto; /* Enables scrolling on smaller screens */
//   }

//   @media ${theme.media.xs} {
//     max-width: 100%;
//     padding: 12px;
//     overflow-y: auto; /* Enables scrolling on extra-small screens */
//   }
// `;

// export const CloseButton = styled.button`
//   position: absolute;
//   top: 10px;
//   right: 15px;
//   font-size: 24px;
//   border: none;
//   background: transparent;
//   cursor: pointer;
//   color: ${theme.colors.gray};
// `;

// export const ContentWrapper = styled.div`
//   display: flex;
//   gap: 30px;
//   margin-left: 20px;

//   @media ${theme.media.md} {
//     flex-direction: column;
//     gap: 20px;
//     align-items: center;
//   }
// `;

// export const PreviewSection = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// export const BookCover = styled.div`
//   img {
//     width: 280px; /* Increased size for small screens */
//     height: 320px; /* Increased size for small screens */
//     border-radius: 8px;
//   }

//   @media ${theme.media.sm} {
//     img {
//       width: 350px; /* Larger image for small screens */
//       height: 400px; /* Larger image for small screens */
//     }
//   }

//   @media ${theme.media.xs} {
//     img {
//       width: 400px; /* Larger image for extra-small screens */
//       height: 450px; /* Larger image for extra-small screens */
//     }
//   }
// `;

// export const BookInfo = styled.div`
//   margin-top: 10px;

//   h2 {
//     font-size: ${theme.font.size.xlarge};
//     font-weight: bold;
//     color: ${theme.colors.black};
//   }
//   p {
//     margin: 5px 0;
//     color: ${theme.colors.gray};
//     font-size: ${theme.font.size.medium};
//   }
// `;

// export const RightSection = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   flex-grow: 1;
// `;

// export const ChapterList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 12px;
//   justify-content: center;
//   max-width: 400px;

//   @media ${theme.media.md} {
//     flex-direction: column;
//     align-items: center;
//   }
// `;

// export const ChapterCard = styled.div`
//   background: ${theme.colors.white};
//   padding: 16px;
//   border-radius: 8px;
//   width: 120px; /* Increased card size */
//   box-shadow: 0 2px 6px ${theme.colors.lightblur};

//   h3 {
//     font-size: ${theme.font.size.medium};
//     font-weight: bold;
//     color: ${theme.colors.black};
//   }
//   p {
//     font-size: ${theme.font.size.small};
//     color: ${theme.colors.gray2};
//   }

//   @media ${theme.media.sm} {
//     width: 150px; /* Larger cards for small screens */
//   }

//   @media ${theme.media.xs} {
//     width: 180px; /* Larger cards for extra-small screens */
//   }
// `;

// export const CardContainer = styled.div`
//   position: relative;
//   width: 115px;
//   height: 110px;
//   margin-left: -6px;
//   margin-top: -10px;
// `;

// export const Cardm = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 120%;
//   background-color: white;
//   border-radius: 8px;
//   display: flex;
//   align-items: center;
//   text-align: center;
//   font-weight: bold;
//   box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
//   opacity: 0.9;
//   transition: transform 0.3s ease, opacity 0.3s ease;

//   &:nth-child(2) {
//     z-index: 1;
//     left: -3px;
//   }

//   &:nth-child(3) {
//     z-index: 2;
//     left: -6px;
//   }

//   &:nth-child(4) {
//     z-index: 3;
//     left: -15px;
//   }

//   @media ${theme.media.sm} {
//     height: 130%; /* Adjust for small screens */
//   }

//   @media ${theme.media.xs} {
//     height: 140%; /* Adjust for extra-small screens */
//   }
// `;

// export const ButtonsContainer = styled.div`
//   display: flex;
//   gap: 12px;
//   margin-top: 80px;
//   justify-content: center;
// `;

// export const ExportButton = styled.button`
//   background: ${theme.colors.navy};
//   color: ${theme.colors.white};
//   padding: 10px 15px;
//   border: none;
//   border-radius: 10px;
//   cursor: pointer;
//   font-size: ${theme.font.size.small};
//   width: 240px;
// `;

// export const EditButton = styled.button`
//   background: ${theme.colors.transparent};
//   color: ${theme.colors.navy};
//   padding: 10px 15px;
//   border: 1px solid ${theme.colors.navy};
//   border-radius: 10px;
//   cursor: pointer;
//   font-size: ${theme.font.size.small};
//   width: 140px;
// `;

// export const PreviewTitle = styled.h1`
//   text-align: left;
//   padding-left: 20px;
//   color: ${theme.colors.navy};
//   font-size: ${theme.font.size.xxlarge};
//   font-family: ${theme.font.family};
//   margin-bottom: 20px;
// `;




