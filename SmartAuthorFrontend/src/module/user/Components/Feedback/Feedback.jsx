import React, { useState } from "react";
import book from '../../../../assets/heavenbook.png';
import { FaRegStar, FaStar } from "react-icons/fa";
import {
  ReviewContainer,
  Title,
  BookImage,
  BookTitle,
  Author,
  Stars,
  Star,
  ReviewLabel,
  ReviewInput,
  SubmitButton,
} from "./Feedback.style";

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [review, setReview] = useState("");

  const handleStarClick = (index) => setRating(index);
  const handleStarHover = (index) => setHover(index);
  const handleStarLeave = () => setHover(0);

  return (
    <ReviewContainer>
      <Title>Write a Review</Title>
      <BookImage src={book} alt="Book Cover" />
      <BookTitle>Book Name</BookTitle>
      <Author>Author Name</Author>

      {/* Star Rating */}
      <Stars>
  {[...Array(5)].map((_, index) => {
    const starIndex = index + 1;
    return (
      <Star
        key={index}
        onClick={() => handleStarClick(starIndex)}
        onMouseEnter={() => handleStarHover(starIndex)}
        onMouseLeave={handleStarLeave}
      >
        {starIndex <= (hover || rating) ? <FaStar /> : <FaRegStar />}
      </Star>
    );
  })}
</Stars>

      {/* Review Input */}
      <ReviewLabel>Reviews</ReviewLabel>
      <ReviewInput
        placeholder="Write your review about this book"
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      {/* Submit Button */}
      <SubmitButton>Submit</SubmitButton>
    </ReviewContainer>
  );
};

export default Feedback;
