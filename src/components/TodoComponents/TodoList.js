import React from 'react';
import Todo from './Todo';



function TodoList (props) {
      return (
            <div className='todo-list'>
                  {props.todos.map(chore => (
                        <Todo 
                        key={chore.id}
                        chore={chore}
                        toggleNeed={props.toggleNeed} />
                  ))}
            </div>
      );
}

export default TodoList;






// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js