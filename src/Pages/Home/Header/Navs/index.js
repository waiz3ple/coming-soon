import React, { Component } from 'react';
import './styles.scss';


class Navs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
       <nav>
         <ul>
           <li><a href="#">ABOUT US</a></li>
           <li><a href="#">BLOG</a></li>
           <li className="active-nav"><a href="#">CONTACT US</a></li>
         </ul>
       </nav>
    );
  }
}

export default Navs;
