import React, { useState } from "react";
import {
  LoginPageWrapper,
  LoginPageBgImage,
  LoginPageHeader,
  Form,
  Label,
  Input,
  FormGroup,
  Button,
  AddLogin,
  Logincontainer,
  LoginNavbar,
} from "./LoginPage.style";
import bgimage from "../../assets/BgAuthImage.png";
import { Link, useNavigate } from "react-router-dom";
import { FiEdit3 } from "react-icons/fi";
import { toast, ToastContainer } from "react-toastify"; // Import toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notifySuccess = (message) => {
    console.log("Toast Success:", message); // Debugging log
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(!email || !emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    // Password validation: must be at least 8 characters
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters long.");
      return;
    }

    notifySuccess("login successfully!");

    setTimeout(() => {
      navigate("/surveyform");
    },3000);
  };

  return (
    <LoginPageWrapper>
      <LoginPageBgImage src={bgimage} alt="bgimage" />
      <Logincontainer>
        <LoginNavbar>
          <FiEdit3 className="edit-icon" />
          <LoginPageHeader> Smartauthor </LoginPageHeader>
        </LoginNavbar>
        <Form onSubmit={handleLogin}>
          <FormGroup>
            <Label> Email</Label>
            <Input
              type="email"
              placeholder="Enter your Email here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label> Password</Label>
            <Input
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button type="submit">Log In</Button>
        </Form>
        <AddLogin>
          Don't have an account?{" "}
          <Link to="/signup" className="linkToLogin">
            Sign Up
          </Link>
        </AddLogin>
      </Logincontainer>
      {/* Add Toast Container */}
      <ToastContainer />
    </LoginPageWrapper>
  );
};

export default LoginPage;
