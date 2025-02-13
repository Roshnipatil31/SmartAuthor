// import styled from "styled-components";
// import theme from "../../../../../theme/Themes";

// export const BookCoverGenarateWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   width: 50%;
//   padding: 20px;
//   height: 100vh;
//   position: relative;
//   /* background: ${theme.colors.white}; */
//   border-radius: 12px;
//   /* box-shadow: 0px 4px 6px ${theme.colors.lightblur}; */
// `;

// export const BookCoverGenarateButton = styled.div`
//   display: flex;
//   position: absolute;
//   bottom: 20px;
//   gap: 20px;

//   .AiGenerate {
//     font-size: ${theme.font.size.small};
//     font-weight: bold;
//     color: ${theme.colors.white};
//     background: ${theme.colors.buttonGradient};
//     padding: 10px;
//     border: none;
//     border-radius: 50px;
//   }

//   .nextBtn {
//     font-size: ${theme.font.size.small};
//     font-weight: bold;
//     color: ${theme.colors.white};
//     background: ${theme.colors.navy};
//     padding: 10px;
//     border: none;
//     border-radius: 50px;
//   }

//   .expertDesign {
//     font-size: ${theme.font.size.small};
//     font-weight: bold;
//     color: ${theme.colors.white};
//     background: ${theme.colors.navy};
//     padding: 10px;
//     border: none;
//     margin-left:30px;
//     border-radius: 50px;
//   }
// `;

import styled from "styled-components";
import theme from "../../../../../theme/Themes";

export const BookCoverGenarateWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
  background: ${theme.colors.white};
  border-radius: 12px; */

     display: flex;
   flex-direction: column;
   gap: 20px;
   width: 50%;
   padding: 20px;
   height: 100vh;
   position: relative;
   /* background: ${theme.colors.white}; */
   border-radius: 12px;
   /* box-shadow: 0px 4px 6px ${theme.colors.lightblur}; */
`;

export const BookCoverGenarateContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 20px;
  /* text-align: center; */
`;

export const BookCoverImage = styled.div`
  position: relative;
  display: flex;
  /* justify-content: center; */
  align-items: center;
`;

export const StaticCoverImage = styled.img`
    width: 60%;
    height: 100%;
    position: relative;
    float: left;
    z-index: 1;
`;

export const Title = styled.p`
    font-size: ${theme.font.size.xxlarge};
    font-weight: bold;
    color: ${theme.colors.black};
`;

export const DynamicImage = styled.img`
    width: 20%;
    height: 60%;
    position: absolute;
    top: 2.6rem;
    left: 12.6rem;
    z-index: 2;
    transform: skew(0deg, 3deg);
`;

export const ColorSelection = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
 margin-left:12rem;

  div {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

// export const BookCoverGenarateButton = styled.div`
//   display: flex;
//   gap: 20px;
//   margin-top: 20px;

//   button {
//     font-size: ${theme.font.size.small};
//     font-weight: bold;
//     color: ${theme.colors.white};
//     padding: 10px 20px;
//     border: none;
//     border-radius: 50px;
//     cursor: pointer;
//     transition: 0.3s;
//   }

//   .AiGenerate {
//     background: ${theme.colors.buttonGradient};
//   }

//   .nextBtn,
//   .expertDesign {
//     background: ${theme.colors.navy};
//   }

//   .nextBtn:hover,
//   .expertDesign:hover,
//   .AiGenerate:hover {
//     opacity: 0.8;
//   }
// `;

export const BookCoverGenarateButton = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  gap: 20px;
  margin-left: 20px;

  .AiGenerate {
    font-size: ${theme.font.size.small};
    font-weight: bold;
    color: ${theme.colors.white};
    background: ${theme.colors.buttonGradient};
    padding: 10px;
    border: none;
    border-radius: 50px;
  }

  .nextBtn {
    font-size: ${theme.font.size.small};
    font-weight: bold;
    color: ${theme.colors.white};
    background: ${theme.colors.navy};
    padding: 10px;
    border: none;
    border-radius: 50px;
  }

  .expertDesign {
    font-size: ${theme.font.size.small};
    font-weight: bold;
    color: ${theme.colors.white};
    background: ${theme.colors.navy};
    padding: 10px;
    border: none;
    margin-left:30px;
    border-radius: 50px;
  }
`;