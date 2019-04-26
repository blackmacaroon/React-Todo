import React from 'react';


function Todo (props) {
      console.log(props)
     return (
           <div className={props.chore.completed ? "complete" : "todo-new"} onClick={()=>props.toggleNeed(props.chore.id)}>
                 <h3>
                        {props.chore.task}
                 </h3>  
      
           </div>
     );

}

export default Todo;