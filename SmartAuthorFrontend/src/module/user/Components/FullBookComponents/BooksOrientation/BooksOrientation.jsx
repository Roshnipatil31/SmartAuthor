import React, { useState } from 'react';
import { LuRectangleVertical } from "react-icons/lu"; // Full Page Icon
import { FiColumns, FiGrid } from "react-icons/fi"; // Two Pages & Grid Icons
import { IoPhonePortraitSharp } from "react-icons/io5"; // Portrait Icon
import { MdStayCurrentLandscape } from "react-icons/md"; // Landscape Icon
import { RiArrowDropRightLine, RiArrowDropDownLine } from "react-icons/ri"; // Expand/Collapse Icons
import {
  OrientationContainer, Title, Select, ChapterList, Chapter, EditButton,
  DeviceContainer, ViewPageContainer, ViewPageOption, Orientation, ContentsHeader
} from './BooksOrientation.styles';

const BooksOrientation = ({ orientation, setOrientation, setViewPage }) => {
  const [showChapters, setShowChapters] = useState(false);

  const handleOrientationChange = (value) => {
    setOrientation(value);
  };

  const handlePageChange = (page) => {
    setViewPage(page);
  };

  return (
    <OrientationContainer>
      <Title>Sneha Gadkar</Title>

      {/* Device and Orientation Selector */}
      <DeviceContainer>
        <div>
          <p>Device</p>
          <Select onChange={(e) => setOrientation(e.target.value)}>
            <option value="Tablet">Tablet</option>
            <option value="Phone">Phone</option>
          </Select>
        </div>

        <Orientation>
          <p>Orientation</p>
          <IoPhonePortraitSharp 
            onClick={() => handleOrientationChange('portrait')} 
            style={{ cursor: 'pointer', fontSize: '30px', marginRight: '10px'}} 
          />
          <MdStayCurrentLandscape 
            onClick={() => handleOrientationChange('landscape')} 
            style={{ cursor: 'pointer', fontSize: '30px' }} 
          />
        </Orientation>
      </DeviceContainer>

      {/* View Page Selector */}
      <ViewPageContainer>
        <p>View Page</p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <ViewPageOption onClick={() => handlePageChange(1)}><LuRectangleVertical /></ViewPageOption>
          <ViewPageOption onClick={() => handlePageChange(2)}><FiColumns /></ViewPageOption>
          <ViewPageOption onClick={() => handlePageChange(3)}><FiGrid /></ViewPageOption>
        </div>
      </ViewPageContainer>

      {/* Edit Cover Page Button */}
      <EditButton>Edit Cover page</EditButton>

      {/* Contents List */}
      <ChapterList>
        <ContentsHeader onClick={() => setShowChapters(!showChapters)}>
          {showChapters ? <RiArrowDropDownLine size={24} /> : <RiArrowDropRightLine size={24} />}
          <p>Contents</p>
        </ContentsHeader>
        {showChapters && [...Array(10).keys()].map((i) => (
          <Chapter key={i} onClick={() => handlePageChange(i + 1)}>
            Chapter {i + 1}
          </Chapter>
        ))}
      </ChapterList>
    </OrientationContainer>
  );
};

export default BooksOrientation;
