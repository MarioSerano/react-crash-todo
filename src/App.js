import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from "./components/layout/Header";
import About from "./components/Pages/About";
import './App.css';
import { v4 as uuid} from 'uuid';

class App extends Component{
  state = {
    todos:[
      {
        id:uuid(),
        title:'Take out the trash',
        completed:false
      },
      {
        id:uuid(),
        title:'Dinner with wife',
        completed:false
      },
      {
        id:uuid(),
        title:'Meeting with boss',
        completed:false
      },
    ]
  }
//
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
    })
  }
  delTodo = (id) => {
    // this.setState({
    //   todos:this.state.todos.filter(todo => {
    //     return todo.id != id
    //   })
    // })
    // Made by me
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }
  addTodo = (title) => {
    const newTodo = {
      id:uuid(),
      title, //es6
      completed:false,
    }
    this.setState({todos:[...this.state.todos, newTodo]})
  }
  render(){
        return (
        <Router>  
          <div className="App">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo 
                addTodo={this.addTodo}
                />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      );
    }
}

export default App;
