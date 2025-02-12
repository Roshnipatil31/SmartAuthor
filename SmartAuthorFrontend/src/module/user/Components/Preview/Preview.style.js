import styled from "styled-components";
import theme from "../../../../theme/Themes";
import { IoMdArrowDropdown } from "react-icons/io";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  /* margin-left: auto; */
  /* margin-right: 0%; */
  float: inline-end;
  margin-top: 10%;
  width: 30%;
  height: 60%;
  background: ${theme.colors.white};

  .previewtitle {
    font-size: 24px;
    font-weight: bold;
    margin: 0px 0px 10px 0px;
    padding-left: 5px;
    color: ${theme.colors.navy};
    text-align: left;
  }
`;

export const Controls = styled.div`
  display: flex;
  gap: 30%;
  margin-bottom: 15px;
  position: relative;
`;
export const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;

  .dropdown-icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

export const Dropdown = styled.select`
  width: 150px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  appearance: none; /* Hides default arrow */
  background-color: white;
  cursor: pointer;
  font-size: 16px;
  padding-right: 30px; /* Space for custom icon */
`;


export const TabletWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;

  .previewhr{
    width: 10%;
    display:flex;
    align-items: center;
    justify-content: center;
    height: 3px;
    background: ${theme.colors.black};
    margin: 0px;
    position: relative;
    bottom: 20px;
  }
`;

export const DeviceFrame = styled.div`
  width: 200px;
  height: 250px;
  border-radius: 20px;
  border-width: 20px 20px 40px 20px; 
  border-style: solid;
  border-color: #ccc; 
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  // background: #f9f9f9;

  
`;

export const TabletImage = styled.img`
  width: 100%;
  height: 90%;
`;

export const BookWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
`;

export const BookImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const KindleWrapper = styled.div`
  width: 100%;
  height: 100%;
  // background: white;
  // padding: 15px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const KindleImage = styled.img`
  width: 70%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0px;
`;

export const Button = styled.button`
  display: flex;
  padding: 10px 5px;
  border: 1px solid #265073;
  border-radius: 5px;
  background: #fff;
  color: #265073;
  cursor: pointer;
  transition: 0.3s;
  justify-content: center;
  align-items: center;
  width:40%;

  &:hover {
    background: #f0f0f0;
  }
`;

export const DownloadButton = styled(Button)`
  background: #265073;
  color: white;
  width: 100%;
  font-weight: bold;

  &:hover {
    background: #1b3a4b;
  }
`;
