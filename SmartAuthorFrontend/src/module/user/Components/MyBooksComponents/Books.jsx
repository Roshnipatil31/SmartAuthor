import React from "react";
import { BooksContainer, BookImage } from "./Books.styles";

const books = [
  { id: 1, title: "Fractured Time", src: "/path-to-image1.jpg" },
  { id: 2, title: "Stranger in the Lake", src: "/path-to-image2.jpg" },
  { id: 3, title: "Made in Heaven", src: "/path-to-image3.jpg" },
];

const Books = () => {
  return (
    <BooksContainer>
      {books.map((book) => (
        <BookImage key={book.id} src={book.src} alt={book.title} />
      ))}
    </BooksContainer>
  );
};

export default Books;
