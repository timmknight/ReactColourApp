import React, { Component } from 'react';
import ColorPalette from './color_palette';
import Like from './like_color';
import axios from 'axios';
import Loader from './loader';

class ColorIndex extends Component {

  constructor(props) {
    super(props)

    this.state = {
      palettes: [],
      loading: true
    }
    this.loadData = this.loadData.bind(this);
  }

  loadData() {
    axios.get('https://limitless-eyrie-88050.herokuapp.com/api/')
      .then((res) => {
        this.setState({
          palettes: res.data,
          loading: false
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  componentWillMount() {
    this.loadData();
  }

  componentWillUnmount () {
    this.setState({
      loading: true
    });
  }

  componentWillUpdate () {
    this.loadData();
  }
  
  render() {
      var colorPalletteItems = this.state.palettes.map((palette) => {
        return (
          <div key={palette._id} className="index-palette-container">
            <ColorPalette palette={palette} />
            <div key={palette._id} className="likes animated fadeIn" onClick={event => this.clicked(palette)}><i className="fa fa-heart"></i> {palette.likes}</div>
          </div>
        )
      })

    return (
      <div className="">
        {this.state.loading === true ? <div><Loader /></div> : <div>{colorPalletteItems}</div>}
      </div>
    )
  }

  clicked(palette) {
    axios.put(`https://limitless-eyrie-88050.herokuapp.com/api/${palette._id}`)
    palette.likes = palette.likes+1;
    this.setState({ palettes: this.state.palettes })
  }
}

export default ColorIndex;
