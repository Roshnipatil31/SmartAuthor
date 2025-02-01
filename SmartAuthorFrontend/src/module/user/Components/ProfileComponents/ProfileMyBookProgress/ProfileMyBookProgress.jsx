import React from "react";
import {
  BookProgressCard,
  BookImage,
  BookInfo,
  StarRating,
  ProgressBar,
  ContinueButton
} from "./ProfileMyBookProgress.styles";
import BookCover from "../../../../../assets/Book3.jpg"; // Add book cover image

const ProfileMyBookProgress = () => {
  return (
    <BookProgressCard>
      <BookImage src={BookCover} alt="Book Cover" />
      <BookInfo>
        <h3>Book Name</h3>
        <p>Author Name</p>
        <StarRating>⭐ ⭐ ⭐ ⭐ ☆</StarRating>
        <ProgressBar>
          <div className="progress-bar">
            <div className="filled" style={{ width: "83%" }}></div>
          </div>
          <span>83%</span>
        </ProgressBar>
      </BookInfo>
      <ContinueButton>Continue Writing</ContinueButton>
    </BookProgressCard>
  );
};

export default ProfileMyBookProgress;
