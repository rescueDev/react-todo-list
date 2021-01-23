import React from "react";
import classes from "./Completed.module.css";
import { FaCheck } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";

const Completed = ({ completed, setCompleted }) => {
  console.log(completed);
  //functions
  //destrucutre completed
  /* var checked = [];

   completed.forEach(element => {
       element.forEach(item => {
           checked.push(item);
       })
   }); */
  const deleteTaskHandler = (task, id) => {
    //filter list and returning all element that not matches given id
    var deleted = [...completed];
    deleted.splice(task, 1);
    setCompleted(deleted);
  };

  let todo = null;
  todo = (
    <div className={classes.container}>
      Completed
      {completed.map((task) => {
        return (
          <div key={task.id} className={classes.completed}>
            <h4>{task.text}</h4>
            <div className={classes.icons}>
              <BsFillTrashFill
                onClick={() => deleteTaskHandler(task, task.id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div>
      <h2>{todo}</h2>
    </div>
  );
};

export default Completed;
