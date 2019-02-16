import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
        <input type="checkbox" defaultChecked={ this.props.isCompleted } onChange={ this.props.toggleComple } />
        <button type="button" onClick={ this.props.deleteTodo } > Delete </button>
        <span>{ this.props.description }</span>
      </li>
    );
  }
}

export default ToDo;