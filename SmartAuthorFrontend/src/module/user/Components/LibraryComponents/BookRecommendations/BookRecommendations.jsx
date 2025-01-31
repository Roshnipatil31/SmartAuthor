import React from "react";
import { BookContainer, BookCard, BookImage, BookTitle, BookAuthor } from "./BookRecommendations.styles";

// Import images
import Book1 from "../../../../../assets/Book1.jpg";  
import Book2 from "../../../../../assets/Book2.jpg";
import Book3 from "../../../../../assets/Book3.jpg";

const books = [
  {
    id: 1,
    title: "The Fractured Time",
    author: "Michael D'Ambrosio",
    image: Book1,  // Use imported image
  },
  {
    id: 2,
    title: "The Stranger in the Lake",
    author: "Kimberly Belle",
    image: Book2,  // Use imported image
  },
  {
    id: 3,
    title: "Made in Heaven",
    author: "Adele Geras",
    image: Book3,  // Use imported image
  }
];

const BookRecommendations = () => {
  return (
    <BookContainer>
      {books.map((book) => (
        <BookCard key={book.id}>
          <BookImage src={book.image} alt={book.title} />
          <BookTitle>{book.title}</BookTitle>
          <BookAuthor>~ {book.author}</BookAuthor>
        </BookCard>
      ))}
    </BookContainer>
  );
};

export default BookRecommendations;
