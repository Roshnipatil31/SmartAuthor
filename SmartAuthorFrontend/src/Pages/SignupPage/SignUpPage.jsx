import React, { useState } from "react";
import {
  SignUpPageWrapper,
  SignUpBgImage,
  SignUpHeader,
  Form,
  Label,
  Input,
  FormGroup,
  Button,
  AddLogin,
  SignUpcontainer,
} from "./SignUpPage.style";
import bgimage from '../../assets/BgAuthImage.png';
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Function to trigger error toast
  const notifyError = (message) => {
    console.log("Toast Error:", message); // Debugging log
    toast.error(message, {
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

  // Function to trigger success toast
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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!fullName || !namePattern.test(fullName)) {
      notifyError("Please enter a valid Full Name (alphabets only).");
      return;
    }
    if (!dob) {
      notifyError("Please select a valid Date of Birth.");
      return;
    }
    if (!email || !emailPattern.test(email)) {
      notifyError("Please enter a valid email address.");
      return;
    }
    if (!password || password.length < 8) {
      notifyError("Password must be at least 8 characters long.");
      return;
    }

    // Show success toast and navigate
    notifySuccess("Registration successful!");

    setTimeout(() => {
      navigate("/login");
    }, 3000); // Wait for toast to display before navigating
  };

  const handleFullNameChange = (e) => {
    const value = e.target.value;
    if (/^[A-Za-z\s]*$/.test(value)) {
      setFullName(value);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  // Disable tomorrow and future dates for DOB input
  const today = new Date().toISOString().split("T")[0];

  return (
    <SignUpPageWrapper>
      <SignUpBgImage src={bgimage} alt="bgimage" />
      <SignUpcontainer>
        <SignUpHeader> Smartauthor </SignUpHeader>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label> Full Name</Label>
            <Input
              type="text"
              value={fullName}
              onChange={handleFullNameChange}
              placeholder="Enter Full Name"
            />
          </FormGroup>
          <FormGroup>
            <Label>Date Of Birth</Label>
            <Input
              type="date"
              value={dob}
              onChange={handleDobChange}
              max={today}
            />
          </FormGroup>
          <FormGroup>
            <Label> Email</Label>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your Email here"
            />
          </FormGroup>
          <FormGroup>
            <Label> Password</Label>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Enter your Password"
            />
          </FormGroup>
          <Button type="submit">Sign Up</Button>
        </Form>
        <AddLogin>
          Already have an account?{" "}
          <Link to="/login" className="linkToLogin">
            Log in
          </Link>
        </AddLogin>
      </SignUpcontainer>
      {/* Toast Container to display toasts */}
      <ToastContainer />
    </SignUpPageWrapper>
  );
};

export default SignUpPage;
