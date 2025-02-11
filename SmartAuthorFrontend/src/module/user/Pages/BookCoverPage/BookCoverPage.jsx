import React from 'react'
import {BookCoverPageWapper} from "./BookCoverPage.style";
import UploadCover from '../../Components/BookCoverComponent/UploadCover/UploadCover';
import BookCoverGenarate from '../../Components/BookCoverComponent/BookCoverGenerate/BookCoverGenarate';
import BookCoverOptions from '../../Components/BookCoverComponent/BookCoverOptions/BookCoverOptions';

const BookCoverPage = () => {
  return (
    <BookCoverPageWapper>
      <UploadCover />
      <BookCoverGenarate />
      <BookCoverOptions />
    </BookCoverPageWapper>
  )
}

export default BookCoverPage
