import React from "react";
import {
    GenerateBooksWapper,
    GenerateBooksHeader,
    GenerateBooksTitle,
    GeneratebooksContent,
    GenerateBook,
    GenerateIcon,
    GenerateParagraph,
    GenerateIconTitle,
    GenerateIconDescription
} from "./GenerateBooks.style";
import { IoMdAdd } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import Aiplus from "../../../../assets/unprepared.svg"

const GenerateBooks = () => {
   const  genarate =[
        {
            id:1,
            title:"Write your Book",
            description:"Draft Your Own Tale"
        },
        {
            id:2,
            title:"Write your Book",
            description:"Draft Your Own Tale"
        },
        {
            id:3,
            title:"Write your Book",
            description:"Draft Your Own Tale"
        }

    ]
  return (
    <GenerateBooksWapper>
      <GenerateBooksHeader>
        <GenerateBooksTitle>
          "AI-powered writing: Create, refine, and publish your book effortlessly."
        </GenerateBooksTitle>
      </GenerateBooksHeader>
      <GeneratebooksContent>
        {genarate.map((item) => (
            <GenerateBook>
            <GenerateIcon>
                <IoMdAdd className="add-icon" />
            </GenerateIcon>
            <GenerateParagraph>
            <GenerateIconTitle>Write your Book</GenerateIconTitle>
            <GenerateIconDescription> Draft Your Own Tale </GenerateIconDescription>
            </GenerateParagraph>
        </GenerateBook>
        ))}
      </GeneratebooksContent>
    </GenerateBooksWapper>
  );
};

export default GenerateBooks;
