import React, { useState } from "react";
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
import { useNavigate } from "react-router-dom";
import SemiPrapared from "../../Pages/SemiPrepared/SemiPrapared"; // Import the modal component

const GenerateBooks = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
  const navigate = useNavigate();

  const handleClick = (route) => {
    if (route === "/semipreparedPage") {
      setIsModalOpen(true); // Open modal when second item is clicked
    } else {
      navigate(route);
    }
  };

  return (
    <GenerateBooksWapper>
      <GenerateBooksHeader>
        <GenerateBooksTitle>
          "AI-powered writing: Create, refine, and publish your book effortlessly."
        </GenerateBooksTitle>
      </GenerateBooksHeader>
      <GeneratebooksContent>
        {[
          {
            id: 1,
            title: "Write your Book",
            description: "Draft Your Own Tale",
            icon: <IoMdAdd className="add-icon" />,
            route: "/dashboard/blankPage",
          },
          {
            id: 2,
            title: "Start your story together we finish",
            description: "Write your story, we will complete your story",
            icon: <TbEdit className="add-icon" />,
            route: "/semipreparedPage",
          },
          {
            id: 3,
            title: "Generate Your Book in 4 clicks",
            description: "AI-Generated Book Creation",
            icon: <img src={Aiplus} alt="Aiplus" className="add-icon" />,
            route: "/unpreparedPage",
          },
        ].map((item) => (
          <GenerateBook key={item.id}>
            <GenerateIcon onClick={() => handleClick(item.route)}>
              {item.icon}
            </GenerateIcon>
            <GenerateParagraph>
              <GenerateIconTitle>{item.title}</GenerateIconTitle>
              <GenerateIconDescription>{item.description}</GenerateIconDescription>
            </GenerateParagraph>
          </GenerateBook>
        ))}
      </GeneratebooksContent>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <SemiPrapared />
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </GenerateBooksWapper>
  );
};

export default GenerateBooks;
