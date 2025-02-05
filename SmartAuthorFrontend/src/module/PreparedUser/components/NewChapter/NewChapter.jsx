// import React from "react";
// import {
//     NewChapterWrapper,
//     NewChapterContainer,
//     NewChapterEditBook,
//     NewChapterButtons,
//     ExportButton,
//     PreviewButton,
// } from "./NewChapter.style";
// import TextEditor from "../TextEditor/TextEditor";

// const NewChapter = () => {
//   return (
//     <NewChapterWrapper>
//       <NewChapterContainer>
//         <NewChapterEditBook>Edit Book Details</NewChapterEditBook>
//         <NewChapterButtons>
//           <ExportButton>Export As</ExportButton>
//           <PreviewButton>Preview</PreviewButton>
//         </NewChapterButtons>
//       </NewChapterContainer>
//       <TextEditor />
//     </NewChapterWrapper>
//   );
// };

// export default NewChapter;

import React, { useState } from "react";
import EditBookDetails from "../EditBookDetails/EditBookDetails";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      <EditBookDetails isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </NewChapterWrapper>
  );
};

export default NewChapter;
