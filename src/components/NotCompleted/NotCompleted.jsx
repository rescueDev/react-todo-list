import {useState, useEffect} from 'react';
import { FaCheck } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import classes from './NotCompleted.module.css'


 const NotCompleted = ({tasks})  => {

    const [notCompleted, setNotCompleted] = useState(tasks.notCompleted)
    //console.log(notCompleted);

    useEffect(() => {
       setNotCompleted(tasks.notCompleted);
   }, [tasks.notCompleted])

     const deleteTask = (index) => {
        
        var deleted = [...tasks.notCompleted];
        deleted.splice(index,1);
        setNotCompleted(deleted);
        tasks.notCompleted.splice(index,1)
        
    }
   // console.log(notCompleted);

    if(notCompleted.length < 1){
      return (
          <div className={classes.notask}>
                No pending tasks
          </div> 
      )}
 let todo = null;
 todo = (
  <div className={classes.container} >
      {notCompleted.map((task, index) => {
          return (
          <div key={index} className={classes.notcompleted} >

          <h4 >
              {task}
           
                </h4>
                <div className={classes.icons}>

                    <FaCheck color='green' />
                    <BsFillTrashFill onClick={() => deleteTask(index)}/>
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
