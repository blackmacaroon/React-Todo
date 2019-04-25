import React from 'react';


function Todo (props) {

     return (
           <div className='todo-new'>
                 <h3 onClick={props.toggleNeed}>{props.chore.task}</h3>  
      
           </div>
     );
}

export default Todo;