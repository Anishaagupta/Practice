import React, { Component } from 'react';

class StateChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rollno: null,
    };
    const handleClick = () => {
      this.setState({
        name: this.props.name,
        rollno: this.props.rollno,
      });
    };
  }
  render() {
    return (
      <div>
        {this.props.children}
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}
export default StateChange;
