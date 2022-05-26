import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { todo } = this.props;
    return (
      <li>
        <input type="checkbox" />
        {todo.title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape.isRequired,
};

export default TodoItem;
