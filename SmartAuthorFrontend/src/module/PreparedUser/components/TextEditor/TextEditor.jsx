import React, { useState, useRef } from 'react';
import {
    TextEditorWrapper,
    TextEditComponents,
    TextSize,
    TextFamily,
    TextFontSize
} from "./TextEditor.style";

function TextEditor() {

  const handlePlus = () => {
    const fontSize = document.querySelector('.fontSize');
    fontSize.innerHTML = parseInt(fontSize.innerHTML) + 1;
  }

  const handleMinus = () => {
    const fontSize = document.querySelector('.fontSize');
    fontSize.innerHTML = parseInt(fontSize.innerHTML) - 1;
  }

  const handleBold = () => {

  }

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
                <select name="TextSize" id="TextSize">
                    <option value="Normal"> Poppings </option>
                    <option value="Heading1"> Arial </option>
                    <option value="Heading2"> Inter </option>
                    <option value="Heading3"> Comic </option>
                </select>
            </TextFamily>
            <TextFontSize>
                <span onClick={handlePlus}>+</span>
                <span className='fontSize'>11</span>
                <span onClick={handleMinus}>-</span>
            </TextFontSize>
            {/* <TextIndex>
                <p onClick={handleBold}>B</p>
                <p onClick={handleItalic}>I</p>
                <p onClick={handleUnderline}>U</p>
                {/* <p onClick={}></p> */}
            {/* </TextIndex> */}
        </TextEditComponents>
    </TextEditorWrapper>
  );
}

export default TextEditor;

