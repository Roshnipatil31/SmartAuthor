import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: ${theme.colors.transparnt};
  width: auto;
  height: auto;
  gap: 50px;

    .buynow{
    display: flex;
    background: ${theme.colors.navy};
    color: ${theme.colors.white};
    border: none;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
    margin: 10px 5px;
    font-weight: bold;
    width: 100px;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: 50px;
    outline: none;

    @media (max-width: 480px) {
      width: 50%;
      margin: 0 auto;

    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    
  }
`;

export const Leftcontainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  
  padding-top: 20px;
  background: #F9F7EE;
  margin-top:25px;
  height: 70%;
//    width: 60%;
border-radius: 20px;
margin-left: 50px;

  .profilecard{
  display: flex;
//   width: 80%;
  height: 90%;
  }
`;


export const Card = styled.div`
  padding: 10px;
  border-radius: 15px;
  text-align: left;
  width: 100%;

  .Profileedit{
  display: flex;
  text-align: right;
  font-weight: 400;
  font-size: 14px;
  font-family: ${theme.font.family};
  color: ${theme.colors.navy};
  cursor: pointer;
  margin-left: 90%;
  border:none;
  margin-bottom: 10px;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

export const ProfileImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 5px 0;
  color: #333;
`;

export const Price = styled.h3`
  font-size: 20px;
  color: #333;
`;

export const Chaptercover = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  text-align:left;

  padding: 10px;
  border-radius: 15px;
  width: 100%;
  margin:0px;
  font-family: ${theme.font.family};

  .count{
  text-align: right;
  width: 100%;
  margin: 0px;
  padding: 10px;
  font-size: 14px;
  }
`;

export const CountControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  // width:30%;
  // height: 60%;
  font-size: 14px;
  line-height: 0;
  padding: 10px;

  .countp{
    font-weight: 400;
    margin: 0px;
    padding: 0px;
  }
`;

export const Declinepay = styled.div`
display: flex;
  border: none;
  cursor: pointer;
  margin-bottom: 5%;
  gap: 10px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;

  .decline{
    background: transparent;
    color: ${theme.colors.black};
    border: 2px solid;
    border-radius: 10px;
    width: 50%;
    border-color: #CCCCCC;
    outline: none;
    padding: 10px 5px;
  }

  .paynow{
    background: ${theme.colors.navy};
    color: ${theme.colors.white};
    width: 50%;
    border: none;
    border-radius: 10px;
    outline: none;
    padding: 10px 5px;
  }
`;

export const Rightcontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
  background: #F9F7EE;
  width: 60%;
  height: 70%;
  border-radius: 20px;
  margin-top: 40px;

  .bookcategories{
  display: flex;
  flex-direction: row;
  gap: 20px;
  height: 90%;

  @media (max-width: 480px) {
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  width: 100%;
}

@media (max-width: 480px) {
}
`;

export const BookCard = styled.div`
  width: 200px;
  font-weight: 400;
  border-radius: 20px;
  background: ${theme.colors.pricingBg};

  .title{
    font-size: 14px;
    font-family: ${theme.font.Geologica};
    color: #1F1F1F;
    padding: 10px;
    margin: 0px;
  }

  .booksinr{
    font-size: 24px;
    font-family: ${theme.font.Geologica};
    color: #1F1F1F;
    padding: 10px;
    margin: 0px;
    line-height:1;
  }

  .bookschapter{
    font-size: 12px;
    font-weight: 500;
    font-family: ${theme.font.Geologica};
    color: #676767;
    padding: 10px;
    margin: 0px;
  }
`;

export const BookImage = styled.img`
  width: 90%;
  height: 40%;
  padding: 20px 10px;
`;
