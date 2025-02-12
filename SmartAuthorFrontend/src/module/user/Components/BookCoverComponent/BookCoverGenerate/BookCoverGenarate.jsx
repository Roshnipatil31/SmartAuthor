import React from "react";
import {
  BookCoverGenarateWrapper,
  BookCoverGenarateButton,
} from "./BookCoverGenarate.style";

const BookCoverGenarate = () => {
  return (
    <BookCoverGenarateWrapper>
      <BookCoverGenarateButton>
        <button className="AiGenerate">Ai Generate</button>
        <button className="nextBtn">next</button>
        <button className="expertDesign"> Expert Design Service</button>
      </BookCoverGenarateButton>
    </BookCoverGenarateWrapper>
  );
};

export default BookCoverGenarate;
