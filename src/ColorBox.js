import React, { Component } from 'react';

export default class ColorBox extends Component {
  
  render() {
    let opacity = this.props.opacity - .1
    if (this.props.opacity >= .2){
      return (<div style={{opacity: this.props.opacity}}><ColorBox opacity={opacity}/></div>)
    }
    else {
      return null;
    }
  }
  
}
