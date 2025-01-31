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
// import MyLibrary from "./Pages/MyLibrary/MyLibrary"; // Ensure MyLibrary is imported

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
        <Route path="/my-books" element={<DashboardLayout><MyBooks /></DashboardLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
