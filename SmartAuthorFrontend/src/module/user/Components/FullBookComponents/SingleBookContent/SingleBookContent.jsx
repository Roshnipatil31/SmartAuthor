import React, { useState } from 'react';
import { SingleBookContentWrapper, Page, PageHeader, Content, PageNavigation, NavigationButton } from './SingleBookContent.styles';

const SingleBookContent = ({ viewPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const pagesPerChapter = 15; // Simulate 15 pages
  const totalPages = pagesPerChapter * 10; // 10 chapters, 15 pages each

  // Dummy data for each page
  const dummyContent = Array.from({ length: totalPages }, (_, index) => 
    `This is dummy content for Page ${index + 1} of Chapter ${viewPage}. It's a placeholder text to simulate content.`
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
      <Page>
        <PageHeader>Chapter {viewPage}</PageHeader>
        <Content>
          <p>{dummyContent[currentPage - 1]}</p>
        </Content>
      </Page>

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
