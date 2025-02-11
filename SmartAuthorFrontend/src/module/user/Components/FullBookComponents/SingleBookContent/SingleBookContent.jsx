import React, { useState } from 'react';
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

  return (
    <SingleBookContentWrapper>
      {/* Scrollable Section containing Book Details & Pages */}
      <ScrollableSection>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <DownloadButton>Download Book</DownloadButton>
      </div>

        <BookTitle>Book Title: The Art of Learning</BookTitle>
        <SubTitle>Sub-Title: Mastering the Craft</SubTitle>
        <AboutAuthor>
          About the Author: John Doe is a renowned educator with over 20 years of experience in teaching and research.
        </AboutAuthor>

        {/* Page Display Section */}
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

      {/* Page Navigation */}
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
