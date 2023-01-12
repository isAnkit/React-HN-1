import React from "react";

class ClassComponent extends React.Component {
    render() {
      return (
        <div className="maincontainer-class">
          <div className='CompBox' style={{backgroundColor: "#eb88d2"}}>
            <h2>This is Created Using Class Component</h2>
            <p>This is done by using external CSS</p>
            <p style={{color:'blue'}}> This is done by using inline CSS </p>
          </div>
        </div>
      );
    }
  }
  

export default ClassComponent