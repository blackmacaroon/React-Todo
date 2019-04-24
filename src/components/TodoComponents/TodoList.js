import React from 'react';
import Todo from './Todo';

// const todos = [
//       {
//         task: 'Feed Dog',
//         id: 1,
//         completed: false
//       },
//       {
//         task: 'Walk Dog',
//         id: 2,
//         completed: false
//       }
//     ];

const TodoList = (props) => {
      return (
            <div className='todo-list'>
                  {props.todosOnState.map(todo => (
                        // console.log("test")
                        <Todo orange={todo} />
                  ))}
            </div>
      )
}

export default TodoList;






// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js