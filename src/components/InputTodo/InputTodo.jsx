import classes from './InputTodo.module.css'


const InputTodo = ({inputText, setInputText}) => {
    //functions
    const inputTexthandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const addOnEnterhandler = (e) => {
        if(e.charCode === 13) {

            console.log('press enter');
        }
    }

    return (
        <div>
            <input className={classes.input} type="text" value={inputText} onKeyPress={addOnEnterhandler} onChange={inputTexthandler} placeholder='Add Task' />
        </div>
    )
}

export default InputTodo
