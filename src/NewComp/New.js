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
      const { name, value } = e.target;
      this.setState({
        [name]: value,
      });
    };
    submit = (e) => {
      e.preventDefault();
      alert('Submitted');
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
            onChange={this.change}
            value={name}
          />
          <input
            placeholder='your age'
            name='age'
            onChange={this.change}
            value={age}
          />
          <input
            placeholder='your rollno'
            name='rollno'
            onChange={this.change}
            value={rollno}
          />
          <input
            placeholder='your course'
            name='course'
            onChange={this.change}
            value={course}
          />
          <button name='submit'></button>
        </form>
      </div>
    );
  }
}
