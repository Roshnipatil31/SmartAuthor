import React, { useState, useEffect } from "react";
import {
  EditListChaptersWapper,
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
import { GiHamburgerMenu } from "react-icons/gi";
import { FiChevronDown, FiSearch, FiBook, FiFileText } from "react-icons/fi";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import BrainstormingTag from "../Brainstorming/BrainstormingTag"; // Import Feedback component
import { useNavigate } from "react-router-dom";
 
const EditListChapters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.toggle("blur-background", isSidebarOpen);
  }, [isSidebarOpen]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
 
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
 
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
 
  const handleOpenModals = () => {
    setIsModalOpen(true);
  };
 
  return (
    <EditListChaptersWapper>
         {/* Sidebar Toggle Button */}
         <HamburgerButton onClick={toggleSidebar}>
        <GiHamburgerMenu size={24} />
      </HamburgerButton>

      {/* Sidebar Overlay */}
      {isSidebarOpen && <SidebarOverlay onClick={toggleSidebar} />}
    <SidebarContainer className={isSidebarOpen ? "open" : ""}>
      <UserName>Sneha Gadkar</UserName>
     
      <ButtonGroup>
        <StyledButton>+ Add new</StyledButton>
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
        <Tag onClick={handleOpenModals}>Psychiatrist-Inspired</Tag>
      </TagContainer>
    </SidebarContainer>
    {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
          <div className="circle1"></div>
         <div className="circle2"></div>
        <div className="circle3"></div>
            <BrainstormingTag />
            <button className="close-button" onClick={handleCloseModal}>
              x
            </button>
          </div>
        </div>
      )}
    </EditListChaptersWapper>
  );
};
 
export default EditListChapters;