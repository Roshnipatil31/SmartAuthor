import React from "react";
import { Container, Title } from "./Library.styles";
import BookRecommendations from "../../Components/LibraryComponents/BookRecommendations/BookRecommendations";
import BookCategory from "../../Components/LibraryComponents/BookCategory/BookCategory";

const Library = () => {
  return (
    <Container>
      <Title>Book Recommendations</Title>
      <BookRecommendations />

      <Title>Book Category</Title>
      <BookCategory />
    </Container>
  );
};

export default Library;
