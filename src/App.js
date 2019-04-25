import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css';

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
    console.log('HEY');
    const newTodoArrayThatIMade = this.state.todos.map(chore => {
      if (chore.id === id) {
        console.log('nope');
        return { ...chore, completed: !chore.completed };
      }
      console.log('yep');
      return chore;
      
    });
    this.setState({ todos: newTodoArrayThatIMade });
    console.log('check');
        
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
        </div>
        <div className='list'>
          <TodoForm addTodo={this.addTodo}/>
          <TodoList 
            todos={this.state.todos}
            toggleNeed={this.toggleNeed}
          />
          <button onClick={this.removeCompleted}>Byeeee</button>
        </div> 
      </div>
    );
  }


}

export default App;
