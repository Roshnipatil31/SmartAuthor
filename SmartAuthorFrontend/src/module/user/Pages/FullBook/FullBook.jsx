import React, { useState } from 'react';
import { FullBookContainer, LeftSide, RightSide, Button } from './FullBook.styles';
import BooksOrientation from '../../Components/FullBookComponents/BooksOrientation/BooksOrientation';
import SingleBookContent from '../../Components/FullBookComponents/SingleBookContent/SingleBookContent';

const FullBook = () => {
  const [orientation, setOrientation] = useState('portrait');
  const [viewPage, setViewPage] = useState(1);

  return (
    <FullBookContainer>
      <LeftSide>
        <BooksOrientation 
          orientation={orientation} 
          setOrientation={setOrientation} 
          setViewPage={setViewPage} 
        />
      </LeftSide>
      <RightSide>
        <SingleBookContent viewPage={viewPage} />
      </RightSide>
    </FullBookContainer>
  );
};

export default FullBook;
