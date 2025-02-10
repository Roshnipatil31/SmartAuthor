import React, { useState } from "react";
import { 
  SidebarContainer, 
  UserName, 
  ButtonGroup, 
  StyledButton, 
  EditCoverButton, 
  Section, 
  SectionTitle, 
  Item, 
  TagContainer, 
  Tag, 
  IconWrapper 
} from "./EditListChapters.style";
import { FiChevronDown, FiSearch, FiBook, FiFileText } from "react-icons/fi";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import BrainstormingTag from "../Brainstorming/BrainstormingTag"; // Import Feedback component
import { useNavigate } from "react-router-dom";

const EditListChapters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddChapter = () => {
    navigate('/addchapter');  
  };

  return (
    <SidebarContainer>
      <UserName>Sneha Gadkar</UserName>
      
      <ButtonGroup>
        <StyledButton onClick={handleAddChapter}>+ Add new</StyledButton>
        <StyledButton><HiOutlinePaintBrush /> Boards</StyledButton>
      </ButtonGroup>

      <EditCoverButton>Edit Cover page</EditCoverButton>

      <Section>
        <SectionTitle>
          <FiSearch />
          <IconWrapper><FiChevronDown /></IconWrapper>
          <FiBook /> Manuscript
          <IconWrapper><FiSearch /></IconWrapper>
        </SectionTitle>
        <Item><FiFileText /> Boss Chapter 1</Item>

        <Section>
          <SectionTitle>
            <IconWrapper><FiChevronDown /></IconWrapper>
            <FiBook /> Elements
            <IconWrapper><FiSearch /></IconWrapper>
          </SectionTitle>
          <Item><FiFileText /> Character 1</Item>
        </Section>
      </Section>

      <TagContainer>
        <Tag onClick={handleOpenModal}>Brainstorming</Tag>
        <Tag>Psychiatrist-Inspired</Tag>
      </TagContainer>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <BrainstormingTag />
            <button className="close-button" onClick={handleCloseModal}>
              x
            </button>
          </div>
        </div>
      )}
    </SidebarContainer>
  );
};

export default EditListChapters;
