import React from 'react';
import './alert.css';
class Alert extends React.Component {

 constructor(props){
   super(props);
   this.backgroundColor = null;
   this.borderColor = null;
 }

 getStyle = () => {
   return {
     backgroundColor : this.color,
     borderColor: this.borderColor
   };
 }
 render() {
   return (
     <div>
      <p className='alert' style={this.getStyle()}>{this.props.text}</p>
     </div>
   );
 }
}


//subclass that extends Alert component
export class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(234, 250, 255)';
    this.borderColor = 'dodgerblue'
  }
}