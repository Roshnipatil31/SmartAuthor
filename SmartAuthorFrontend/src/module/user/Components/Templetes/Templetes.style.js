import styled from "styled-components";
import theme from "../../../../theme/Themes";

export const TempletesWapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const TempletesHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const TempletesTitle = styled.p`
  color: ${theme.colors.black};
  font-size: ${theme.font.size.xlarge};
  font-weight: bold;
  margin: 0;
  padding-left: 20px;
`;

export const TemplatesContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll; /* Enables horizontal scrolling */
  padding: 10px;
  width: 95%;
  scrollbar-width: thin; /* Thin is the smallest available option */
  scrollbar-color: #d9d9d9 transparent; /* Thumb color & track color */

  @media (max-width: 1200px) {
    gap: 15px;
  }

  @media (max-width: 990px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;



export const TemplateCard = styled.div`
  max-width: 100%;
  width: 25%;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;

  @media (max-width: 576px) {
    width: 180px;
  }

  @media (max-width: 480px) {
    width: 160px;
  }
`;

export const TemplateHeader = styled.div`
  padding: 10px;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
`;

export const TemplateContent = styled.div`
  flex: 1;
  padding: 10px;
  font-size: 12px;
  width: 200px;
  color: #555;
`;

export const TemplateTitle = styled.h3`
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin: 0;
  text-align: center;
`;

export const TemplateFooter = styled.div`
  background-color: #fbc02d;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  font-family: ${theme.font.family};
  color: #fff;
  border-top: 1px solid #ddd;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
