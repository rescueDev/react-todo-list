import React from "react";
import classes from "./Completed.module.css";
import { BsFillTrashFill } from "react-icons/bs";

const Completed = ({ completed, setCompleted }) => {
  const deleteTaskHandler = (task, id) => {
    //filter list and returning all element that not matches given id
    var deleted = [...completed];
    deleted.splice(task, 1);
    setCompleted(deleted);
  };

  if (!completed.length) {
    return (
      <div className={classes.empty}>
        <h3>No completed tasks yet</h3>
      </div>
    );
  }

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
