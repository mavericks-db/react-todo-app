import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { todo, handleChangeProps } = this.props;
    return (
      <li>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleChangeProps(todo.id)}
        />
        {todo.title}
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
};

export default TodoItem;
