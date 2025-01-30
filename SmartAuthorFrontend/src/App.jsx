import "./App.css";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpPage from "./Pages/signupPage/signUpPage";
import LoginPage from "./Pages/LoginPage/LoginPage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
