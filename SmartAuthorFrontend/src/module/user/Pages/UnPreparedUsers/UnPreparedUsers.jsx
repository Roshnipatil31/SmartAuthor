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

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  // Add a new genre
  const handleAddGenre = () => {
    if (newGenre.trim() && !selectedGenres.includes(newGenre)) {
      setSelectedGenres([...selectedGenres, newGenre.trim()]);
      setNewGenre("");
    }
  };

  // Remove a genre
  const handleRemoveGenre = (genre) => {
    setSelectedGenres(selectedGenres.filter((g) => g !== genre));
  };

  // Handle Generate button click
  const handleGenerate = () => {
    console.log("User Data:", userData);
    console.log("Selected Genres:", selectedGenres);
  };

  return (
    <SemiPreparedWrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        <FormGroup>
          <label>Your Name?</label>
          <input
            type="text"
            name="name"
            placeholder="Type here"
            value={userData.name}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Age?</label>
          <input
            type="number"
            name="age"
            placeholder="Type here"
            value={userData.age}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <label>Interest?</label>
          <input
            type="text"
            name="interest"
            value={userData.interest}
            placeholder="Cooking"
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <label>How many Characters?</label>
          <input
            type="number"
            name="characters"
            placeholder="03"
            value={userData.characters}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <label>How many Chapters?</label>
          <input
            type="number"
            name="chapters"
            placeholder="03"
            value={userData.chapters}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <label>How many Places?</label>
          <input
            type="number"
            name="places"
            placeholder="03"
            value={userData.places}
            onChange={handleInputChange}
          />
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
        </FormGroup>

        <SemiButton type="button" onClick={handleGenerate}>
          Generate
        </SemiButton>
      </form>
    </SemiPreparedWrapper>
  );
};

export default UnPreparedUsers;
