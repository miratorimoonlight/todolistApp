import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
  //styling using function
  getStyle = () =>{
    return {
      margin:'1%',
      //put line through when checkbox is checked
      textDecoration: this.props.todo.completed ? 'line-through':'none'
    }
  }

  // .bind(this) is used coz after passing markComplete to onChange, props lose 'this'. So it'll show error
  // markComplete(event){
  //   console.log(this.props)
  // }

  //new 

  render() {
    //todo item's props are: key, each todo objects, markComplete func
    //here we pull out id and title from the todo objects.
    //key word for this code is: destructuring
    const { id, title } = this.props.todo;
    return (
      <div class='card' style={this.getStyle()}>
        <ul className="list-group list-group-flush">
        <li className='list-group-item' >
          {/* id arg is passed to markComplete func in app.js */}
          <input 
              type ='checkbox' 
              onChange={this.props.markComplete.bind(this, id)} 
          /> 
            {'  '}
          { title }
          <input type='button' 
            style={btnStyle} 
            className="btn btn-danger" 
            onClick={this.props.delItem.bind(this,id)}
            value="X"
          />
        </li>
        </ul>
      </div>
    )
  }
  
}

// PropTypes
TodoItem.propTypes=
{
    todo: PropTypes.object.isRequired
}

const itemStyle = {
    backgroundColor:'#f4f4f4'
}

const btnStyle = {
  float: 'right',
}

export default TodoItem

