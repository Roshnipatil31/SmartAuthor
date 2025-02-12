import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const ReviewContainer = styled.div`
  background: #f8f6ec;
  padding: 10px;
  border-radius: 15px;
  width: 80%;
  height: 100%;
  margin: 10px auto;
  text-align: center;
  border: 1px solid #0000004F;
  box-shadow: 2px 2px 0px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: #265073;
  font-weight: 700;
  font-size: 20px;
  font-family: ${theme.font.family};
`;

export const BookImage = styled.img`
  width: 100px;
  height: 140px;
  border-radius: 8px;
  margin: 10px 0;
`;

export const BookTitle = styled.h3`
  margin: 5px 0;
  font-weight: 700;
  font-family: ${theme.font.family};
  font-size: 20px;
  color: #000000;
`;

export const Author = styled.p`
  color: #000000;
  font-size: 15px;
  font-family: ${theme.font.family};
  font-weight: 500;
  line-height: 0.5;
`;

export const Stars = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 5px 0;
`;

export const Star = styled.span`
  font-size: 24px;
  cursor: pointer;
  transition: color 0.3s;
`;


export const ReviewLabel = styled.p`
  font-weight: 500;
  font-family: ${theme.font.family};
  font-size: 16px;
  text-align: left;
  margin-left: 10%;
  margin-top: 15px;
`;

export const ReviewInput = styled.textarea`
  width: 80%;
  height: 80px;
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 10px;
  font-size: 16px;
  font-family: ${theme.font.family};
  font-weight: 400;

`;

export const SubmitButton = styled.button`
  background: #1e355b;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  margin-top: 10px;
  cursor: pointer;
  width: 40%;
  font-weight: 500;
  font-size: 16px;
  font-family: ${theme.font.family};
  transition: background 0.3s;

  &:hover {
    background: #14233f;
  }
`;
