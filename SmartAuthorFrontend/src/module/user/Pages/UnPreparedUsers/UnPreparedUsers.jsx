import React, { useState } from "react";
import {
  SemiPreparedWrapper,
  FormGroup,
  SemiButton,
} from "./UnPreparedUsers.styles";

const UnPreparedUsers = () => {
  const [userData, setUserData] = useState({
    name: "",
    age: "",
    interest: "",
    characters: "",
    chapters: "",
    places: "",
  });

  const [selectedGenres, setSelectedGenres] = useState(["Food", "Fantasy"]);
  const [newGenre, setNewGenre] = useState("");
  const [formErrors, setFormErrors] = useState({
    name: "",
    interest: "",
    genres: "",
    characters: "",
    age: "",
    places: "",
    chapters: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Prevent numbers in name, interest, and genre fields
    if (name === "name" || name === "interest") {
      if (/\d/.test(value)) return;
    }

    // Prevent negative numbers in numeric fields (except for Chapters)
    if ((name === "age" || name === "characters" || name === "places") && value < 0) return;

    // Allow zero or positive numbers for Chapters only
    if (name === "chapters" && value < 0) return;

    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new genre
  const handleAddGenre = () => {
    if (newGenre.trim() && !selectedGenres.includes(newGenre) && !/\d/.test(newGenre)) {
      setSelectedGenres([...selectedGenres, newGenre.trim()]);
      setNewGenre("");
      setFormErrors((prev) => ({ ...prev, genres: "" }));
    } else {
      setFormErrors((prev) => ({ ...prev, genres: "Only words allowed for genres" }));
    }
  };

  // Remove a genre
  const handleRemoveGenre = (genre) => {
    setSelectedGenres(selectedGenres.filter((g) => g !== genre));
  };

  // Validation checks
  const validateForm = () => {
    let valid = true;
    let errors = {};

    if (!userData.name.trim()) {
      errors.name = "Name is required";
      valid = false;
    }

    if (!userData.interest.trim()) {
      errors.interest = "Interest is required";
      valid = false;
    }

    if (selectedGenres.length === 0) {
      errors.genres = "At least one genre should be selected";
      valid = false;
    }

    if (userData.age < 0) {
      errors.age = "Age cannot be negative";
      valid = false;
    }

    if (userData.characters < 0) {
      errors.characters = "Characters cannot be negative";
      valid = false;
    }

    if (userData.places < 0) {
      errors.places = "Places cannot be negative";
      valid = false;
    }

    if (userData.chapters < 0) {
      errors.chapters = "Chapters cannot be negative";
      valid = false;
    }

    setFormErrors(errors);
    return valid;
  };

  // Handle Generate button click
  const handleGenerate = () => {
    if (validateForm()) {
      console.log("User Data:", userData);
      console.log("Selected Genres:", selectedGenres);
    }
  };

  return (
    <SemiPreparedWrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            value={userData.name}
            onChange={handleInputChange}
          />
          {formErrors.name && <span>{formErrors.name}</span>}
        </FormGroup>

        <FormGroup>
          <label>Age</label>
          <input
            type="number"
            name="age"
            placeholder="Type here"
            value={userData.age}
            onChange={handleInputChange}
            min="0"
          />
          {formErrors.age && <span>{formErrors.age}</span>}
        </FormGroup>

        <FormGroup>
          <label>Interest</label>
          <input
            type="text"
            name="interest"
            value={userData.interest}
            placeholder="Cooking"
            onChange={handleInputChange}
          />
          {formErrors.interest && <span>{formErrors.interest}</span>}
        </FormGroup>

        <FormGroup>
          <label>How many Characters?</label>
          <input
            type="number"
            name="characters"
            placeholder="03"
            value={userData.characters}
            onChange={handleInputChange}
            min="0"
          />
          {formErrors.characters && <span>{formErrors.characters}</span>}
        </FormGroup>

        <FormGroup>
          <label>How many Chapters?</label>
          <input
            type="number"
            name="chapters"
            placeholder="03"
            value={userData.chapters}
            onChange={handleInputChange}
            min="0"
          />
          {formErrors.chapters && <span>{formErrors.chapters}</span>}
        </FormGroup>

        <FormGroup>
          <label>How many Places?</label>
          <input
            type="number"
            name="places"
            placeholder="03"
            value={userData.places}
            onChange={handleInputChange}
            min="0"
          />
          {formErrors.places && <span>{formErrors.places}</span>}
        </FormGroup>

        <FormGroup>
          <label>Select Genre</label>
          <div className="genre-container">
            {selectedGenres.map((genre) => (
              <button
                key={genre}
                type="button"
                className="genre"
                onClick={() => handleRemoveGenre(genre)}
              >
                {genre} ✕
              </button>
            ))}
            <div className="add-genre">
              <input
                type="text"
                placeholder="Enter Genre"
                value={newGenre}
                onChange={(e) => setNewGenre(e.target.value)}
              />
              <button type="button" onClick={handleAddGenre}>
                +
              </button>
            </div>
          </div>
          {formErrors.genres && <span>{formErrors.genres}</span>}
        </FormGroup>

        <SemiButton type="button" onClick={handleGenerate}>
          Generate
        </SemiButton>
      </form>
    </SemiPreparedWrapper>
  );
};

export default UnPreparedUsers;
