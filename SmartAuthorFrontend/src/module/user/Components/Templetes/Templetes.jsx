import React, { useState } from "react";
import {
  TempletesWapper,
  TempletesHeader,
  TempletesTitle,
  TemplatesContainer,
  TemplateCard,
  TemplateFooter,
  TemplateContent,
  TemplateTitle,
} from "./Templetes.style";

const templatesData = Array(5).fill({
  title: "1. Pure Title",
  content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean pharetra, sapien vel placerat sodales, lacus velit suscipit nisl,
            ac facilisis metus ipsum ut velit.`,
});

// Define an array of different font families
const fontFamilies = [
  "Arial, sans-serif",
  "Courier New, monospace",
  "Georgia, serif",
  "Verdana, sans-serif",
  "Tahoma, sans-serif",
];

const Templetes = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateClick = (template, index) => {
    // Only select a template if it's not already selected
    if (selectedTemplate?.index !== index) {
      setSelectedTemplate({ ...template, index });
      console.log(`Template ${index + 1} selected:`, template);
    } else {
      setSelectedTemplate(null); // Deselect the template if clicked again
    }
  };

  return (
    <TempletesWapper>
      <TempletesHeader>
        <TempletesTitle>Templates</TempletesTitle>
      </TempletesHeader>
      <TemplatesContainer>
        {templatesData.map((template, index) => (
          <TemplateCard
            key={index}
            onClick={() => handleTemplateClick(template, index)}
            style={{
              border: selectedTemplate?.index === index ? "2px solid #007BFF" : "none", // Highlight the selected template
              fontFamily: fontFamilies[index % fontFamilies.length], // Apply a different font family for each card
            }}
          >
            <TemplateTitle>{template.title}</TemplateTitle>
            <TemplateContent>{template.content}</TemplateContent>
            <TemplateFooter>Write-up Template</TemplateFooter>
          </TemplateCard>
        ))}
      </TemplatesContainer>
    </TempletesWapper>
  );
};

export default Templetes;
