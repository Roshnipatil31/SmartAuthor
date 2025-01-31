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
import Aiplus from "../../../../assets/unprepared.svg";

const GenerateBooks = () => {
   const genarate = [
        {
            id: 1,
            title: "Write your Book",
            description: "Draft Your Own Tale",
            icon: <IoMdAdd className="add-icon" />
        },
        {
            id: 2,
            title: "Start your story together we finish",
            description: "write your story we will complete your story",
            icon: <TbEdit className="add-icon" />
        },
        {
            id: 3,
            title: "Generate Your Book in 4 clicks",
            description: "AI-Generated Book Creation",
            icon: <img src={Aiplus} alt="Aiplus" className="add-icon" />
        }
    ];

    return (
        <GenerateBooksWapper>
            <GenerateBooksHeader>
                <GenerateBooksTitle>
                    "AI-powered writing: Create, refine, and publish your book effortlessly."
                </GenerateBooksTitle>
            </GenerateBooksHeader>
            <GeneratebooksContent>
                {genarate.map((item) => (
                    <GenerateBook key={item.id}>
                        <GenerateIcon>
                            {item.icon}
                          {/* <span className="add-icon">{item.icon}</span> */}
                        </GenerateIcon>
                        <GenerateParagraph>
                            <GenerateIconTitle>{item.title}</GenerateIconTitle>
                            <GenerateIconDescription>{item.description}</GenerateIconDescription>
                        </GenerateParagraph>
                    </GenerateBook>
                ))}
            </GeneratebooksContent>
        </GenerateBooksWapper>
    );
};

export default GenerateBooks;
