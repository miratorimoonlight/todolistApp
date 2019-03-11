import React, { Component } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {
  // why need this state??
  state = 
  {
    todos:[]
  }
  // use this to fetch data from the website below
  // componentDidMount(){
  //   axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
  //   .then(resp => this.setState({ todos: resp.data }))
  // }

  markComplete = (id) => 
  {
    // setState used to update the state
    // syntax==  setState({ key:array_as_value })
    this.setState({ todo: this.state.todos.map(todo => {
      if(todo.id === id)
      {
        //assign the opposite value of complete to the complete,
        todo.completed = !todo.completed 
      }
    }) })
  }
  
  //delete each todo item
  //filter() vs map() ???
  delItem = (id) =>
  {
    //first it filters out the array and returns a new array. Then ... will split its element out and put in todos array 
    this.setState({ todos:[...this.state.todos.filter(todo => todo.id !== id )] })
  }

  //add todo
  addTodo = (title) =>
  {
    if (title){
      //axios.post(url, data)
      // axios.post('https://jsonplaceholder.typicode.com/todos',{
      //   title,
      //   completed:false
      // })
      //   .then(resp => console.log(resp.data))
      const newTodo = {
        id: uuid.v4(),
        title: title,
        completed:false,
      }
      this.setState({todos:[newTodo, ...this.state.todos]})
    }
  }

  render() 
  {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" render={ props =>
            (
              <React.Fragment>
                <AddTodo addTodo = {this.addTodo}/>
                {/* this Todos class now has todos and markComplete property  */}
                <Todos todos={this.state.todos} markComplete={this.markComplete}
                delItem = {this.delItem}/>
              </React.Fragment>
            )
          } />
          <Route path="/about" component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
