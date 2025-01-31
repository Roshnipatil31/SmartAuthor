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
    /* align-items: flex-start; */
    width: 100%;
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
  overflow-x: auto;
  padding: 10px 20px;
`;

export const TemplateCard = styled.div`
  width: 200px;
  border: 1px solid #ddd;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TemplateHeader = styled.div`
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const TemplateContent = styled.div`
  flex: 1;
  padding: 10px;
  font-size: 12px;
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
  /* padding: 10px; */
  background-color: #fbc02d;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  border-top: 1px solid #ddd;
`;

