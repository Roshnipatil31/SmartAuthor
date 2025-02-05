// import React, { useCallback, useMemo, useState } from 'react';
// import { createEditor, Transforms, Text, Editor } from 'slate';
// import { Slate, Editable, withReact } from 'slate-react';
// import {
//     TextEditorWrapper,
//     TextEditComponents,
//     TextSize,
//     TextFamily,
//     TextFontSize,
//     TextIndex
// } from "./TextEditor.style";
// import { FaBold } from "react-icons/fa";
// import { FaItalic } from "react-icons/fa";
// import { FaUnderline } from "react-icons/fa";
// import { RiAttachment2 } from "react-icons/ri";
// import { LiaAlignLeftSolid } from "react-icons/lia";
// import { LiaAlignCenterSolid } from "react-icons/lia";
// import { LiaAlignRightSolid } from "react-icons/lia";
// import { FaLink } from "react-icons/fa";

// const TextEditor = () => {
//     const editor = useMemo(() => withReact(createEditor()), []);

//     // Ensure value is never undefined
//     const [value, setValue] = useState([
//         {
//             type: 'paragraph',
//             children: [{ text: '' }], // Default text node
//         },
//     ]);

//     const handlePlus = () => {
//         const fontSize = document.querySelector('.fontSize');
//         fontSize.innerHTML = parseInt(fontSize.innerHTML) + 1;
//       }

//       const handleMinus = () => {
//         const fontSize = document.querySelector('.fontSize');
//         fontSize.innerHTML = parseInt(fontSize.innerHTML) - 1;
//       }

//     const toggleFormat = (format) => {
//         const isActive = isFormatActive(editor, format);
//         Transforms.setNodes(
//             editor,
//             { [format]: isActive ? null : true },
//             { match: n => Text.isText(n), split: true }
//         );
//     };

//     const isFormatActive = (editor, format) => {
//         const [match] = Editor.nodes(editor, {
//             match: n => n[format] === true,
//             universal: true,
//         });
//         return !!match;
//     };

//     // Wrap onChange in useCallback
//     const handleChange = useCallback((newValue) => {
//         setValue(newValue || []);
//     }, []);

//     return (
//         <TextEditorWrapper>
//             <TextEditComponents>
//                 <TextSize>
//                     <select name="TextSize" id="TextSize">
//                         <option value="Normal">Normal</option>
//                         <option value="Heading1">Heading 1</option>
//                         <option value="Heading2">Heading 2</option>
//                         <option value="Heading3">Heading 3</option>
//                     </select>
//                 </TextSize>
//                 <TextFamily>
//                     <select name="TextFamily" id="TextFamily">
//                         <option value="Poppins">Poppins</option>
//                         <option value="Arial">Arial</option>
//                         <option value="Inter">Inter</option>
//                         <option value="Comic Sans">Comic Sans</option>
//                     </select>
//                 </TextFamily>
//                 <TextFontSize>
//                     <span onClick={handlePlus}>+</span>
//                     <span className='fontSize'>11</span>
//                     <span onClick={handleMinus}>-</span>
//                 </TextFontSize>
//                 <TextIndex>
//                     <button className='SlateButton' onClick={() => toggleFormat('bold')}><FaBold /></button>
//                     <button className='SlateButton' onClick={() => toggleFormat('italic')}><FaItalic /></button>
//                     <button className='SlateButton' onClick={() => toggleFormat('underline')}><FaUnderline /></button>
//                     <button className='SlateButton' onClick={() => toggleFormat('strikethrough')}><RiAttachment2 /></button>
//                     <button className='SlateButton' onClick={() => toggleFormat('code')}><FaLink /></button>
//                     <button className='SlateButton' onClick={() => toggleFormat('align-left')}><LiaAlignLeftSolid /></button>
//                     <button className='SlateButton' onClick={() => toggleFormat('align-center')}><LiaAlignCenterSolid /></button>
//                     <button className='SlateButton' onClick={() => toggleFormat('align-right')}><LiaAlignRightSolid /></button>
//                 </TextIndex>
//             </TextEditComponents>
//             <Slate editor={editor} value={value} onChange={setValue} initialValue={value}>
//                 <Editable
//                 className='editable'
//                     renderLeaf={props => <Leaf {...props} />}
//                     placeholder="Enter some text..."
//                     spellCheck
//                     autoFocus
//                 />
//             </Slate>
//         </TextEditorWrapper>
//     );
// };

// const Leaf = ({ attributes, children, leaf }) => {
//     if (leaf.bold) {
//         children = <strong>{children}</strong>;
//     }
//     if (leaf.italic) {
//         children = <em>{children}</em>;
//     }
//     if (leaf.underline) {
//         children = <u>{children}</u>;
//     }
//     if (leaf.strikethrough) {
//         children = <s>{children}</s>;
//     }
//     if (leaf.code) {
//         children = <code>{children}</code>;
//     }
//     if (leaf['align-left']) {
//         children = <div style={{ textAlign: 'left' }}>{children}</div>;
//     }
//     if (leaf['align-center']) {
//         children = <div style={{ textAlign: 'center' }}>{children}</div>;
//     }
//     if (leaf['align-right']) {
//         children = <div style={{ textAlign: 'right' }}>{children}</div>;
//     }

//     return <span {...attributes}>{children}</span>;
// };

// export default TextEditor;

import React, { useCallback, useMemo, useState } from "react";
import { createEditor, Transforms, Text, Editor } from "slate";
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
          <button className="SlateButton" onClick={() => toggleFormat("strikethrough")}>
            <RiAttachment2 />
          </button>
        </TextIndex>
      </TextEditComponents>
      <Slate editor={editor} value={value} onChange={handleChange} initialValue={initialValue}>
        <Editable
          className="editable"
          style={{ fontSize: `${fontSize}px` }}
          renderLeaf={(props) => <Leaf {...props} />}
          placeholder="Enter some text..."
          spellCheck
          autoFocus
        />
      </Slate>
    </TextEditorWrapper>
  );
};

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
