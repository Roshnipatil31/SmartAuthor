import styled from "styled-components";
import theme from "../../../../theme/Themes";
import { IoMdArrowDropdown } from "react-icons/io";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: auto;
  margin-right: 0%;
  margin-top: 20%;
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
`;

export const Dropdown = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ddd;
  cursor: pointer;
  width: 45%;
  background: ${theme.colors.previewbtn};
  appearance: none;
`;

export const DropdownIcon = styled(IoMdArrowDropdown)`
  position: absolute;
  padding: 5px;
  pointer-events: none; /* So clicks go to the select */
  transform: translateY(-50%);
  color: black;
  `;

export const PreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px;
`;

export const DeviceFrame = styled.div`
  width: 250px;
  height: 300px;
  border-radius: 20px;
  border-width: 20px 20px 40px 20px; 
  border-style: solid;
  border-color: #ccc; 
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
}
`;

export const BookContent = styled.div`
  width: 100%;
  height: 90%;
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);

  .urbooklayout {
    font-size: 14px;
    font-weight: bold;
    text-align:center;
  }

  .chapterone {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 10px;
    text-align:center;
  }

  .longpara {
    font-size: 12px;
    color: #444;
    text-align: left;
  }

  .pagepara {
    font-size: 12px;
    color: #444;
    text-align: center;
  }

  .previewhr{
    width: 20%;
    align-items: center;
    height: 2px;
    background: ${theme.colors.black};
    margin-top: 55%;
  }
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
