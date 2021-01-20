import { FaCheck } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import classes from './NotCompleted.module.css'


 const NotCompleted = ({tasks})  => {
    // console.log(tasks);

    if(tasks.notCompleted.length < 1){
      return 'No pending tasks'
  }
 let todo = null;
 todo = (
  <div className={classes.container} >
      {tasks.notCompleted.map((task, index) => {
          return (
          <div key={index} className={classes.notcompleted} >

          <h4 >
              {task}
                </h4>
                <div className={classes.icons}>

                    <FaCheck color='green' />
                    <BsFillTrashFill />
                </div>
          </div> 
          )
      })}
  </div>
)
    return (
        
           <h3>{todo}</h3> 
           
       
    )
}

export default NotCompleted
