import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const Container = styled.div`
  margin: auto;
  // padding: 10px;
 width: auto;

  // .circle1 {
  // width: 40%;  
  // height: 60%;  
  //  border-radius: 50%;
  // background: #26507333;
  // position: fixed;
  // z-index: 1;
  // right: 0;
  // top: 15%;
  // left: 65%;
  // }
  // .circle2{
  // width: 10%;   
  // height: 15%;  
  // background:rgba(204, 209, 213, 0.27);
  // border-radius: 50%;
  // position: fixed;
  // z-index: 3;
  // top: 75%;
  // left: 35%;
  // }

  // .circle3{
  // width: 40%;   
  // height: 80%;  
  // background: #26507333;
  // border-radius: 50%;
  // position: fixed;
  // z-index: 1;
  // right: 60%;
  // top: 75%;
  // }
`;

export const QuestionTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  font-family:${theme.font.family};
  text-align: center;
  margin:0;
  padding: 0px 0px 20px 0px;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-family:${theme.font.family};
  color: ${theme.colors.b};
`;

export const Option = styled.div`
  width: 70%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin: 10px;
  margin-left: 30px;
  background: #EFEAD342;

  span {
    font-weight: bold;
    margin-right: 10px;
  }

  &:hover {
    background: #eef5ff;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: space-between;  
  width: 90%;
  
  .prevbut {
    background: #8DA1AD;
    font-family:${theme.font.family};
    font-size: 15px;
    color: ${theme.colors.white};
    border: none;
    padding: 0px;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 15px;
    font-weight: 500;
    width: 30%;

     &:disabled {
    cursor: not-allowed;
  }
    }

    .nextbut {
    background: ${theme.colors.navy};
    color: ${theme.colors.white};
    font-family:${theme.font.family};
    font-size: 15px;
    font-weight: 500;
    border: none;
    padding: 10px 10px;
    border-radius: 5px;
    margin: 10px 15%;
    cursor: pointer;
    width: 30%;
    }
`;

export const Button = styled.button`
  background: ${theme.colors.navy};
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 14px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
  /* opacity:; */
  background: ${theme.colors.navy};

`;

export const Questionfooter = styled.div`
  margin-top: 30px;
  font-size: 14px;
  font-family:${theme.font.family};
  color: gray;
  display: flex;
  justify-content: flex-end;
  align-items: center;
//   width: 20%;

  .submitbut{
    background: ${theme.colors.navy};
    color: ${theme.colors.white};
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    font-weight: 600;
    width: 15%;
    margin: 5px 40px;

    &:disabled {
      cursor: not-allowed;
  }
}
`;
