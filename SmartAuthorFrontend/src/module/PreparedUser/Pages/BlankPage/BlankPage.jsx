import React from 'react'
import Step from '../../../user/Components/StepComponent/StepComponent';
import { BlankPageWrapper } from "./BlankPage.style";
import EditListChapters from '../../components/EditListChapters/EditListChapters';

const BlankPage = () => {
  return (
    <BlankPageWrapper>
      <Step />
      <div className='editListChapters'>
        <EditListChapters />
      </div>
    </BlankPageWrapper>
  )
}

export default BlankPage
