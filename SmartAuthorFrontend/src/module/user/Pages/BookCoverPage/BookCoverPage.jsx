import React, {useState} from 'react'
import {BookCoverPageWapper} from "./BookCoverPage.style";
import UploadCover from '../../Components/BookCoverComponent/UploadCover/UploadCover';
import BookCoverGenarate from '../../Components/BookCoverComponent/BookCoverGenerate/BookCoverGenarate';
import BookCoverOptions from '../../Components/BookCoverComponent/BookCoverOptions/BookCoverOptions';
import Step from '../../Components/blankPageComponents/StepComponent/StepComponent';

const BookCoverPage = () => {
    const [selectedCover, setSelectedCover] = useState(null);
  
  return (
    <BookCoverPageWapper>
      <Step currentStep={2} />

      <div style = {{display:"flex"}} >
      <UploadCover />
      <BookCoverGenarate selectedCover={selectedCover} />
      <BookCoverOptions setSelectedCover={setSelectedCover} />
      </div>
    </BookCoverPageWapper>
  )
}

export default BookCoverPage
