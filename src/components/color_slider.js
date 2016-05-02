import React, { Component } from 'react';
import Slider from './slider';
import ReactDOM from 'react-dom';

class ColorSlider extends Component {
render() {
    return (
      <div id=""  className="flexcontainer create-palette-container">
        <div className="create-palette-selector">
          <Slider className="red-slider" ref="red" min={0} max={255} type="range" defaultValue={0} update={this.props.update} />
          <span>{this.props.red}</span>
        </div>
        <div className="create-palette-selector">
          <Slider className="green-slider" ref="green" min={0} max={255} type="range" defaultValue={0} update={this.props.update} />
          <span>{this.props.green}</span>
        </div>
        <div className="create-palette-selector">
          <Slider className="blue-slider" ref="blue" min={0} max={255} type="range" defaultValue={0} update={this.props.update} />
          <span>{this.props.blue}</span>
        </div>
      </div>
    )
}
}

export default ColorSlider
