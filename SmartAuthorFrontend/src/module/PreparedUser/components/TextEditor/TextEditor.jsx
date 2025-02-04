import React, { useCallback, useMemo, useState } from 'react';
import { createEditor, Transforms, Text, Editor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import {
    TextEditorWrapper,
    TextEditComponents,
    TextSize,
    TextFamily,
    TextFontSize,
    TextIndex
} from "./TextEditor.style";

const TextEditor = () => {
    const editor = useMemo(() => withReact(createEditor()), []);

    // Ensure value is never undefined
    const [value, setValue] = useState([
        {
            type: 'paragraph',
            children: [{ text: '' }], // Default text node
        },
    ]);

    const handlePlus = () => {
        const fontSize = document.querySelector('.fontSize');
        fontSize.innerHTML = parseInt(fontSize.innerHTML) + 1;
      }
    
      const handleMinus = () => {
        const fontSize = document.querySelector('.fontSize');
        fontSize.innerHTML = parseInt(fontSize.innerHTML) - 1;
      }
    
    

    // const handlePlus = () => {
    //     Transforms.setNodes(
    //         editor,
    //         { fontSize: 'larger' },
    //         { match: n => Text.isText(n), split: true }
    //     );
    // };

    // const handleMinus = () => {
    //     Transforms.setNodes(
    //         editor,
    //         { fontSize: 'smaller' },
    //         { match: n => Text.isText(n), split: true }
    //     );
    // };

    const toggleFormat = (format) => {
        const isActive = isFormatActive(editor, format);
        Transforms.setNodes(
            editor,
            { [format]: isActive ? null : true },
            { match: n => Text.isText(n), split: true }
        );
    };

    const isFormatActive = (editor, format) => {
        const [match] = Editor.nodes(editor, {
            match: n => n[format] === true,
            universal: true,
        });
        return !!match;
    };

    // Wrap onChange in useCallback
    const handleChange = useCallback((newValue) => {
        setValue(newValue || []);
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
                    <span className='fontSize'>11</span>
                    <span onClick={handleMinus}>-</span>
                </TextFontSize>
                <TextIndex>
                    <button className='Bold' onClick={() => toggleFormat('bold')}>B</button>
                    <button onClick={() => toggleFormat('italic')}>I</button>
                    <button onClick={() => toggleFormat('underline')}>U</button>
                    <button onClick={() => toggleFormat('strikethrough')}>S</button>
                    <button onClick={() => toggleFormat('code')}>Code</button>
                    <button onClick={() => toggleFormat('align-left')}>Left</button>
                    <button onClick={() => toggleFormat('align-center')}>Center</button>
                    <button onClick={() => toggleFormat('align-right')}>Right</button>
                </TextIndex>
            </TextEditComponents>
            <Slate editor={editor} value={value} onChange={setValue} initialValue={value}>
                <Editable
                className='editable'
                    renderLeaf={props => <Leaf {...props} />}
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
    if (leaf.strikethrough) {
        children = <s>{children}</s>;
    }
    if (leaf.code) {
        children = <code>{children}</code>;
    }
    if (leaf['align-left']) {
        children = <div style={{ textAlign: 'left' }}>{children}</div>;
    }
    if (leaf['align-center']) {
        children = <div style={{ textAlign: 'center' }}>{children}</div>;
    }
    if (leaf['align-right']) {
        children = <div style={{ textAlign: 'right' }}>{children}</div>;
    }

    return <span {...attributes}>{children}</span>;
};

export default TextEditor;
