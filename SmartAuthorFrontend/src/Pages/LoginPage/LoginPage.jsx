import react from "react";
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

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/surveyform");
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
            <Input type="email" placeholder="Enter your Email here" />
          </FormGroup>
          <FormGroup>
            <Label> Password</Label>
            <Input type="password" placeholder="Enter your Password" />
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
    </LoginPageWrapper>
  );
};

export default LoginPage;
