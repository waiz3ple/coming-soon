import React, { Component } from 'react';
import Card from './Card';
import Circle from './Circle';
import './styles.scss';


export default class Main extends Component {
  static time = new Date();
   constructor(props) {
     super(props);
     
     this.state = {};
   }
  render() {
    return (
      <>
        <main>
          <h1>SOMETHING AWESOME IS <span>COMING SOON</span></h1>
          <p>Your all-in-one affilate marketing tracking software track, automate and <span>optimize your campaingns.</span></p>
          <ul>
            <Card time={7} title={'Days'}/>
            <Card time={24} title={'Hours'}/>
            <Card time={54} title={'Minutes'}/>
            <Card time={11} title={'Seconds'}/>
          </ul>
           <form>
             <fieldset>
               <input type="text" placeholder="First Name.."/>
               <input type="text" placeholder="Last Name.."/>
             </fieldset>
             <fieldset>
               <input type="text" placeholder="Enter your email address..."/>
               <button>JOIN OUR WAITING LIST</button>
             </fieldset>
           </form>
        </main>
         <section className="circle-container">
          <Circle className="circle1" info={{size:14, colorStart:"#7F1E7B", colorStop:"#19073B"}}/>
          <Circle className="circle2" info={{size:18.4, colorStart:"#7F4129", colorStop:"#1C0C28"}}/>
          <Circle className="circle3" info={{size:10.4, colorStart:"#213F72", colorStop:"#19073B"}}/>
        </section>
      </>
    );
  }
}
