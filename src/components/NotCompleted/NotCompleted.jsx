import React from 'react'
import InputTodo from '../InputTodo/InputTodo'
import classes from './NotCompleted.module.css'
import { FaCheck } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";

const NotCompleted = ({notCompleted, setNotCompleted}) => {
    console.log(notCompleted);
    const deleteTask = (id) => {
        console.log('deleted');
       const newList = notCompleted.filter((item) => item.id !== id);
       setNotCompleted(newList);
    }

    if (notCompleted.length < 1) {
        return (
            <div>
                <h3>No pending tasks</h3>
            </div>
        )
    }

let todo = null;
 todo = (
  <div className={classes.container} >
      Not Completed
      {notCompleted.map((task) => {
          return (
          <div key={task.id} className={classes.notcompleted} >

          <h4 >
              {task.text}
           
                </h4>
                <div className={classes.icons}>

                    <FaCheck color='green' />
                    <BsFillTrashFill onClick={() => deleteTask(task.id)}/>
                </div>
          </div> 
          )
      })}
  </div>
)

    return (
        <div>
            
            <h2>{todo}</h2>
        </div>
    )
}

export default NotCompleted
