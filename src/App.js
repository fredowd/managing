import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

// import { v4 as uuidv4 } from 'uuid';

import './App.css';

class App extends Component {
    state = {
      todos: [
      //   {
      //   id: uuidv4(),
      //   title: 'Nettoyage générale',
      //   completed: false
      // },
      // {
      //   id: uuidv4(),
      //   title: 'Deploy work',
      //   completed: false
      // },
      // {
      //   id: uuidv4(),
      //   title: 'Call boss',
      //   completed: false
      // }
    ]
  };

// Make request into an REST Api
componentDidMount(){
  axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
  .then(res => this.setState({ todos: res.data }))
}

    //ajout de tache
    addTodo = (title) =>{
      // const newTodo = {
      //   id: uuidv4(),
      //   title: title,
      //   completed: false
      // };
      axios.post("https://jsonplaceholder.typicode.com/todos",{
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
    }

    // Toggle the todo state
    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        })
    }

    //Delete todo
    deleteTask = (id) =>{
      axios.delete(`https://jsonplaceholder.typicode.com/todos/{id}`)
      .then(res => this.setState({
        todos: [ ...this.state.todos.filter(todo => todo.id !== id)]
      }))
    }

    render() {
        console.log(this.state.todos);
        return (
          <Router>
            <div className = "App">
              <div className="container">
              <Header />
              <Route exact path="/" render={props =>(
                  <React.Fragment>
                    <AddTodo addTodo={this.addTodo} />
                    <Todos
                      todos = { this.state.todos }
                      markComplete = { this.markComplete }
                      deleteTask={this.deleteTask}
                    />
                </React.Fragment>
                )}
              />
              <Route path="/about" component={About} />
              </div>
            </div>
          </Router>

        );

    }
}

export default App;
