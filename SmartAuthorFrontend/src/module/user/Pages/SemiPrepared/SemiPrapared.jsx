import React, { useState } from "react";
import { SemiPreparedWrapper, FormGroup, SemiButton } from "./SemiPrapared.style";
import { useNavigate } from "react-router-dom";

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        navigate("/dashboard/blankPage");
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
        </SemiPreparedWrapper>
    );
};

export default SemiPrepared;