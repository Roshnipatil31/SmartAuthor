import React, { useState } from "react";
import { 
  BookCoverOptionsWrapper, 
  BookCoverOptionsImages, 
  SelectCoverTitle, 
  CoverImage, 
  OptionTagsContainer, 
  OptionTag, 
  TalkToContainer, 
  SmartAiButton,
  TalkAI,
  KeywordInput
} from "./BookCoverOptions.style";
import book1 from "../../../../../assets/Book1.jpg";
import book2 from "../../../../../assets/Book2.jpg";
import book3 from "../../../../../assets/Book3.jpg";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

const BookCoverOptions = ({setSelectedCover}) => {
  const [selectedCover] = useState(null);
  const [selectedTags, setSelectedTags] = useState(["Mystery", "Magic", "Minimal", "Abstract"]);

  const covers = [
    { id: 1, src: book1, alt: "Book Cover 1" },
    { id: 2, src: book2, alt: "Book Cover 2" },
    { id: 3, src: book3, alt: "Book Cover 3" },
  ];

  const tags = ["Mystery", "Magic", "Minimal", "Abstract", "Creative", "Horror"];

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleCoverSelect = (id) => {
    setSelectedCover(covers.find((cover) => cover.id === id)?.src || null);
  };

  return (
    <BookCoverOptionsWrapper>
      <SelectCoverTitle>Select your Cover</SelectCoverTitle>
      <BookCoverOptionsImages>
        {covers.map((cover) => (
          <CoverImage
            key={cover.id}
            src={cover.src}
            alt={cover.alt}
            $selected={selectedCover === cover.id}
            onClick={() => handleCoverSelect(cover.id)}
          />
        ))}
      </BookCoverOptionsImages>
      <OptionTagsContainer>
        {tags.map((tag) => (
          <OptionTag
            key={tag}
            $selected={selectedTags.includes(tag)}
            onClick={() => toggleTag(tag)}
          >
            <span>{tag}</span> <span>{selectedTags.includes(tag) ? <IoIosClose /> : <AiFillPlusCircle />}</span>
          </OptionTag>
        ))}
      </OptionTagsContainer>
      <TalkAI>
      <TalkToContainer>
        <span>Talk To:</span>
        <SmartAiButton>Our Smart AI</SmartAiButton>
      </TalkToContainer>
      <hr className="line"/>
      <KeywordInput placeholder="Add your Keywords" />
      </TalkAI>
    </BookCoverOptionsWrapper>
  );
};

export default BookCoverOptions;
