import React, { useCallback, useMemo, useState, useRef } from "react";
import {
  createEditor,
  Transforms,
  Editor,
  Element as SlateElement,
} from "slate";
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
import { HiLink } from "react-icons/hi";
import { FaAlignLeft, FaAlignCenter, FaAlignRight } from "react-icons/fa6";

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

  const [fontFamily, setFontFamily] = useState("");

  const fontFamilies = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Georgia",
    "Courier New",
    "Verdana",
    "Trebuchet MS",
    "Tahoma",
    "Impact",
    "Comic Sans MS",
    "Lucida Console",
    "Palatino Linotype",
    "Garamond",
    "Bookman",
    "Arial Black",
    "Franklin Gothic Medium",
    "Century Gothic",
    "Copperplate",
    "Futura",
    "Gill Sans",
    "Roboto",
    "Lora",
    "Open Sans",
    "Montserrat",
    "Raleway",
    "PT Sans",
    "Oswald",
    "Droid Sans",
  ];

  const handleFontFamilyChange = (event) => {
    console.log("Selected font family:", event.target.value);
    setFontFamily(event.target.value);
  };
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

  // Function to insert a link at the current selection
  const insertLink = (editor, url, text = url) => {
    if (!url) return;

    const { selection } = editor;
    if (selection && Editor.string(editor, selection) !== "") {
      Transforms.wrapNodes(
        editor,
        { type: "link", url, children: [{ text }] },
        { split: true }
      );
    } else {
      Transforms.insertNodes(editor, {
        type: "link",
        url,
        children: [{ text }],
      });
      Transforms.insertText(editor, " "); // Add space after the link
    }
  };

  // Handle file upload and insert as a link
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const fileURL = URL.createObjectURL(file);
      insertLink(editor, fileURL, file.name);
    }
  };

  const setAlignment = (align) => {
    Transforms.setNodes(
      editor,
      { align },
      {
        match: (n) => SlateElement.isElement(n) && Editor.isBlock(editor, n),
        split: true,
      }
    );
  };


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
          <select onChange={handleFontFamilyChange} value={fontFamily}>
            {fontFamilies.map((font, index) => (
              <option key={index} value={font}>
                {font}
              </option>
            ))}
          </select>
        </TextFamily>

        <TextFontSize>
          <span onClick={handlePlus} className="fontdes">
            +
          </span>
          <input
            type="text"
            value={fontSize}
            onChange={(e) => {
              const inputValue = e.target.value;
              const newSize = parseInt(inputValue, 10);
              // Check if the input is a valid number and within the range 1 to 100
              if (/^\d+$/.test(inputValue) && newSize >= 1 && newSize <= 100) {
                setFontSize(newSize);
              } else if (inputValue === "") {
                // Allow empty input to clear the value
                setFontSize("");
              }
            }}
            className="fontSize"
          />

          <span onClick={handleMinus} className="fontdes">
            -
          </span>
        </TextFontSize>
        <TextIndex>
          <button className="SlateButton" onClick={() => toggleFormat("bold")}>
            <FaBold />
          </button>
          <button
            className="SlateButton"
            onClick={() => toggleFormat("italic")}
          >
            <FaItalic />
          </button>
          <button
            className="SlateButton"
            onClick={() => toggleFormat("underline")}
          >
            <FaUnderline />
          </button>
          <button
            className="SlateButton"
            onClick={() => fileInputRef.current.click()}
          >
            <RiAttachment2 />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileUpload}
            accept=".txt,.pdf,.doc,.docx"
          />
          <button
            className="SlateButton"
            onClick={() => insertLink(editor, prompt("Enter URL:"))}
          >
            <HiLink />
          </button>
          <button className="SlateButton" onClick={() => setAlignment("left")}>
            <FaAlignLeft />
          </button>
          <button
            className="SlateButton"
            onClick={() => setAlignment("center")}
          >
            <FaAlignCenter />
          </button>
          <button className="SlateButton" onClick={() => setAlignment("right")}>
            <FaAlignRight />
          </button>
        </TextIndex>
      </TextEditComponents>
      <Slate
        editor={editor}
        value={value}
        onChange={handleChange}
        initialValue={initialValue}
      >
        <Editable
          className="editable"
          style={{ fontSize: `${fontSize}px`, fontFamily: `${fontFamily}` }}
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

// Define how elements are rendered
const Element = ({ attributes, children, element }) => {
  const style = { textAlign: element.align, margin: "0px" };

  if (element.type === "link") {
    return (
      <>
        <a
          {...attributes}
          href={element.url}
          target="_blank"
          rel="noopener noreferrer"
          contentEditable={false}
          style={{ textDecoration: "underline", color: "blue", fontSize: "12px" }}
        >
          {children}
        </a>
        <p contentEditable={true}></p>
      </>
    );
  }

  return (
    <p {...attributes} style={style}>
      {children}
    </p>
  );
};

// Define how text decorations are applied
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

// Ensure links are treated as inline elements
const withLinks = (editor) => {
  const { isInline } = editor;
  editor.isInline = (element) =>
    element.type === "link" ? true : isInline(element);
  return editor;
};

export default TextEditor;
