import React, { useState, useEffect } from "react";
import { FiChevronDown, FiSearch, FiBook, FiFileText } from "react-icons/fi";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import BrainstormingTag from "../Brainstorming/BrainstormingTag";
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
  IconWrapper,
  HamburgerButton,
  SidebarOverlay,
} from "./EditListChapters.style";

const EditListChapters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle("blur-background", isSidebarOpen);
  }, [isSidebarOpen]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Sidebar Toggle Button */}
      <HamburgerButton onClick={toggleSidebar}>
        <GiHamburgerMenu size={24} />
      </HamburgerButton>

      {/* Sidebar Overlay */}
      {isSidebarOpen && <SidebarOverlay onClick={toggleSidebar} />}

      {/* Sidebar Container */}
      <SidebarContainer className={isSidebarOpen ? "open" : ""}>
        <UserName>Sneha Gadkar</UserName>

        {/* Buttons */}
        <ButtonGroup>
          <StyledButton>+ Add new</StyledButton>
          <StyledButton>
            <HiOutlinePaintBrush /> Boards
          </StyledButton>
        </ButtonGroup>

        <EditCoverButton>Edit Cover page</EditCoverButton>

        {/* Manuscript Section */}
        <Section>
          <SectionTitle>
            <FiBook /> Manuscript
            <IconWrapper>
              <FiChevronDown />
            </IconWrapper>
          </SectionTitle>
          <Item>
            <FiFileText /> Boss Chapter 1
          </Item>
        </Section>

        {/* Elements Section */}
        <Section>
          <SectionTitle>
            <FiBook /> Elements
            <IconWrapper>
              <FiChevronDown />
            </IconWrapper>
          </SectionTitle>
          <Item>
            <FiFileText /> Character 1
          </Item>
        </Section>

        {/* Tags */}
        <TagContainer>
          <Tag onClick={handleOpenModal}>Brainstorming</Tag>
          <Tag onClick={handleOpenModal}>Psychiatrist-Inspired</Tag>
        </TagContainer>

        {/* Modal */}
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
    </>
  );
};

export default EditListChapters;
