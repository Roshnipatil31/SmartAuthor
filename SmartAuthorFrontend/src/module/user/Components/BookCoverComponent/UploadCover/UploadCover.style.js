import styled from "styled-components";
import theme from "../../../../../theme/Themes";

export const UploadCoverWapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 20%;
  padding: 20px;
  height: 100vh;
  position: relative;
  /* background: ${theme.colors.white}; */
  border-radius: 12px;
  /* box-shadow: 0px 4px 6px ${theme.colors.lightblur}; */
`;

export const UploadCoverContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  /* background: ${theme.colors.white}; */
  border-radius: 12px;
  /* box-shadow: 0px 4px 6px ${theme.colors.lightblur}; */
`;

export const AuthorName = styled.p`
  font-size: ${theme.font.size.medium};
  font-weight: bold;
  color: ${theme.colors.black};
  margin: 0;
  text-align: center;
`;

export const UploadCoverButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  /* border: 1px dashed ${theme.colors.inputborder}; */
  /* background: ${theme.colors.transparnt}; */
  cursor: pointer;
  font-size: ${theme.font.size.small};
  border-radius: 5px;
  color: ${theme.colors.black};
  width: 90%;
  flex-direction: column;

  .UploadIcon {
    width: 100px;
    height: 100px;
    color: ${theme.colors.inputColor};
  }

  .AddCover {
    font-size: ${theme.font.size.small};
    font-weight: bold;
    color: ${theme.colors.black};
  }

  @media ${theme.media.lg} {
    font-size: ${theme.font.size.xsmall};
  }
`;

export const UploadButton = styled.button`
  width: 90%;
  padding: 8px;
  background: ${theme.colors.buttonGradient};
  color: ${theme.colors.white};
  cursor: pointer;
  font-size: ${theme.font.size.medium};
  border-radius: 50px;
  /* gap: 10px; */
  border: none;
  position: absolute;
  bottom: 20px;
`;