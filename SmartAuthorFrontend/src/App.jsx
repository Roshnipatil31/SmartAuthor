import "./App.css";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpPage from "./Pages/signupPage/signUpPage";
// import SignUpPage from "./Pages/SignupPage/SignUpPage";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
