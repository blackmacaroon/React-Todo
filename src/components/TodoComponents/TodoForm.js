import React from 'react';
// import { throws } from 'assert';



const TodoForm = (props) => {
      return <div>
                  <form onSubmit={props.addTodo}>
                        <input 
                              name='todo' 
                              type='text' 
                              placeholder='whatcha gonna do?' 
                              value={props.todo.task} 
                              onChange={props.handleChanges} />
                        <button>Add To-Do</button>
                        <button>Clear Completed To-Dos</button>
                  </form>
             </div>
}


export default TodoForm;