import React, { useState } from "react";
import EditBookDetails from "../EditBookDetails/EditBookDetails";
import AddChapter from "../../../user/Components/Addchapter/Addchapter"; // Import AddChapter component
import PreviewPage from "../../../user/Components/Preview/Preview"; // Import PreviewPage component (create this component as needed)
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
import { useNavigate } from "react-router-dom";

const NewChapter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddChapterOpen, setIsAddChapterOpen] = useState(false); // State for AddChapter modal
  const [isPreviewOpen, setIsPreviewOpen] = useState(false); // State for Preview modal

  return (
    <NewChapterWrapper>
      <NewChapterContainer>
        <NewChapterEditBook onClick={() => setIsModalOpen(true)}>
          Edit Book Details
        </NewChapterEditBook>
        <NewChapterButtons>
          <ExportButton>Export As</ExportButton>
          <PreviewButton onClick={() => setIsPreviewOpen(true)}>
            Preview
          </PreviewButton>
        </NewChapterButtons>
      </NewChapterContainer>
      <TextEditor />

      {/* Popup Modal for Editing Book Details */}
      {isModalOpen && (
        <EditBookDetails
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}

      {/* Modal for Add Chapter */}
      {isAddChapterOpen && (
        <ModalOverlay onClick={() => setIsAddChapterOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <AddChapter />
            <button
              className="close-button"
              onClick={() => setIsAddChapterOpen(false)}
            >
              ✖
            </button>
          </ModalContent>
        </ModalOverlay>
      )}

      {/* Modal for Preview Page */}
      {isPreviewOpen && (
        <ModalOverlay onClick={() => setIsPreviewOpen(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <PreviewPage />
            <button
              className="close-button"
              onClick={() => setIsPreviewOpen(false)}
            >
              ✖
            </button>
          </ModalContent>
        </ModalOverlay>
      )}

      <ButtonContainer>
        <div>
          <button
            type="button"
            onClick={() => setIsAddChapterOpen(true)}
            className="AddChapter"
          >
            Add Chapter
          </button>
          <button type="button" className="next">
            Next
          </button>
        </div>
        <button className="Regenerate">Regenerate</button>
      </ButtonContainer>
    </NewChapterWrapper>
  );
};

export default NewChapter;
