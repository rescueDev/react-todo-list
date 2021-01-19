import React from 'react'

function InputTodo(props) {
    return (
        <div>
            <input type="text" value={props.value} onChange={props.change} placeholder='Add Task'/>
        </div>
    )
}

export default InputTodo
