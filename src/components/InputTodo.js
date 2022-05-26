import React, { Component } from 'react';

class InputTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Add Todo..." />
        <button type="button">Submit</button>
      </form>
    );
  }
}
export default InputTodo;
