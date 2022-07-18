import React, { Component } from 'react';

import './styles.scss';


class Card extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  render() {
    return (
      <li className="card">
        <p className="time">{this.props.time}</p>
        <p className="label">{this.props.title}</p>
      </li>
    );
  }
}

export default Card;
