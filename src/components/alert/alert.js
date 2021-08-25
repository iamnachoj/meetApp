import React from 'react';

class Alert extends React.Component {

 constructor(props){
   super(props);
   this.color = null;
 }

 getStyle = () => {
   return {
     color : this.color
   };
 }
 render() {
   return (
     <div className='alert'>
      <p style={this.getStyle()}>{this.props.text}</p>
     </div>
   );
 }
}


//subclass that extends Alert component
export class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }
}