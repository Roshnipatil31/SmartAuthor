import React from "react";
import {
  BookCoverGenarateWrapper,
  BookCoverGenarateButton,
} from "./BookCoverGenarate.style";
import { useNavigate } from "react-router-dom";

const BookCoverGenarate = () => {
  const navigate = useNavigate();
  return (
    <BookCoverGenarateWrapper>
      <BookCoverGenarateButton>
        <button className="AiGenerate">Ai Generate</button>
        <button className="nextBtn" onClick={() => navigate("/feedback")}>next</button>
        <button className="expertDesign"> Expert Design Service</button>
      </BookCoverGenarateButton>
    </BookCoverGenarateWrapper>
  );
};

export default BookCoverGenarate;
