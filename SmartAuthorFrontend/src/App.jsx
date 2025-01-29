import "./App.css";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignupPage from "./Pages/SignupPage/SignUpPage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
