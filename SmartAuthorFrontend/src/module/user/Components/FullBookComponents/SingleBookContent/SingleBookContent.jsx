import React, { useState } from 'react';
import jsPDF from 'jspdf';
import { 
  SingleBookContentWrapper, 
  ScrollableSection, 
  PageContainer, 
  Page, 
  PageHeader, 
  Content, 
  PageNavigation, 
  NavigationButton, 
  BookTitle, 
  SubTitle, 
  AboutAuthor, 
  DownloadButton
} from './SingleBookContent.styles';

const SingleBookContent = ({ viewPage }) => {
  const pagesPerChapter = 15;
  const totalPages = 15 + 10;
  const [currentPage, setCurrentPage] = useState(1);

  const dummyContent = Array.from({ length: totalPages }, (_, index) => 
    `This is dummy content for Page ${index + 1} of Chapter ${viewPage}.`
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleDownload = () => {
    const doc = new jsPDF();
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(14);
    
    doc.text('Book Title: The Art of Learning', 10, 10);
    doc.text('Sub-Title: Mastering the Craft', 10, 20);
    doc.text('About the Author: John Doe is a renowned educator with over 20 years of experience in teaching and research.', 10, 30);
    
    let y = 40;
    dummyContent.forEach((content, index) => {
      doc.text(`Chapter ${viewPage} - Page ${index + 1}`, 10, y);
      y += 10;
      doc.text(content, 10, y, { maxWidth: 180 });
      y += 20;

      if (y > 270) {
        doc.addPage();
        y = 10;
      }
    });

    doc.save('The_Art_of_Learning.pdf');
  };

  return (
    <SingleBookContentWrapper>
      <ScrollableSection>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <DownloadButton onClick={handleDownload}>Download Book</DownloadButton>
        </div>

        <BookTitle>Book Title: The Art of Learning</BookTitle>
        <SubTitle>Sub-Title: Mastering the Craft</SubTitle>
        <AboutAuthor>
          About the Author: John Doe is a renowned educator with over 20 years of experience in teaching and research.
        </AboutAuthor>

        <PageContainer>
          {dummyContent.map((content, index) => (
            <Page key={index}>
              <PageHeader>Chapter {viewPage} - Page {index + 1}</PageHeader>
              <Content>
                <p>{content}</p>
              </Content>
            </Page>
          ))}
        </PageContainer>
      </ScrollableSection>

      <PageNavigation>
        <NavigationButton onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous
        </NavigationButton>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <NavigationButton onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </NavigationButton>
      </PageNavigation>
    </SingleBookContentWrapper>
  );
};

export default SingleBookContent;
