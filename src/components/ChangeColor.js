import React, { useState } from 'react'

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
  const [color, setColor] = useState('Tomato');

  const divStyle = { backgroundColor: color };

  const handleClick = (event) => {
    const newColor = event.target.value
    console.log(newColor);
    setColor(newColor)
  }

  return (
    <div>
      <div style={divStyle}>
        <p>Select color : {color} </p>
        <ul>
          {colorNames.map((colorName) => {
            return <button key={colorName} value={colorName} onClick={handleClick}>{colorName}</button>
          })}
        </ul>
      </div>
    </div>
  );
}
