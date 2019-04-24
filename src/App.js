import React from 'react';
// import Todo from './components/TodoComponents/Todo';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const todos = [
  {
    task: 'Feed Dog',
    id: 1,
    completed: false
  },
  {
    task: 'Walk Dog',
    id: 2,
    completed: false
  }
];

class App extends React.Component {
  constructor () {
    super () ;
      this.state = {
        todosOnState: todos,
        todo: {
          task: '',
          id: '',
          completed: Boolean
        }
       
      }
  }

  handleChanges = event => {
    console.log(event.target.name);
    this.setState({
      todo: {
        ...this.state.todo,
        [event.target.name]: event.target.value
      }
    });
  };

  addTodo = event => {
      event.preventDefault();
      this.setState({
            todosOnState: [...this.state.todosOnState, this.state.todo],
            todo: {
              task: '',
              id: '',
              completed: false
            }
      });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>DO IT NOW</h1>
        <TodoList todosOnState={todos}/>
        <TodoForm todo={this.state.todo}/>
      </div>
    );
  }


}

export default App;
