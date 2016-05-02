import React from 'react';
import ColorSample from './color_sample';

const ColorPalette = ({palette}) => {
  // give each color an uniquie id for that specific list
  let id = 0;
  let colors = palette.colors.map((color) => {
    return <ColorSample color={color} key={id++}/>
  });

  return (
    <div className="animated fadeIn">
      <h4 className="palette-title">{palette.title}</h4>
      <div className="palette-container">
        {colors}
      </div>
    </div>
  );
}

export default ColorPalette;
