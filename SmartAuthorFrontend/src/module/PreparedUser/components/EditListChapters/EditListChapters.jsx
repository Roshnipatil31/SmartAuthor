import React from "react";
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

const EditListChapters = () => {
  return (
    <SidebarContainer>
      <UserName>Sneha Gadkar</UserName>
      
      <ButtonGroup>
        <StyledButton>+ Add new</StyledButton>
        <StyledButton>📎 Boards</StyledButton>
      </ButtonGroup>

      <EditCoverButton>Edit Cover page</EditCoverButton>

      <Section>
        <SectionTitle>
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
        <Tag>Brainstorming</Tag>
        <Tag>Psychiatrist-Inspired</Tag>
      </TagContainer>
    </SidebarContainer>
  );
};

export default EditListChapters;
