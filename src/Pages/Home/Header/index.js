import React, { Component } from 'react';
import styles from './styles.scss';
import Navs from './Navs'


class Header extends Component {
  render() {
    return (
      <header>
         <a href="#" id="brand-logo">
           <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 395.71 286.59">
             <g>
               <path class="logo-image" d="M592.5,441.5s63-184,97-125,26,57,26,57,24.2-80.33,42-69c11,7,2,0,2,0s26,12,49,75c0,0-28-37-51,29s-45,83-75,22l-12-23s-15,46-41,59S590.5,461.5,592.5,441.5Z" transform="translate(-517.29 -303.41)"/>
               <circle class="logo-image" cx="285.21" cy="129.09" r="30"/>
             </g>
             <text class="logo-text" transform="translate(0 255.86) scale(1.12 1)">METRICKS</text>
           </svg>

         </a>
         <Navs/>
      </header>
    );
  }
}

export default Header;
