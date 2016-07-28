import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import ColorSlider from './color_slider'
import ColorPalette from './color_palette'
import ReactDOM from 'react-dom';

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

class CreatePalette extends Component {
  constructor(props) {
    super()
    this.state = {
      paletteValid: false,
      active: '',
      title: '',
      color1: {
        red: 0,
        green: 0,
        blue: 0
      },
      color2: {
        red: 0,
        green: 0,
        blue: 0
      },
      color3: {
        red: 0,
        green: 0,
        blue: 0
      },
      color4: {
        red: 0,
        green: 0,
        blue: 0
      }
    }
    this.update = this.update.bind(this);
    this.changeClass = this.changeClass.bind(this);
  }

    update() {
      this.setState({
        title: this.state.title,
        color1: {
          red: ReactDOM.findDOMNode(this.refs.color1.refs.red.refs.input).value,
          green: ReactDOM.findDOMNode(this.refs.color1.refs.green.refs.input).value,
          blue: ReactDOM.findDOMNode(this.refs.color1.refs.blue.refs.input).value
        },
        color2: {
          red: ReactDOM.findDOMNode(this.refs.color2.refs.red.refs.input).value,
          green: ReactDOM.findDOMNode(this.refs.color2.refs.green.refs.input).value,
          blue: ReactDOM.findDOMNode(this.refs.color2.refs.blue.refs.input).value
        },
        color3: {
          red: ReactDOM.findDOMNode(this.refs.color3.refs.red.refs.input).value,
          green: ReactDOM.findDOMNode(this.refs.color3.refs.green.refs.input).value,
          blue: ReactDOM.findDOMNode(this.refs.color3.refs.blue.refs.input).value
        },
        color4: {
          red: ReactDOM.findDOMNode(this.refs.color4.refs.red.refs.input).value,
          green: ReactDOM.findDOMNode(this.refs.color4.refs.green.refs.input).value,
          blue: ReactDOM.findDOMNode(this.refs.color4.refs.blue.refs.input).value
        }
      })
    }
    changeClass() {
      if(this.refs.title.value === "") {
        this.state.active === '' ?  this.setState({active: "active"}) :  this.setState({active: ""})
      } else {
        this.setState({active: "active"})
      }
    }
  render() {
    return (
      <div className="animated fadeIn">
        <form >
          <label className={`title ${this.state.active}`}>Title</label>
          <input  value={this.state.title} ref="title"  className="form-control add-title top-input" onChange={(e) => this.onTitleChange(e.target.value)} onFocus={this.changeClass} onBlur={this.changeClass} />
          <Link to='/'><button className='btn btn-primary btn-add-color btn-create' type='submit' disabled={!this.state.paletteValid}  onClick={this.submitcolors.bind(this)} >Create</button></Link>
        </form>
        <ColorPalette className="flexcontainer" palette={{colors: [rgbToHex(+this.state.color1.red, +this.state.color1.blue, +this.state.color1.green),rgbToHex(+this.state.color2.red, +this.state.color2.blue, +this.state.color2.green), rgbToHex(+this.state.color3.red, +this.state.color3.blue, +this.state.color3.green), rgbToHex(+this.state.color4.red, +this.state.color4.blue, +this.state.color4.green)]}} />
          Color One
        <ColorSlider ref="color1" update={this.update} red={+this.state.color1.red} green={+this.state.color1.green} blue={+this.state.color1.blue} />
          Color Two
        <ColorSlider ref="color2" update={this.update} red={+this.state.color2.red} green={+this.state.color2.green} blue={+this.state.color2.blue} />
          Color Three
        <ColorSlider ref="color3" update={this.update} red={+this.state.color3.red} green={+this.state.color3.green} blue={+this.state.color3.blue} />
          Color Four
        <ColorSlider ref="color4" update={this.update} red={+this.state.color4.red} green={+this.state.color4.green} blue={+this.state.color4.blue} />
      </div>
    )
  }

  submitcolors() {
    let color1 = rgbToHex(+this.state.color1.red, +this.state.color1.blue, +this.state.color1.green);
    let color2 = rgbToHex(+this.state.color2.red, +this.state.color2.blue, +this.state.color2.green);
    let color3 = rgbToHex(+this.state.color3.red, +this.state.color3.blue, +this.state.color3.green);
    let color4 = rgbToHex(+this.state.color4.red, +this.state.color4.blue, +this.state.color4.green);
    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i
    if (color1.match(regex) && color2.match(regex) && color3.match(regex) && color4.match(regex) && this.state.title !== '') {
      axios.post(`https://limitless-eyrie-88050.herokuapp.com/api/`, {title: this.state.title, color1: color1, color2: color2, color3: color3,  color4: color4 })
    }
  }

  onTitleChange(title) {
    if (title.length > 0) {
      this.setState({
        title: title,
        paletteValid: true
      });
    } else {
      this.setState({
        title: title,
        paletteValid: false
      });
    }
  }

  onColorChange(color, id) {
    var obj = {}
    obj[id] = color;
    if(!color) {
    } else {
    this.setState(obj);
    }
  }
}

export default CreatePalette;
