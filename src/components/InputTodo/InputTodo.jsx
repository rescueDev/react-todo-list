import classes from './InputTodo.module.css'


const InputTodo = ({inputText, setInputText, notCompleted, setNotCompleted}) => {
    //functions
    const inputTexthandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    }
    const addOnEnterhandler = (e) => {
        if(e.charCode === 13) {
            setInputText("");
            console.log('press enter');
            setNotCompleted([...notCompleted, {text: inputText, completed:false, id: Math.floor(Math.random() * 10000)}])
            console.log(notCompleted);
        }
    }

    

    return (
        <div>
            <input className={classes.input} type="text" value={inputText} onKeyPress={addOnEnterhandler} onChange={inputTexthandler} placeholder='Add Task' />
        </div>
    )
}

export default InputTodo
