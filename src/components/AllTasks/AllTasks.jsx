import React, {useState} from 'react'
import Completed from '../Completed/Completed'
import NotCompleted from '../NotCompleted/NotCompleted'

function AllTasks({setNotCompleted}) {
    return (
        <div>
            <NotCompleted setNotCompleted={setNotCompleted}></NotCompleted>
            <Completed ></Completed>
        </div>
    )
}

export default AllTasks
