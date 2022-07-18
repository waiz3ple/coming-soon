import React, { Component } from 'react';
import styles    from './styles.scss';
import Header    from './Header';
import Main      from './Main';


class Home extends Component {
  render() {
    return (
          <>
            <Header/>
            <Main/>
          </>
    );    
  }
}

export default Home;
