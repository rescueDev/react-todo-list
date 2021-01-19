import React from 'react'

function NotCompleted({tasks}) {
    console.log(tasks);

    if(tasks.notCompleted.length < 1){
      return 'No pending tasks'
  }
 let todo = null;
 todo = (
  <div>
      {tasks.notCompleted.map((task, index) => {
          return (
          <ul>

          <li key={index}>
              {task}
                </li>

          </ul> 
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

export default NotCompleted
