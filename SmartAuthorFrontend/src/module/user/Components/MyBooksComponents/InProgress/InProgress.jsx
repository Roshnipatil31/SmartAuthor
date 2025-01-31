import React, { useState } from "react";
import {
  InProgressContainer,
  BookCard,
  BookCover,
  BookDetails,
  ProgressBar,
  ContinueButton,
} from "./InProgress.styles";

// Import the in-progress book cover image
import book4 from "../../../../../assets/Book4.jpg";

const InProgress = () => {
  const [inProgressBook, setInProgressBook] = useState({
    id: 4,
    title: "The Fractured Time",
    author: "Justice Walker",
    src: book4,
    progress: 83,
  });

  return (
    <InProgressContainer>
      <BookCard>
        <BookCover src={inProgressBook.src} alt="Book Cover" />
        <BookDetails>
          <h3>{inProgressBook.title}</h3>
          <p>{inProgressBook.author}</p>
          <div>⭐⭐⭐⭐⭐</div>
          <ProgressBar>
            <div style={{ width: `${inProgressBook.progress}%` }} />
          </ProgressBar>
        </BookDetails>
        <ContinueButton>Continue writing</ContinueButton>
      </BookCard>
    </InProgressContainer>
  );
};

export default InProgress;
