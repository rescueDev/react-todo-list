import React from 'react'
import Completed from '../Completed/Completed'
import NotCompleted from '../NotCompleted/NotCompleted'

function AllTasks() {
    return (
        <div>
            <NotCompleted></NotCompleted>
            <Completed></Completed>
        </div>
    )
}

export default AllTasks
