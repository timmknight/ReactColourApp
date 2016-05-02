import React from 'react';

const ColorSample = ({color}) => {
  var svgStyle = {
    display: 'block',
    margin: '-2rem auto 1rem auto',
    position: 'relative'
  }

  var fillColor = {
    fill: color
  }

  return (
    <div className='color-svg'>
      <svg style={svgStyle} className="droplet" viewBox="0 0 51.8 74.3" >
        <path style={fillColor} d="M2.8,47.4c0.1,13.6,11.9,24.3,25.7,22.8c13.2-1.4,22.4-14.3,20.2-27.4C47,32.3,39.2,22.5,27.4,5
          c-0.9-1.4-2.9-1.3-3.8,0.1C11.8,25.1,2.7,35.2,2.8,47.4z" />
      </svg>
      <p className="hide color-text">{color}</p>
    </div>
  )
}

export default ColorSample;
