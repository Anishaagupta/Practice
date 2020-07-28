import React, { Component } from 'react';

export default class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rollno: null,
      age: null,
      course: '',
    };
    const change = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };
  }
  render() {
    const { name, age, rollno, course } = this.state;
    return (
      <div>
        <form onSubmit={this.Submit}>
          <input
            placeholder='your name'
            name='name'
            onChange={this.Change}
            value={name}
          />
          <input
            placeholder='your age'
            name='age'
            onChange={this.Change}
            value={age}
          />
          <input
            placeholder='your rollno'
            name='rollno'
            onChange={this.Change}
            value={rollno}
          />
          <input
            placeholder='your course'
            name='course'
            onChange={this.Change}
            value={course}
          />
          <button onClick={this.handleClick}></button>
        </form>
      </div>
    );
  }
}
