import React, { useState } from "react";
import { 
  ContactFormContainer, 
  FormTitle, 
  InputField, 
  TextArea, 
  SubmitButton, 
  FormWrapper, 
  ImageWrapper, 
  StyledImage 
} from "./ContactUsComponent.styles";

import contactImage from "../../../../assets/ContactUs.png"; // Make sure to add this image to your assets folder

const ContactUsComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <ContactFormContainer>
      <ImageWrapper>
        <StyledImage src={contactImage} alt="Contact Us" />
      </ImageWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <FormTitle>Contact Us</FormTitle>
        <InputField
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        <TextArea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        <SubmitButton type="submit">Contact Us</SubmitButton>
      </FormWrapper>
    </ContactFormContainer>
  );
};

export default ContactUsComponent;
