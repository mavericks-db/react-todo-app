import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './TodoItem.module.scss';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  render() {
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };

    const { todo, handleChangeProps, deleteTodoProps } = this.props;
    const { completed, id, title } = todo;
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing}>
          <input
            type="checkbox"
            checked={completed}
            className={styles.checkbox}
            onChange={() => handleChangeProps(id)}
          />
          <button type="button" onClick={() => deleteTodoProps(id)}>
            Delete
          </button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </div>
        <input type="text" className={styles.textInput} />
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.shape.isRequired,
  handleChangeProps: PropTypes.func.isRequired,
  deleteTodoProps: PropTypes.func.isRequired,
};

export default TodoItem;
