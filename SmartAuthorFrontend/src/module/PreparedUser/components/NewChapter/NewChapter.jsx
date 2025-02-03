import React from "react";
import {
    NewChapterWrapper,
    NewChapterContainer,
    NewChapterEditBook,
    NewChapterButtons,
    ExportButton,
    PreviewButton,
} from "./NewChapter.style";
import TextEditor from "../TextEditor/TextEditor";

const NewChapter = () => {
  return (
    <NewChapterWrapper>
      <NewChapterContainer>
        <NewChapterEditBook>Edit Book Details</NewChapterEditBook>
        <NewChapterButtons>
          <ExportButton>Export As</ExportButton>
          <PreviewButton>Preview</PreviewButton>
        </NewChapterButtons>
      </NewChapterContainer>
      <TextEditor />
    </NewChapterWrapper>
  );
};

export default NewChapter;
