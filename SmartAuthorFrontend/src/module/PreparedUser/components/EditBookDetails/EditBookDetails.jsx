// import React from "react";
// import EditBook from "../../../../assets/EditBook.png"; // Import book cover from assets
// import {
//   ModalOverlay,
//   ModalContainer,
//   CloseButton,
//   ContentWrapper,
//   PreviewSection,
//   BookCover,
//   BookInfo,
//   RightSection,
//   ChapterList,
//   ChapterCard,
//   ButtonsContainer,
//   ExportButton,
//   EditButton,
//   PreviewTitle,
//   CardContainer,
//   Cardm,
// } from "./EditBookDetails.styles";

// const EditBookDetails = ({ isOpen, onClose }) => {
//   if (!isOpen) return null; // Don't render if modal is closed

//   const chapters = [
//     { id: 1, title: "Chapter 1", subtitle: "Title", description: "Sub title" },
//     { id: 2, title: "Chapter 2", subtitle: "Title", description: "Sub title" },
//     { id: 3, title: "Chapter 3", subtitle: "Title", description: "Sub title" },
//     { id: 4, title: "Chapter 4", subtitle: "Title", description: "Sub title" },
//     { id: 5, title: "Chapter 5", subtitle: "Title", description: "Sub title" },
//   ];

//   return (
//     <ModalOverlay>
//       <ModalContainer>
//         <CloseButton onClick={onClose}>&times;</CloseButton>
//         <PreviewTitle>Preview</PreviewTitle>
//         <ContentWrapper>
//           {/* Left Section - Book Preview */}
//           <PreviewSection>
//             <BookCover>
//               <img src={EditBook} alt="Book Cover" />
//             </BookCover>
//             <BookInfo>
//               <h2>Book Name</h2>
//               <p>Subtitle</p>
//               <h4>
//                 <strong>Author Name</strong>
//               </h4>
//             </BookInfo>
//           </PreviewSection>

//           {/* Right Section - Chapters & Buttons */}
//           <RightSection>
//             <ChapterList>
//               {chapters.map((chapter) => (
//                 <ChapterCard key={chapter.id}>
//                   <h3>{chapter.title}</h3>
//                   <p>{chapter.subtitle}</p>
//                   <p>{chapter.description}</p>
//                 </ChapterCard>
//               ))}
//               <ChapterCard className="more-chapters">
//                 {/* <h3>More 24</h3>
//                 <h3>Chapter</h3> */}

//                 <CardContainer>
//                   {/* <Cardm></Cardm> */}
//                   <Cardm></Cardm>
//                   <Cardm></Cardm>
//                   <Cardm>More 24 Chapter</Cardm>
//                 </CardContainer>
//               </ChapterCard>
//             </ChapterList>

//             <ButtonsContainer>
//               <ExportButton onClick={() => alert("Feature coming soon!")}>
//                 Export Book
//               </ExportButton>
//               <EditButton onClick={() => alert("Feature coming soon!")}>
//                 Edit Book
//               </EditButton>
//             </ButtonsContainer>
//           </RightSection>
//         </ContentWrapper>
//       </ModalContainer>
//     </ModalOverlay>
//   );
// };

// export default EditBookDetails;






import React from "react";
import EditBook from "../../../../assets/EditBook.png"; // Import book cover from assets
import {
  ModalOverlay,
  ModalContainer,
  CloseButton,
  ContentWrapper,
  PreviewSection,
  BookCover,
  BookInfo,
  RightSection,
  ChapterList,
  ChapterCard,
  ButtonsContainer,
  ExportButton,
  EditButton,
  PreviewTitle,
  CardContainer,
  Cardm,
} from "./EditBookDetails.styles";

const EditBookDetails = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is closed

  const chapters = [
    { id: 1, title: "Chapter 1", subtitle: "Title", description: "Sub title" },
    { id: 2, title: "Chapter 2", subtitle: "Title", description: "Sub title" },
    { id: 3, title: "Chapter 3", subtitle: "Title", description: "Sub title" },
    { id: 4, title: "Chapter 4", subtitle: "Title", description: "Sub title" },
    { id: 5, title: "Chapter 5", subtitle: "Title", description: "Sub title" },
  ];

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <PreviewTitle>Preview</PreviewTitle>
        <ContentWrapper>
          {/* Left Section - Book Preview */}
          <PreviewSection>
            <BookCover>
              <img src={EditBook} alt="Book Cover" />
            </BookCover>
            <BookInfo>
              <h2>Book Name</h2>
              <p>Subtitle</p>
              <h4>
                <strong>Author Name</strong>
              </h4>
            </BookInfo>
          </PreviewSection>

          {/* Right Section - Chapters & Buttons */}
          <RightSection>
            <ChapterList>
              {chapters.map((chapter) => (
                <ChapterCard key={chapter.id}>
                  <h3>{chapter.title}</h3>
                  <p>{chapter.subtitle}</p>
                  <p>{chapter.description}</p>
                </ChapterCard>
              ))}
              <ChapterCard className="more-chapters">
                <CardContainer>
                  <Cardm></Cardm>
                  <Cardm></Cardm>
                  <Cardm>More 24 Chapter</Cardm>
                </CardContainer>
              </ChapterCard>
            </ChapterList>

            <ButtonsContainer>
              <ExportButton onClick={() => alert("Feature coming soon!")}>
                Export Book
              </ExportButton>
              <EditButton onClick={() => alert("Feature coming soon!")}>
                Edit Book
              </EditButton>
            </ButtonsContainer>
          </RightSection>
        </ContentWrapper>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default EditBookDetails;
