import React from "react";
import {
  InProgressContainer,
  BookCard,
  BookCover,
  BookDetails,
  ProgressBar,
  ContinueButton,
} from "./InProgress.styles";

const InProgress = () => {
  return (
    <InProgressContainer>
      <BookCard>
        <BookCover src="/path-to-progress-book.jpg" alt="Book Cover" />
        <BookDetails>
          <h3>Book Name</h3>
          <p>Author Name</p>
          <div>
            ⭐⭐⭐⭐⭐
          </div>
          <ProgressBar>
            <div style={{ width: "83%" }} />
          </ProgressBar>
        </BookDetails>
        <ContinueButton>Continue writing</ContinueButton>
      </BookCard>
    </InProgressContainer>
  );
};

export default InProgress;
