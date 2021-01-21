import React from 'react'
import classes from './Completed.module.css'
import { FaCheck } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";

const Completed = ({completed, setCompleted}) =>{
    //functions
    //destrucutre completed
   var checked = [];

   completed.forEach(element => {
       element.forEach(item => {
           checked.push(item);
       })
   });

   console.log(checked);
    
    let todo = null;
 todo = (
  <div className={classes.container} >
      Completed
      {checked.map((task) => {
          return (
          <div key={task.id} className={classes.completed} >

          <h4 >
              {task.text}
           
                </h4>
                <div className={classes.icons}>

                    <FaCheck color='green'/>
                    <BsFillTrashFill />
                </div>
          </div> 
          )
      })}
  </div>
)



    return (
        <div>
            <h3>{todo}</h3>
        </div>
    )
}

export default Completed
