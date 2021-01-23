import React from "react";
import InputTodo from "../InputTodo/InputTodo";
import classes from "./NotCompleted.module.css";
import { FaCheck } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";

const NotCompleted = ({
  notCompleted,
  setNotCompleted,
  completed,
  setCompleted,
}) => {
  console.log(notCompleted);
  const deleteTaskHandler = (id) => {
    //filter list and returning all element that not matches given id
    const newList = notCompleted.filter((item) => item.id !== id);
    setNotCompleted(newList);
  };

  const completeTaskHandler = (todo, id) => {
    deleteTaskHandler(id);
    // console.log('completed task');
    /* const completedList = notCompleted.filter((item) => item.id === id);  */
    setCompleted([...completed, todo]);
    // console.log(completed);
  };

  if (notCompleted.length < 1) {
    return (
      <div>
        <h3>No pending tasks</h3>
      </div>
    );
  }

  let todo = null;
  todo = (
    <div className={classes.container}>
      Not Completed
      {notCompleted.map((task) => {
        return (
          <div key={task.id} className={classes.notcompleted}>
            <h4>{task.text}</h4>

            <div className={classes.icons}>
              <FaCheck
                color="green"
                onClick={() => completeTaskHandler(task, task.id)}
              />
              <BsFillTrashFill onClick={() => deleteTaskHandler(task.id)} />
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

export default NotCompleted;
