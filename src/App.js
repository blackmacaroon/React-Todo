import React from 'react';
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
        todos
      };
  }

  // add a task to the list
  addTodo = chore => {
      // takes a chore string, copies the todos array and adds the new chore item object
      this.setState({
            todos: [
              ...this.state.todos,
              { task: chore, completed: false, id: Date.now() }
            ]
      });
  };
  
  toggleNeed = id => {
        const newTODOArrayThatIMade = this.state.todos.map(chore => {
          if (chore.id === id) {
            return { ...chore, completed: !chore.completed };
          }
          return chore;
        });
        this.setState({ todos: newTODOArrayThatIMade });
        
        // this.setState({
        //   todos: this.state.todos.map(chore =>
        //     chore.id === id ? { ...chore, completed: !chore.completed } : chore
        //   )
        // });
    
  };

  removeCompleted = () => {
    const newTodoArray = this.state.todos.filter(chore => {
      return !chore.completed;
    });
    this.setState({ todos: newTodoArray });
  };

  render() {
    return (
      <div className='toDoList'>
        <div className='header'>
          <h1>DO IT NOW</h1>
          <TodoForm addTodo={this.addTodo}/>
        </div>
        <TodoList 
          todos={this.state.todos}
          toggleNeed={this.toggleNeed}
        />
        <button onClick={this.removeBought}>Byeeee</button> 
      </div>
    );
  }


}

export default App;
