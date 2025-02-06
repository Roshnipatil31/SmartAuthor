import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const Container = styled.div`
  margin: auto;
  padding: 10px;
 width: auto;

  .circle1 {
  width: 40%;  
  height: 60%;  
   border-radius: 50%;
  background: #26507333;
  position: fixed;
  z-index: -1;
  right: 0;
  top: 20%;
  left: 80%;
  }
  .circle2{
  width: 10%;   
  height: 20%;  
  background:rgba(204, 209, 213, 0.27);
  border-radius: 50%;
  position: fixed;
  z-index: -1;
  top: 80%;
  left: 20%;
  }

  .circle3{
  width: 40%;   
  height: 80%;  
  background: #26507333;
  border-radius: 50%;
  position: fixed;
  z-index: -1;
  right: 70%;
  top: 80%;
  }

`;

export const QuestionTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  font-family:${theme.font.family};
  text-align: center;
  margin:0;
  padding: 10px 0px 40px 0px;
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
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin: 10px 0;
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
  margin: 20px 0;
  justify-content: space-between;  
  width: 60%;
  

  .prevbut {
    background: #8DA1AD;
    font-family:${theme.font.family};
    font-size: 16px;
    color: ${theme.colors.white};
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    cursor: pointer;
    margin: 10px 25px;
    font-weight: 500;
    width: 20%;

     &:disabled {
    cursor: not-allowed;
  }
    }

    .nextbut {
    background: ${theme.colors.navy};
    color: ${theme.colors.white};
    font-family:${theme.font.family};
    font-size: 16px;
    font-weight: 500;
    border: none;
    padding: 10px 15px;
    border-radius: 5px;
    margin: 10px 65px;
    cursor: pointer;
    width: 20%;
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
