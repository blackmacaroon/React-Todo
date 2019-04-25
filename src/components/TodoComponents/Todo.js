import React from 'react';


function Todo (props) {

     return (
           <div className='todo-new'>
                 <h3>{props.chore.task}</h3>  
      
           </div>
     );
}

export default Todo;