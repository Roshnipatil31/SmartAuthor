import React from 'react'
import { MdOutlineImage } from "react-icons/md";
import {
  UploadCoverWapper, 
  UploadCoverContainer, 
  AuthorName, 
  UploadCoverButton,
  UploadButton
} from "./UploadCover.style";

const UploadCover = () => {
  const Authorname = "Gourav Kumar";
  return (
    <UploadCoverWapper>
      <UploadCoverContainer>
        <AuthorName>{Authorname}</AuthorName>
        <UploadCoverButton>
          <MdOutlineImage className='UploadIcon' />
          <span className='AddCover'>+ Add Cover</span>
        </UploadCoverButton>
        <UploadButton>Upload </UploadButton>
      </UploadCoverContainer>
    </UploadCoverWapper>
  )
}

export default UploadCover
