import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./Pages/signupPage/signUpPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SurveyForm from "./Pages/SurveyForm/SurveyForm";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Dashboard from "./module/user/Pages/Dashboard/Dashboard";
import MyBooks from "./module/user/Pages/MyBooks/MyBooks";
import Library from "./module/user/Pages/Library/Library";
import Step from "./module/user/Components/blankPageComponents/StepComponent/StepComponent";
import ContactUs from "./module/user/Pages/ContactUs/ContactUs";
import Profile from "./module/user/Pages/Profile/Profile";
import BlankPage from "./module/user/Pages/BlankPage/BlankPage";
import AboutAuthor from "./module/user/Pages/AboutAuthor/AboutAuthor";
import SemiPrapared from "./module/user/Pages/SemiPrepared/SemiPrapared";
import UnPreparedUsers from "./module/user/Pages/UnPreparedUsers/UnPreparedUsers";
import EditBookDetails from "./module/user/Components/blankPageComponents/EditBookDetails/EditBookDetails";
import Addchapter from "./module/user/Components/Addchapter/Addchapter";
import FullBook from "./module/user/Pages/FullBook/FullBook";

// Layout for Dashboard & MyLibrary
const DashboardLayout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages without Header & Footer */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/surveyform" element={<SurveyForm />} />

        {/* Dashboard & MyLibrary using shared layout */}
        <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
        <Route path="/dashboard/blankPage" element={<DashboardLayout><BlankPage /></DashboardLayout>} />
        <Route path="/Step" element={<DashboardLayout><Step /></DashboardLayout>} />
        <Route path="/my-books" element={<DashboardLayout><MyBooks /></DashboardLayout>} />
        <Route path="/library" element={<DashboardLayout>< Library /></DashboardLayout>} />
        <Route path="/contact-us" element={<DashboardLayout>< ContactUs /></DashboardLayout>} />
        <Route path="/profile" element={<DashboardLayout>< Profile /></DashboardLayout>} />
        <Route path="/AboutAuthor" element={<DashboardLayout>< AboutAuthor /></DashboardLayout>} />
        <Route path="/semipreparedPage" element={<DashboardLayout>< SemiPrapared /></DashboardLayout>} />
        <Route path="/UnPreparedUsers" element={<DashboardLayout>< UnPreparedUsers /></DashboardLayout>} />
        <Route path="/edit-book" element={<EditBookDetails />} />
        <Route path="/addchapter" element={<Addchapter />} />
        <Route path="/full-book" element={<FullBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
