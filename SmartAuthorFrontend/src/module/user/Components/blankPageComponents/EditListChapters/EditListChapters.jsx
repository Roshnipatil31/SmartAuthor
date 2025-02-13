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
import {
  FiChevronDown,
  FiChevronRight,
  FiSearch,
  FiBook,
  FiFileText,
} from "react-icons/fi";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { GoPlus } from "react-icons/go";
import BrainstormingTag from "../Brainstorming/BrainstormingTag"; // Import Feedback component
import { useNavigate } from "react-router-dom";

const EditListChapters = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isManuscriptOpen, setIsManuscriptOpen] = useState(true); // Control Manuscript dropdown
  const [isElementsOpen, setIsElementsOpen] = useState(true); // Control Elements dropdown
  const navigate = useNavigate();

  // Mock chapters data
  const chapters = [
    { id: 1, title: "Chapter 1: The Beginning" },
    { id: 2, title: "Chapter 2: The Journey" },
    { id: 3, title: "Chapter 3: The Twist" },
    { id: 4, title: "Chapter 4: The Resolution" },
    { id: 5, title: "Chapter 5: The Conclusion" },
    { id: 6, title: "Chapter 6: The End" },
  ];

  useEffect(() => {
    document.body.classList.toggle("blur-background", isSidebarOpen);
  }, [isSidebarOpen]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const toggleManuscript = () => setIsManuscriptOpen(!isManuscriptOpen);
  const toggleElements = () => setIsElementsOpen(!isElementsOpen);

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
          <StyledButton>
            <HiOutlinePaintBrush /> Boards
          </StyledButton>
        </ButtonGroup>

        <EditCoverButton onClick={() => navigate("/BookCover")}>
          Edit Cover page
        </EditCoverButton>

        {/* Manuscript Section */}
        <Section>
          <SectionTitle onClick={toggleManuscript}>
            <IconWrapper>
              {isManuscriptOpen ? <FiChevronDown /> : <FiChevronRight />}
            </IconWrapper>
            <FiBook /> Manuscript
          </SectionTitle>

          {isManuscriptOpen &&
          chapters.map((chapter) => (
            <Item key={chapter.id}>
              <FiFileText /> {chapter.title}
            </Item>
          )) 
          }
        </Section>

        {/* Elements Section */}
        <Section>
          <SectionTitle onClick={toggleElements}>
            <IconWrapper>
              {isElementsOpen ? <FiChevronDown /> : <FiChevronRight />}
            </IconWrapper>
            <FiBook /> Elements
          </SectionTitle>

          {isElementsOpen &&
            chapters.map((chapter) => (
              <Item key={chapter.id}>
                <FiFileText /> {chapter.title}
              </Item>
            ))}
        </Section>

        {/* Tags Section */}
        <TagContainer>
          <Tag onClick={handleOpenModal}>Brainstorming</Tag>
          <Tag onClick={handleOpenModal}>Psychiatrist-Inspired</Tag>
        </TagContainer>
      </SidebarContainer>

      {/* Modal for Brainstorming */}
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
