import React, { useState } from "react";
import EditBookDetails from "../EditBookDetails/EditBookDetails";
import AddChapter from "../../Addchapter/Addchapter"; // Import AddChapter component
import {
  NewChapterWrapper,
  NewChapterContainer,
  NewChapterEditBook,
  NewChapterButtons,
  ExportButton,
  PreviewButton,
  ButtonContainer,
  ModalOverlay, // New styles for modal
  ModalContent,
} from "./NewChapter.style";
import TextEditor from "../TextEditor/TextEditor";

const NewChapter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddChapterOpen, setIsAddChapterOpen] = useState(false); // New state for AddChapter modal

  return (
    <NewChapterWrapper>
      <NewChapterContainer>
        <NewChapterEditBook onClick={() => setIsModalOpen(true)}>
          Edit Book Details
        </NewChapterEditBook>
        <NewChapterButtons>
          <ExportButton>Export As</ExportButton>
          <PreviewButton>Preview</PreviewButton>
        </NewChapterButtons>
      </NewChapterContainer>
      <TextEditor />

      {/* Popup Modal for Editing Book Details */}
      {isModalOpen && <EditBookDetails isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}

      {/* Modal for Add Chapter */}
      {isAddChapterOpen && (
        <ModalOverlay onClick={() => setIsAddChapterOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <AddChapter />
            <button className="close-button" onClick={() => setIsAddChapterOpen(false)}>✖</button>
          </ModalContent>
        </ModalOverlay>
      )}

      <ButtonContainer>
        <div>
          <button type="button" onClick={() => setIsAddChapterOpen(true)} className="AddChapter">
            Add Chapter
          </button>
          <button type="button" className="next">Next</button>
        </div>
        <button className="Regenerate">Regenerate</button>
      </ButtonContainer>
    </NewChapterWrapper>
  );
};

export default NewChapter;
