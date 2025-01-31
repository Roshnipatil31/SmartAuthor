import styled from "styled-components";

export const InProgressContainer = styled.div`
  margin-top: 20px;
`;

export const BookCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
`;

export const BookCover = styled.img`
  width: 80px;
  height: auto;
  border-radius: 5px;
`;

export const BookDetails = styled.div`
  flex-grow: 1;
  padding: 0 15px;

  h3 {
    margin: 0;
  }

  p {
    margin: 5px 0;
  }
`;

export const ProgressBar = styled.div`
  background: #ddd;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  margin-top: 5px;

  div {
    height: 100%;
    background: green;
    border-radius: 5px;
  }
`;

export const ContinueButton = styled.button`
  background-color: #1d4ed8;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #153bbb;
  }
`;
