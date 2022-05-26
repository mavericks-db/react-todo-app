import React from 'react';
import PropTypes from 'prop-types';

class TodosList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { todos } = this.props;
    return (
      <ul>
        {todos.map((todo) => (
          <li>{todo.title}</li>
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf.isRequired,
};

export default TodosList;
