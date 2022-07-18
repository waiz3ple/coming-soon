import React, { Component } from 'react';
import './styles.scss';

class Circle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {size, colorStart, colorStop} = this.props.info;
    const circleProperties = {
          width: `${size}rem`,
          height:`${size}rem`,
          backgroundColor:'transparent',
          backgroundImage:`linear-gradient(177deg, ${colorStart} 0%, ${colorStop} 100%)`,
    }
    return (
      <>
       <div className="circle"  style={circleProperties}></div>
      </>
    );
  }
}

export default Circle;
