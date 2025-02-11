import React from 'react';
import { OrientationContainer, Title, SubTitle, Select, ChapterList, Chapter, EditButton, DeviceContainer, ViewPageContainer, ViewPageOption } from './BooksOrientation.styles';

const BooksOrientation = ({ orientation, setOrientation, setViewPage }) => {
  const handleOrientationChange = (e) => {
    setOrientation(e.target.value);
  };

  const handlePageChange = (page) => {
    setViewPage(page);
  };

  return (
    <OrientationContainer>
      <Title>Sneha Gadkar</Title>
      <SubTitle>Book Title</SubTitle>
      
      {/* Device Selector */}
      <DeviceContainer>
        <p>Device</p>
        <Select>
          <option value="Tablet">Tablet</option>
          <option value="Phone">Phone</option>
        </Select>
      </DeviceContainer>
      
      {/* Orientation Toggle */}
      <div>
        <p>Orientation</p>
        <div>
          <input type="radio" value="portrait" checked={orientation === 'portrait'} onChange={handleOrientationChange} /> Portrait
          <input type="radio" value="landscape" checked={orientation === 'landscape'} onChange={handleOrientationChange} /> Landscape
        </div>
      </div>

      {/* View Page Selector */}
      <ViewPageContainer>
        <p>View Page</p>
        <div>
          <ViewPageOption />
          <ViewPageOption />
          <ViewPageOption />
        </div>
      </ViewPageContainer>

      {/* Contents List */}
      <ChapterList>
        <p>Contents</p>
        {[...Array(10).keys()].map((i) => (
          <Chapter key={i} onClick={() => handlePageChange(i + 1)}>
            Chapter {i + 1}
          </Chapter>
        ))}
      </ChapterList>

      <EditButton>Edit Cover page</EditButton>
    </OrientationContainer>
  );
};

export default BooksOrientation;


