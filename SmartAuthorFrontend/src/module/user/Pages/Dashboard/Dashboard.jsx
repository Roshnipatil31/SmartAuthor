import React from "react";
import {
  DashboardWapper,
  DashboardGif,
  BookGif,
  DashboardContent,
} from "./Dashboard.style";
import BooksGif from "../../../../assets/BookGif.gif";
import GenerateBooks from "../../Components/generateBooks/GenerateBooks";
import Templetes from "../../Components/Templetes/Templetes";

const Dashboard = () => {
  return (
    <DashboardWapper>
      <DashboardGif>
        <BookGif src={BooksGif} alt="BookGif" />
      </DashboardGif>

      <DashboardContent>
        <GenerateBooks />
        <Templetes />
      </DashboardContent>
    </DashboardWapper>
  );
};

export default Dashboard;
