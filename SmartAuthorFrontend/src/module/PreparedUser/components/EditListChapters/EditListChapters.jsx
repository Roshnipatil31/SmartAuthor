import React, { useState, useEffect } from "react";
import { FiChevronDown, FiSearch, FiBook, FiFileText } from "react-icons/fi";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import BrainstormingTag from "../Brainstorming/BrainstormingTag";
import { useNavigate } from "react-router-dom";
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
    if (isSidebarOpen) {
      document.body.classList.add("blur-background");
    } else {
      document.body.classList.remove("blur-background");
    }
  }, [isSidebarOpen]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <HamburgerButton onClick={toggleSidebar}>
        <GiHamburgerMenu size={24} />
      </HamburgerButton>
      {isSidebarOpen && <SidebarOverlay onClick={toggleSidebar} />}
      <SidebarContainer className={isSidebarOpen ? "open" : ""}>
        <UserName>Sneha Gadkar</UserName>
        <ButtonGroup>
          <StyledButton>+ Add new</StyledButton>
          <StyledButton>
            <HiOutlinePaintBrush /> Boards
          </StyledButton>
        </ButtonGroup>
        <EditCoverButton>Edit Cover page</EditCoverButton>
        <Section>
          <SectionTitle>
            <FiSearch />
            <IconWrapper>
              <FiChevronDown />
            </IconWrapper>
            <FiBook /> Manuscript
            <IconWrapper>
              <FiSearch />
            </IconWrapper>
          </SectionTitle>
          <Item>
            <FiFileText /> Boss Chapter 1
          </Item>
          <Section>
            <SectionTitle>
              <IconWrapper>
                <FiChevronDown />
              </IconWrapper>
              <FiBook /> Elements
              <IconWrapper>
                <FiSearch />
              </IconWrapper>
            </SectionTitle>
            <Item>
              <FiFileText /> Character 1
            </Item>
          </Section>
        </Section>
        <TagContainer>
          <Tag onClick={handleOpenModal}>Brainstorming</Tag>
          <Tag onClick={handleOpenModal}>Psychiatrist-Inspired</Tag>
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
    </>
  );
};

export default EditListChapters;