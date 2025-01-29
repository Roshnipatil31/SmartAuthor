import React from "react";
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
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <SignUpPageWrapper>
      <SignUpBgImage src= {bgimage} alt="bgimage"/>
      <SignUpcontainer>
        <SignUpHeader> Smart Author </SignUpHeader>
        <Form>
          <FormGroup>
            <Label> Full Name</Label>
            <Input type="text" placeholder="Enter Full Name" />
          </FormGroup>
          <FormGroup>
            <Label>Date Of Birth</Label>
            <Input type="date" placeholder="Enter Date Of Birth" />
          </FormGroup>
          <FormGroup>
            <Label> Email</Label>
            <Input type="email" placeholder="Enter Email" />
          </FormGroup>
          <FormGroup>
            <Label> Password</Label>
            <Input type="password" placeholder="Enter Password" />
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
    </SignUpPageWrapper>
  );
};

export default SignUpPage;
