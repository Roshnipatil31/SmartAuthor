import React, { useState } from "react";
import {
  Container,
  TabletWrapper,
  DeviceFrame,
  TabletImage,
  Controls,
  BookWrapper,
  BookImage,
  KindleWrapper,
  KindleImage,
  Button,
  Dropdown,
  DownloadButton,
} from "./Preview.style";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";
import pagebook from "../../../../assets/2page book.png";
import kindle from "../../../../assets/kindle.png";

const Preview = () => {
  const [device, setDevice] = useState("Tablet");

  const renderPreview = () => {
    switch (device) {
      case "Tablet":
        return (
          <TabletWrapper>
            <DeviceFrame>
              <TabletImage src={kindle} alt="Book Cover" />
              
            </DeviceFrame>
            <hr className="previewhr"/>
          </TabletWrapper>
        );
      case "Book":
        return (
          <BookWrapper>
            <BookImage src={pagebook} alt="Book Cover" />
          </BookWrapper>
        );
      case "Kindle":
        return (
          <KindleWrapper>
            <KindleImage src={kindle} alt="Book Cover" />
          </KindleWrapper>
        );
      default:
        return null;
    }
  };

  return (
    <Container>
      <h2 className="previewtitle">Preview</h2>

      <Controls>
        <Dropdown
          value={device}
          onChange={(e) => setDevice(e.target.value)}
        >
          <option value="Tablet">Tablet</option>
          <option value="Book">Book</option>
          <option value="Kindle">Kindle</option>
        </Dropdown>
        <Dropdown>
          <option value="Inter">Inter</option>
          <option value="Arial">Arial</option>
          <option value="Serif">Serif</option>
        </Dropdown>
      </Controls>

      {renderPreview()}

      <Controls>

        <Button>
          <MdOutlineKeyboardArrowLeft /> Chapter
        </Button>
        <Button>
          Chapter <MdOutlineKeyboardArrowRight />
        </Button>
      </Controls>

      <DownloadButton>Download Book</DownloadButton>
    </Container>
  );
};

export default Preview;
