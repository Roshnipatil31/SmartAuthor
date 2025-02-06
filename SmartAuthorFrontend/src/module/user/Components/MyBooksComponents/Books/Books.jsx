import React, { useState } from "react";
import { BooksContainer, BookImage } from "./Books.styles";

// Import images from assets folder
import book1 from "../../../../../assets/Book1.jpg";
import book2 from "../../../../../assets/Book2.jpg";
import book3 from "../../../../../assets/Book3.jpg";

const Books = () => {
  const [books, setBooks] = useState([
    { id: 1, title: "Fractured Time", src: book1 },
    { id: 2, title: "Stranger in the Lake", src: book2 },
    { id: 3, title: "Made in Heaven", src: book3 },
  ]);

  // const addNewBook = () => {
  //   const newBook = {
  //     id: books.length + 1,
  //     title: `New Book ${books.length + 1}`,
  //     src: book4, // Using book4 as a placeholder
  //   };
  //   setBooks([...books, newBook]);
  // };

  return (
    <div>
      <BooksContainer>
        {books.map((book) => (
          <BookImage key={book.id} src={book.src} alt={book.title} />
        ))}
      </BooksContainer>
      {/* <button onClick={addNewBook}>Add New Book</button> */}
    </div>
  );
};

export default Books;
