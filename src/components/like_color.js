import React, { Component } from 'react';

class LikeColor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      likes: this.props.likes,
      key: this.props.num
    }
  }

  render () {
    var style = {
      height: '150px',
      width: '150px',
      background: 'orange'
    }
    return (
      <div>
        <div style={style} onClick={this.likeClicked.bind(this)}>{this.state.likes}</div>
      </div>
    )
  }
}

export default LikeColor;
