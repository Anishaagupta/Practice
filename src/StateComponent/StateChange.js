import React, { Component } from 'react';

class StateChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rollno: null,
    };
  }
  render() {
    return (
      <div>
        <h1>Name: {this.props.name.children}</h1>
        <p>RollNumber: {this.props.rollno.children}</p>
      </div>
    );
  }
}
export default StateChange;
