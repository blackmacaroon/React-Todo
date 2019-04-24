import React from 'react';


function Todo(props) {
      return (
            <div className='todoItem'>
                  <h3>{props.todo.task}</h3>
            </div>
      )
}

export default Todo;