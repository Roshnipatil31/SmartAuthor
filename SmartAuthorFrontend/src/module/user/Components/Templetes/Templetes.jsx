import React from "react";
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
            ac facilisis metus ipsum ut velit.
            Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.`,
});

const Templetes = () => {
  return (
    <TempletesWapper>
      <TempletesHeader>
        <TempletesTitle>Templates</TempletesTitle>
      </TempletesHeader>
      <TemplatesContainer>
        {templatesData.map((template, index) => (
          <TemplateCard key={index}>
            <TemplateTitle>{template.title}</TemplateTitle>
            <TemplateContent>{template.content}</TemplateContent>
            <TemplateFooter>Write-up Template 1</TemplateFooter>
          </TemplateCard>
        ))}
      </TemplatesContainer>
    </TempletesWapper>
  );
};

export default Templetes;
