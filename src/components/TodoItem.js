import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#ddd',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            borderBottom: '1px dotted #ccc',
            padding: '10px'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
          <div style = { this.getStyle() } >
            <p>
              <input type = "checkbox"
                onChange = { this.props.markComplete.bind(this, id) }
                /> { '  ' }
                { title }
                <button style={btnStyle} onClick={this.props.deleteTask.bind(this, id)}>x</button>
            </p>
            </div>
        )
    }
}

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 9px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right'
}

// ProptTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem;
