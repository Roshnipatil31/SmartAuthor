import React, { useState } from "react";
import { 
  ContactFormContainer, 
  FormTitle, 
  InputField, 
  TextArea, 
  SubmitButton, 
  FormWrapper, 
  ImageWrapper, 
  StyledImage, 
  ErrorText
} from "./ContactUsComponent.styles";

import contactImage from "../../../../assets/ContactUs.png"; // Ensure this image exists in the assets folder

const ContactUsComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Name validation (only alphabets allowed, prevent numbers and special characters)
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Name should contain only letters";
    }

    // Email validation (valid email format)
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    // Message validation (should not be empty)
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent numbers in the name field
    if (name === "name") {
      if (!/^[A-Za-z\s]*$/.test(value)) {
        return; // Stop updating state if the input contains numbers
      }
    }

    setFormData({ ...formData, [name]: value });

    // Live validation as the user types
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
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
        {errors.name && <ErrorText>{errors.name}</ErrorText>}

        <InputField
          type="email"
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <ErrorText>{errors.email}</ErrorText>}

        <TextArea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <ErrorText>{errors.message}</ErrorText>}

        <SubmitButton type="submit">Contact Us</SubmitButton>
      </FormWrapper>
    </ContactFormContainer>
  );
};

export default ContactUsComponent;
