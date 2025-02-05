import React, { useCallback, useMemo, useState, useRef } from "react";
import { createEditor, Transforms, Editor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import {
  TextEditorWrapper,
  TextEditComponents,
  TextSize,
  TextFamily,
  TextFontSize,
  TextIndex,
} from "./TextEditor.style";
import { FaBold, FaItalic, FaUnderline } from "react-icons/fa";
import { RiAttachment2 } from "react-icons/ri";

const TextEditor = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const fileInputRef = useRef(null);
  const initialValue = [
    {
      type: "paragraph",
      children: [{ text: "" }],
    },
  ];
  const [value, setValue] = useState(initialValue);
  const [fontSize, setFontSize] = useState(11);

  const handlePlus = () => setFontSize((size) => size + 1);
  const handleMinus = () => setFontSize((size) => Math.max(1, size - 1));

  const toggleFormat = (format) => {
    const isActive = isFormatActive(editor, format);
    if (isActive) {
      Editor.removeMark(editor, format);
    } else {
      Editor.addMark(editor, format, true);
    }
  };

  const isFormatActive = (editor, format) => {
    const marks = Editor.marks(editor);
    return marks ? marks[format] === true : false;
  };

  const handleChange = useCallback((newValue) => {
    setValue(newValue);
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      const newNode = {
        type: "link",
        url: fileURL,
        children: [{ text: `${file.name}` }],
      };
  
      // Insert the file link node
      Transforms.insertNodes(editor, newNode);
  
      // Add a non-breaking space after the link to give space after it
      Transforms.insertText(editor, "\u00A0");
  
      // Insert a new empty text node (paragraph) to continue writing normally
      Transforms.insertNodes(editor, {
        type: "paragraph",
        children: [{ text: "" }],
      });
    }
  };
  

//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const fileURL = URL.createObjectURL(file);
//       const newNode = {
//         type: "link",
//         url: fileURL,
//         children: [{ text: file.name }],
//       };
//       Transforms.insertNodes(editor, newNode);
//     }
//   };

  return (
    <TextEditorWrapper>
      <TextEditComponents>
        <TextSize>
          <select name="TextSize" id="TextSize">
            <option value="Normal">Normal</option>
            <option value="Heading1">Heading 1</option>
            <option value="Heading2">Heading 2</option>
            <option value="Heading3">Heading 3</option>
          </select>
        </TextSize>
        <TextFamily>
          <select name="TextFamily" id="TextFamily">
            <option value="Poppins">Poppins</option>
            <option value="Arial">Arial</option>
            <option value="Inter">Inter</option>
            <option value="Comic Sans">Comic Sans</option>
          </select>
        </TextFamily>
        <TextFontSize>
          <span onClick={handlePlus}>+</span>
          <span className="fontSize">{fontSize}</span>
          <span onClick={handleMinus}>-</span>
        </TextFontSize>
        <TextIndex>
          <button className="SlateButton" onClick={() => toggleFormat("bold")}>
            <FaBold />
          </button>
          <button className="SlateButton" onClick={() => toggleFormat("italic")}>
            <FaItalic />
          </button>
          <button className="SlateButton" onClick={() => toggleFormat("underline")}>
            <FaUnderline />
          </button>
          <button className="SlateButton" onClick={() => fileInputRef.current.click()}>
            <RiAttachment2 />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileUpload}
            accept=".txt,.pdf,.doc,.docx"
          />
        </TextIndex>
      </TextEditComponents>
      <Slate editor={editor} value={value} onChange={handleChange} initialValue={initialValue}>
        <Editable
          className="editable"
          style={{ fontSize: `${fontSize}px` }}
          renderElement={(props) => <Element {...props} />}
          renderLeaf={(props) => <Leaf {...props} />}
          placeholder="Enter some text..."
          spellCheck
          autoFocus
        />
      </Slate>
    </TextEditorWrapper>
  );
};

const Element = ({ attributes, children, element }) => {
    if (element.type === "link") {
      return (
      
        <a
          {...attributes}
          href={element.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "underline", color: "blue" }} // Remove link styling
          onClick={(e) => {
            e.preventDefault();
            window.open(element.url, "_blank");
          }}
        >
          {children} 
        </a>
        
      );
    }
    return <p {...attributes}>{children}</p>;
  };
  

// const Element = ({ attributes, children, element }) => {
//     if (element.type === "link") {
//       return (
//         <a
//           {...attributes}
//           href={element.url}
//           target="_blank"
//           rel="noopener noreferrer"
//           style={{ textDecoration: "underline", cursor: "pointer",  }}
//           onClick={(e) => {
//             e.preventDefault();
//             window.open(element.url, "_blank");
//           }}
//         >
//           {children}
//         </a>
//       );
//     }
//     return <p {...attributes}>{children}</p>;
//   };
  
const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }
  if (leaf.italic) {
    children = <em>{children}</em>;
  }
  if (leaf.underline) {
    children = <u>{children}</u>;
  }
  return <span {...attributes}>{children}</span>;
};

export default TextEditor;
