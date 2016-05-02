import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Slider extends Component {
  render (){
      return (
        <div className={this.props.className}>
          <input ref="input"
            type={this.props.type}
            min={this.props.min}
            max={this.props.max}
            defaultValue={this.props.defaultValue}
            onChange={this.props.update}
            />
        </div>
    )
  }
}

export default Slider;
