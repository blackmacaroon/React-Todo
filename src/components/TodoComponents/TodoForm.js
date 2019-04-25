import React from 'react';
// import { throws } from 'assert';



class TodoForm extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  input: ''
            }
      };

      // updates local state from the input form
      onUpdate = event => {
            this.setState({ [event.target.name]: event.target.value })
      };

      //prevents button default (referesh), calls addTodo from App, use this.state.input as the argument, creates new todo in App's state
      onOnSubmit = event => {
            event.preventDefault();
            this.props.addTodo(this.state.input);
            this.setState({ input: '' })
      };

      render() {
            return (
                  <form onSubmit={this.onOnSubmit}>
                        <input 
                              type= 'text'
                              name='input' 
                              id='id'
                              value={this.state.input}
                              placeholder='whatcha gonna do?' 
                              onChange={this.onUpdate} 
                        />
                        <button type='submit'>Add To-Do</button>
                  </form>
            )
      }            
}

export default TodoForm;