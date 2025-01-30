import "./App.css";
import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SignUpPage from "./Pages/signupPage/signUpPage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import Header from "./components/Header/Header";
import SurveyForm from "./Pages/SurveyForm/SurveyForm";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/surveyform" element={<SurveyForm />} />
        <Route path="/header" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import "./App.css";
// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import SignUpPage from "./Pages/signupPage/signUpPage";
// import LoginPage from "./Pages/LoginPage/LoginPage";
// import Header from "./components/Header/Header";

// function App() {
//   return (
//     <Router>
//       <Header />  {/* Moved Header outside Routes so it appears on all pages */}
//       <Routes>
//         <Route path="/signup" element={<SignUpPage />} />
//         <Route path="/login" element={<LoginPage />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
