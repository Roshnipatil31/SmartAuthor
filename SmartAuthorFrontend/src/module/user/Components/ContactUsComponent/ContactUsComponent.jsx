import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

import contactImage from "../../../../assets/ContactUs.png"; // Ensure this image exists in the assets folder

toast.configure();

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

const ContactUsComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validate = () => {
    let isValid = true;
    
    if (!formData.name.trim()) {
      notifyError("Name is required");
      isValid = false;
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      notifyError("Name should contain only letters");
      isValid = false;
    }

    if (!formData.email.trim()) {
      notifyError("Email is required");
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      notifyError("Enter a valid email");
      isValid = false;
    }

    if (!formData.message.trim()) {
      notifyError("Message cannot be empty");
      isValid = false;
    }

    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && !/^[A-Za-z\s]*$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      notifySuccess("Form submitted successfully!");
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
