import React from "react";
import { CategoryContainer, CategoryCard, CategoryImage, CategoryName } from "./BookCategory.styles";

// Import images
import BookCategory1 from "../../../../../assets/BookCategory1.jpg";
import BookCategory2 from "../../../../../assets/BookCategory2.jpg";
import BookCategory3 from "../../../../../assets/BookCategory3.jpg";
import BookCategory4 from "../../../../../assets/BookCategory4.jpg";
import BookCategory5 from "../../../../../assets/BookCategory5.jpg";
import BookCategory6 from "../../../../../assets/BookCategory6.jpg";

const categories = [
  { id: 1, name: "Science Fiction", image: BookCategory1 },
  { id: 2, name: "Adventure", image: BookCategory2 },
  { id: 3, name: "Romance", image: BookCategory3 },
  { id: 4, name: "Horror", image: BookCategory4 },
  { id: 5, name: "Fantasy", image: BookCategory5 },
  { id: 6, name: "Mystery", image: BookCategory6 }
];

const BookCategory = () => {
  return (
    <CategoryContainer>
      {categories.map((category) => (
        <CategoryCard key={category.id}>
          <CategoryImage src={category.image} alt={category.name} />
          <CategoryName>{category.name}</CategoryName>
        </CategoryCard>
      ))}
    </CategoryContainer>
  );
};

export default BookCategory;
