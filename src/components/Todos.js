import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';


class Todos extends Component {
  render() {
    //   is the arg inside map a function?? => 
    // Yes it is...but a bit weird right??
    return this.props.todos.map( todo =>
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete}
      delItem={this.props.delItem}/>
    ) 
  }
}

// PropType used to run typechecking on props of the components...
// one of its benefit is: check which type of prop the component requires
// todos: is a prop of Todos component
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
export default Todos;
