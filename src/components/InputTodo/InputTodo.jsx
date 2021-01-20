import classes from './InputTodo.module.css'


function InputTodo(props) {
    return (
        <div>
            <input className={classes.input} type="text" value={props.value} onChange={props.change} placeholder='Add Task' onKeyPress={props.add}/>
        </div>
    )
}

export default InputTodo
