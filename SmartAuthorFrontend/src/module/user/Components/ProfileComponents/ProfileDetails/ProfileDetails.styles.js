import styled from "styled-components";
import theme from "../../../../../theme/Themes";

export const ProfileCard = styled.div`
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0px 4px 6px ${theme.colors.lightblur};
  gap: 20px;

  @media ${theme.media.md} {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ProfileInfo = styled.div`
  flex: 1;
  text-align: left;

  h2 {
    font-size: ${theme.font.size.xxlarge};
    // font-family: ${theme.font.Headerfamily};
    color: ${theme.colors.black};
  }

  p {
    font-size: ${theme.font.size.medium};
    font-family: ${theme.font.family};
    color: ${theme.colors.black};
    margin: 5px 0;
  }
`;

export const StatContainer = styled.div`
  display: flex;
  gap: 15px;
  margin: 10px 0;
  @media ${theme.media.md} {
    flex-direction: column;
    align-items: center;
}
`;

export const StatBox = styled.div`
  background: ${theme.colors.white};
  // padding: 10px;
  border-radius: 8px;
  width: 150px;
  height: 80px;
  margin-bottom: 10px;
  text-align: center;
  box-shadow: 0px 2px 4px ${theme.colors.lightblur};
`;

export const StatNumber = styled.h3`
  // font-size: ${theme.font.size.large};
  // color: ${theme.colors.navy};
  margin : 10px 0 ;
`;

export const StatLabel = styled.p`
  font-size: ${theme.font.size.small};
  color: ${theme.colors.gray};
  margin-bottom: 50px;
`;

export const EditProfileButton = styled.button`
  background-color: ${theme.colors.navy};
  color: ${theme.colors.white};
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  margin-top: -200px;

  &:hover {
    background-color: ${theme.colors.blue};
  }

  @media ${theme.media.md} {
    margin-top: 0px;
  }
`;
