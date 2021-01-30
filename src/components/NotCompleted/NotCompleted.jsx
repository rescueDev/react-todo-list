import classes from "./NotCompleted.module.css";
import { FaCheck } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";

const NotCompleted = ({
  notCompleted,
  setNotCompleted,
  completed,
  setCompleted,
}) => {
  const deleteTaskHandler = (id) => {
    //filter list and returning all element that not matches given id
    const newList = notCompleted.filter((item) => item.id !== id);
    setNotCompleted(newList);
  };

  const completeTaskHandler = (todo, id) => {
    deleteTaskHandler(id);
    /* const completedList = notCompleted.filter((item) => item.id === id);  */

    todo.completed = true;

    setCompleted([...completed, todo]);
  };

  if (!notCompleted.length) {
    return (
      <div className={classes.empty}>
        <h3>No pending tasks</h3>
      </div>
    );
  }

  let todo = null;
  todo = (
    <div className={classes.container}>
      Uncompleted
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
