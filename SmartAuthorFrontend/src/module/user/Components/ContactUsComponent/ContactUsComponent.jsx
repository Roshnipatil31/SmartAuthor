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




const ContactUsComponent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  
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

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" && !/^[A-Za-z\s]*$/.test(value)) {
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const namePattern = /^[A-Za-z\s]+$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!namePattern.test(formData.name)) {
      notifyError("Please enter a valid Full Name (alphabets only).");
      return;
    }

    if (!emailPattern.test(formData.email)) {
      notifyError("Please enter a valid email address.");
      return;
    }

    if (formData.message.trim() === "") {
      notifyError("Please enter a message.");
      return;
    }

    // Show success toast and navigate
    notifySuccess("Message sent successfully!");
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
