import React from 'react';
import Todo from './Todo';


const TodoList = () => {
      return (
            <div className='todo-list'>
                  {props.todosOnState.map(todo =>(
                        <Todo todo={todo} />
                  ))}
            </div>
      )
}

export default TodoList;






// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js