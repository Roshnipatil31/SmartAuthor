import React, { useState } from "react";
import {
  Container,
  PreviewWrapper,
  DeviceFrame,
  BookContent,
  Controls,
  Button,
  Dropdown,
  DropdownIcon,
  DownloadButton,
} from "./Preview.style";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";


const Preview = () => {
  const [device, setDevice] = useState("Tablet");

  return (
    <Container>
      <h2 className="previewtitle">Preview</h2>

      {/* Device Selection */}
      <Controls>
        <Dropdown value={device} onChange={(e) => setDevice(e.target.value)} >
          <option value="Tablet">Tablet</option>
          <option value="Book">Book</option>
          <option value="Kindle">Kindle</option> 
        </Dropdown> 
        <DropdownIcon style={{ top:"330px", right:"270px" }}/>

        <Dropdown> 
          <option value="Inter">Inter</option>
          <option value="Arial">Arial</option>
          <option value="Serif">Serif</option>
        </Dropdown> 
        <DropdownIcon style={{ top:"330px", right:"70px" }}/>
      </Controls>

      {/* Book Preview */}
      <PreviewWrapper>
        <DeviceFrame>
          <BookContent>
            <h3 className="urbooklayout">YOUR BOOK LAYOUT</h3>
            <h4 className="chapterone">- CHAPTER ONE -</h4>
            <p className="longpara">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              faucibus malesuada lectus, at sodales massa gravida ut. Nulla
              ornare metus id felis ornare, eget malesuada nulla bibendum.
              Integer posuere nisi eu nisi sagittis pharetra.
            </p>
            <p className="pagepara">Page 5</p>

            <hr className="previewhr"/>

          </BookContent>
        </DeviceFrame>
      </PreviewWrapper>

      {/* Navigation Buttons */}
      <Controls>
        <Button> <MdOutlineKeyboardArrowLeft/> Chapter</Button>
        <Button>Chapter <MdOutlineKeyboardArrowRight/></Button>
      </Controls>

      {/* Download Button */}
      <DownloadButton>Download Book</DownloadButton>
    </Container>
  );
};

export default Preview;
