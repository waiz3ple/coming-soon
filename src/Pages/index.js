import React, { Component } from 'react';
import styles from './styles.scss';
import Home from './Home';

class Pages extends Component {
  render() {
    return (
      <React.Fragment>
        <Home/>
      {/* 
        <About/>
        <Contact/>       */}
      </React.Fragment>
    );
  }
}

export default Pages;
