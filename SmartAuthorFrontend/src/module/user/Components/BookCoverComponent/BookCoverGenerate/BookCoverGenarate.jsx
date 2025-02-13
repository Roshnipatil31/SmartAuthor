import React, { useState } from "react";
import {
  BookCoverGenarateWrapper,
  BookCoverGenarateButton,
  BookCoverGenarateContainer,
  BookCoverImage,
  DynamicImage,
  StaticCoverImage,
  ColorSelection,
  Title,
} from "./BookCoverGenarate.style";
import { useNavigate } from "react-router-dom";
import StaticImage from "../../../../../assets/StaticImage.png";
import book3 from "../../../../../assets/Book3.jpg";

const BookCoverGenarate = ({selectedCover}) => {
  const navigate = useNavigate();
  const [selectedColor, setSelectedColor] = useState("#004d40");

  const colorOptions = ["#004d40", "#ffcc00", "#ff4d4d", "#3498db"];

  return (
    <BookCoverGenarateWrapper>
      <BookCoverGenarateContainer>
        <Title>Book Cover</Title>
        <BookCoverImage>
          <StaticCoverImage src={StaticImage} alt="Book Cover" />
          <DynamicImage src={selectedCover || book3} alt="Book Cover" style={{ borderColor: selectedColor }} />
        </BookCoverImage>

        {/* Color Selection */}
        <ColorSelection>
          {colorOptions.map((color, index) => (
            <div
              key={index}
              style={{ backgroundColor: color, border: selectedColor === color ? "2px solid black" : "none" }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </ColorSelection>
      </BookCoverGenarateContainer>

      {/* Buttons */}
      <BookCoverGenarateButton>
        <button className="AiGenerate">AI Generate</button>
        <button className="nextBtn" onClick={() => navigate("/feedback")}>Next</button>
        <button className="expertDesign">Expert Design Service</button>
      </BookCoverGenarateButton>
    </BookCoverGenarateWrapper>
  );
};

export default BookCoverGenarate;
