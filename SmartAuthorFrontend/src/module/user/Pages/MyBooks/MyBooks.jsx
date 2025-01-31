import React from "react";
import Books from "../../Components/MyBooksComponents/Books/Books";
import InProgress from "../../Components/MyBooksComponents/InProgress/InProgress";
import { Container, Header, NewBookButton } from "./MyBooks.styles";

const MyBooks = () => {
  return (
    <Container>
      <Header>
        <h2>My Books</h2>
        <NewBookButton onClick={() => alert("Feature coming soon!")}>
          Write a new book
        </NewBookButton>
      </Header>
      <Books />
      <h2>In Progress</h2>
      <InProgress />
    </Container>
  );
};

export default MyBooks;
