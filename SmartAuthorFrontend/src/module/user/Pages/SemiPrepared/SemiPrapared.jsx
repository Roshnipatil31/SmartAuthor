import React, { useState } from "react";
import { SemiPreparedWrapper, FormGroup, SemiButton } from "./SemiPrapared.style";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SemiPrepared = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        characterName: "",
        numberOfCharacters: "",
        numberOfChapters: "",
        storyType: "",
        genre: "",
        description: ""
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
        if (name === "characterName" && /[^a-zA-Z ]/.test(value)) {
            notifyError("Character Name should only contain alphabets!");
            return;
        }
        if (name === "storyType" && /[^a-zA-Z ]/.test(value)) {
            notifyError("Story Type should only contain alphabets!");
            return;
        }
        if (name === "genre" && /[^a-zA-Z ]/.test(value)) {
            notifyError("Genre should only contain alphabets!");
            return;
        }
        if (name === "numberOfCharacters" && (isNaN(value) || value <= 0)) {
            notifyError("Number of Characters should be a positive number!");
            return;
        }
        if (name === "numberOfChapters" && (isNaN(value) || value <= 0)) {
            notifyError("Number of Chapters should be a positive number!");
            return;
        }
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if any field is empty
        for (let key in formData) {
            if (!formData[key].trim()) {
                notifyError(`${key.replace(/([A-Z])/g, ' $1')} is required!`);
                return;
            }
        }
        
        notifySuccess("Form submitted successfully!");
        setTimeout(() => navigate("/dashboard/blankPage"), 3000); // Delay navigation for better UX
    };

    return (
        <SemiPreparedWrapper>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <label htmlFor="characterName">Character Name</label>
                    <input 
                        type="text" 
                        name="characterName" 
                        placeholder="Write Here" 
                        value={formData.characterName} 
                        onChange={handleChange} 
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="numberOfCharacters">Number of Characters</label>
                    <input 
                        type="number" 
                        name="numberOfCharacters" 
                        placeholder="Write Here" 
                        value={formData.numberOfCharacters} 
                        onChange={handleChange} 
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="numberOfChapters">Number of Chapters</label>
                    <input 
                        type="number" 
                        name="numberOfChapters" 
                        placeholder="Write Here" 
                        value={formData.numberOfChapters} 
                        onChange={handleChange} 
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="storyType">Select Story Type</label>
                    <input 
                        type="text" 
                        name="storyType" 
                        placeholder="Write Here" 
                        value={formData.storyType} 
                        onChange={handleChange} 
                    />
                </FormGroup>
                <FormGroup>
                    <label htmlFor="genre">Select Genre</label>
                    <input 
                        type="text" 
                        name="genre" 
                        placeholder="Write Here" 
                        value={formData.genre} 
                        onChange={handleChange} 
                    />
                </FormGroup>
                <FormGroup>
                    <textarea 
                        name="description" 
                        placeholder="Description" 
                        value={formData.description} 
                        onChange={handleChange} 
                        rows="5"
                    ></textarea>
                </FormGroup>
                <SemiButton type="submit">Done</SemiButton>
            </form>
            
            {/* Toast container must be included here */}
            <ToastContainer />
        </SemiPreparedWrapper>
    );
};

export default SemiPrepared;
