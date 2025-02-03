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
  GenerateIconDescription,
} from "./GenerateBooks.style";
import { IoMdAdd } from "react-icons/io";
import { TbEdit } from "react-icons/tb";
import Aiplus from "../../../../assets/unprepared.svg";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const GenerateBooks = () => {
  const genarate = [
    {
      id: 1,
      title: "Write your Book",
      description: "Draft Your Own Tale",
      icon: <IoMdAdd className="add-icon" />,
      route: "/dashboard/blankPage", // Adding route for the first item
    },
    {
      id: 2,
      title: "Start your story together we finish",
      description: "Write your story, we will complete your story",
      icon: <TbEdit className="add-icon" />,
      route: "/semipreparedPage", // Adding route for the second item
    },
    {
      id: 3,
      title: "Generate Your Book in 4 clicks",
      description: "AI-Generated Book Creation",
      icon: <img src={Aiplus} alt="Aiplus" className="add-icon" />,
      route: "/unpreparedPage", // Adding route for the third item
    },
  ];

  const navigate = useNavigate(); // Hook to navigate to different pages

  const handleClick = (route) => {
    navigate(route); // Navigate to the page based on the passed route
  };

  return (
    <GenerateBooksWapper>
      <GenerateBooksHeader>
        <GenerateBooksTitle>
          "AI-powered writing: Create, refine, and publish your book
          effortlessly."
        </GenerateBooksTitle>
      </GenerateBooksHeader>
      <GeneratebooksContent>
        {genarate.map((item) => (
          <GenerateBook key={item.id}>
            <GenerateIcon onClick={() => handleClick(item.route)}>
              {item.icon}
            </GenerateIcon>
            <GenerateParagraph>
              <GenerateIconTitle>{item.title}</GenerateIconTitle>
              <GenerateIconDescription>
                {item.description}
              </GenerateIconDescription>
            </GenerateParagraph>
          </GenerateBook>
        ))}
      </GeneratebooksContent>
    </GenerateBooksWapper>
  );
};

export default GenerateBooks;
