import styled from "styled-components";
import theme from "../../../../../theme/Themes"

export const BookCoverOptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  gap: 15px;
  padding: 20px;
  background: ${theme.colors.white};
  border-radius: 10px;
  width:20%;
  position: relative;
  margin-top: 10px;
`;

export const SelectCoverTitle = styled.h3`
  font-size: ${theme.font.size.medium};
  color: ${theme.colors.inputColor};
`;

export const BookCoverOptionsImages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;

export const CoverImage = styled.img`
  width: 100px;
  height: 150px;
  border-radius: 5px;
  cursor: pointer;
  border: ${({ $selected }) => ($selected ? "3px solid #007bff" : "2px solid transparent")};
  transition: border 0.3s ease;
`;

export const OptionTagsContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
  gap: 5px;
  justify-content: space-between;
`;

export const OptionTag = styled.button`
  background: ${({ $selected }) => ($selected ?`${theme.colors.blue3}` : `${theme.colors.white}`)};
  color: ${({ $selected }) => ($selected ? `${theme.colors.navy}` : `${theme.colors.bordertag}`)};
  border: ${({ $selected }) => ($selected ? `1px solid ${theme.colors.navy}` : `1px solid ${theme.colors.bordertag}`)};
  padding: 5px 10px;
  border-radius: 15px;
  font-size: ${theme.font.size.xsmall};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content:space-between;
  align-items: center;

`;

export const TalkAI = styled.div`
display:flex;
flex-direction: column;
position: absolute;
bottom: 20px;
width:90%;

.line{
  width:90%;
  height:1px;
  background:${theme.colors.bordertag};
  margin:10px 0;
}
`;

export const KeywordInput = styled.input`
width:100%;
border:none;
font-size:${theme.font.size.small};
color:${theme.colors.inputColor};
padding: 10px 0;
outline:none;

`;

export const TalkToContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  gap: 5px;
  margin-top: 10px;

`;

export const SmartAiButton = styled.button`
  background: ${theme.colors.blue3};
  color: ${theme.colors.navy};
  border: 1px solid ${theme.colors.navy};
  padding: 6px 12px;
  border-radius: 15px;
  cursor: pointer;
  font-size: ${theme.font.size.xsmall};

  transition: background 0.3s ease;
`;
