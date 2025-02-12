import React from 'react'
import {BookCoverPageWapper} from "./BookCoverPage.style";
import UploadCover from '../../Components/BookCoverComponent/UploadCover/UploadCover';
import BookCoverGenarate from '../../Components/BookCoverComponent/BookCoverGenerate/BookCoverGenarate';
import BookCoverOptions from '../../Components/BookCoverComponent/BookCoverOptions/BookCoverOptions';
import Step from '../../Components/blankPageComponents/StepComponent/StepComponent';

const BookCoverPage = () => {
  return (
    <BookCoverPageWapper>
      <Step currentStep={2} />

      <div style = {{display:"flex"}} >
      <UploadCover />
      <BookCoverGenarate />
      {/* // <BookCoverOptions /> */}
      </div>
    </BookCoverPageWapper>
  )
}

export default BookCoverPage
